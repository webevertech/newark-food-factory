import mysql from "mysql2/promise";
import type { Pool, PoolOptions, RowDataPacket } from "mysql2/promise";
import type { PublicEvent } from "./events-store";

const TABLE = "events";

// Column order is shared by every statement below, so the row tuples built by
// toRow() line up with the placeholders.
const COLUMNS = [
  "id",
  "title",
  "event_date",
  "time_label",
  "start_time",
  "end_time",
  "venue",
  "address",
  "description",
  "ticket_url",
  "category",
  "price",
  "calendar_id",
  "created_at",
] as const;

// Matches the schema documented in docs/events-api-form-fields.md. Created on
// demand so a fresh database needs no manual setup.
const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS ${TABLE} (
  id          VARCHAR(80)   NOT NULL PRIMARY KEY,
  title       VARCHAR(200)  NOT NULL,
  event_date  DATE          NOT NULL,
  time_label  VARCHAR(300)  NULL,
  start_time  CHAR(5)       NULL,
  end_time    CHAR(5)       NULL,
  venue       VARCHAR(300)  NULL,
  address     VARCHAR(300)  NULL,
  description TEXT          NULL,
  ticket_url  VARCHAR(2048) NULL,
  category    VARCHAR(300)  NULL,
  price       VARCHAR(300)  NULL,
  calendar_id VARCHAR(300)  NULL,
  created_at  DATETIME      NOT NULL,
  updated_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_event_date (event_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
`;

// Next.js reloads modules in dev; cache the pool on globalThis so we never
// open a second one against a shared-hosting connection limit.
const globalForEvents = globalThis as unknown as {
  __eventsPool?: Pool;
  __eventsReady?: Promise<void>;
};

function poolOptions(): PoolOptions | null {
  const base: PoolOptions = {
    waitForConnections: true,
    connectionLimit: Number(process.env.DB_POOL_SIZE ?? 4),
    maxIdle: 2,
    idleTimeout: 60_000,
    enableKeepAlive: true,
    // Return DATE/DATETIME as plain strings so no implicit timezone maths
    // happens between the driver and our ISO strings.
    dateStrings: true,
    timezone: "Z",
    charset: "utf8mb4_general_ci",
  };

  const url = process.env.DATABASE_URL?.trim();
  if (url) {
    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      return null;
    }
    if (!parsed.protocol.startsWith("mysql")) return null;
    const database = decodeURIComponent(parsed.pathname.replace(/^\//, ""));
    if (!database) return null;
    return {
      ...base,
      host: parsed.hostname || "localhost",
      port: parsed.port ? Number(parsed.port) : 3306,
      user: decodeURIComponent(parsed.username),
      password: decodeURIComponent(parsed.password),
      database,
    };
  }

  const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = process.env;
  if (DB_HOST && DB_NAME && DB_USER) {
    return {
      ...base,
      host: DB_HOST,
      port: DB_PORT ? Number(DB_PORT) : 3306,
      user: DB_USER,
      password: DB_PASSWORD ?? "",
      database: DB_NAME,
    };
  }

  return null;
}

export function isDatabaseConfigured(): boolean {
  return poolOptions() !== null;
}

function getPool(): Pool {
  if (!globalForEvents.__eventsPool) {
    const options = poolOptions();
    if (!options) {
      throw new Error("No MySQL configuration — set DATABASE_URL or DB_HOST/DB_USER/DB_NAME");
    }
    globalForEvents.__eventsPool = mysql.createPool(options);
  }
  return globalForEvents.__eventsPool;
}

function toMysqlDateTime(iso: string): string {
  const parsed = new Date(iso);
  const safe = Number.isNaN(parsed.getTime()) ? new Date() : parsed;
  return safe.toISOString().slice(0, 19).replace("T", " ");
}

function fromMysqlDateTime(value: string): string {
  const parsed = new Date(`${value.replace(" ", "T")}Z`);
  return Number.isNaN(parsed.getTime())
    ? new Date().toISOString()
    : parsed.toISOString();
}

function toRow(event: PublicEvent): (string | null)[] {
  const orNull = (v: string | undefined) => (v === undefined || v === "" ? null : v);
  return [
    event.id,
    event.title,
    event.date,
    orNull(event.time),
    orNull(event.startTime),
    orNull(event.endTime),
    orNull(event.venue),
    orNull(event.address),
    orNull(event.description),
    orNull(event.ticketUrl),
    orNull(event.category),
    orNull(event.price),
    orNull(event.calendarId),
    toMysqlDateTime(event.createdAt),
  ];
}

function rowToEvent(row: RowDataPacket): PublicEvent {
  const orUndefined = (v: unknown) =>
    v === null || v === undefined || v === "" ? undefined : String(v);
  return {
    id: String(row.id),
    title: String(row.title),
    date: String(row.event_date).slice(0, 10),
    time: orUndefined(row.time_label),
    startTime: orUndefined(row.start_time),
    endTime: orUndefined(row.end_time),
    venue: orUndefined(row.venue),
    address: orUndefined(row.address),
    description: orUndefined(row.description),
    ticketUrl: orUndefined(row.ticket_url),
    category: orUndefined(row.category),
    price: orUndefined(row.price),
    calendarId: orUndefined(row.calendar_id),
    createdAt: fromMysqlDateTime(String(row.created_at)),
  };
}

async function bulkInsert(events: PublicEvent[]): Promise<void> {
  if (events.length === 0) return;
  const pool = getPool();
  await pool.query(
    `INSERT IGNORE INTO ${TABLE} (${COLUMNS.join(", ")}) VALUES ?`,
    [events.map(toRow)],
  );
}

/**
 * Creates the table if needed and, the first time the table is empty, imports
 * whatever the JSON file store holds so an existing site keeps its events.
 * Runs once per process; a failure clears the latch so the next call retries.
 */
export function ensureReady(seed: () => Promise<PublicEvent[]>): Promise<void> {
  if (!globalForEvents.__eventsReady) {
    globalForEvents.__eventsReady = (async () => {
      const pool = getPool();
      await pool.query(CREATE_TABLE_SQL);
      const [rows] = await pool.query<RowDataPacket[]>(
        `SELECT COUNT(*) AS total FROM ${TABLE}`,
      );
      if (Number(rows[0]?.total ?? 0) === 0) {
        const seeded = await seed();
        if (seeded.length > 0) {
          await bulkInsert(seeded);
          console.log(`[events] imported ${seeded.length} event(s) from the JSON store into MySQL`);
        }
      }
    })().catch((err) => {
      globalForEvents.__eventsReady = undefined;
      throw err;
    });
  }
  return globalForEvents.__eventsReady;
}

export async function readAllEvents(): Promise<PublicEvent[]> {
  const pool = getPool();
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT ${COLUMNS.join(", ")} FROM ${TABLE} ORDER BY event_date ASC, start_time ASC`,
  );
  return rows.map(rowToEvent);
}

export async function getEventById(id: string): Promise<PublicEvent | null> {
  const pool = getPool();
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT ${COLUMNS.join(", ")} FROM ${TABLE} WHERE id = ? LIMIT 1`,
    [id],
  );
  return rows.length > 0 ? rowToEvent(rows[0]) : null;
}

/**
 * Atomic insert-or-update on the primary key. created_at is deliberately left
 * out of the update list so the original creation time survives re-posts.
 * Plain `col = ?` assignments are used instead of VALUES()/alias syntax, which
 * differ between MySQL 8+ and MariaDB.
 */
export async function upsertEvent(event: PublicEvent): Promise<PublicEvent> {
  const pool = getPool();
  const row = toRow(event);
  const updatable = COLUMNS.filter((c) => c !== "id" && c !== "created_at");
  const sql =
    `INSERT INTO ${TABLE} (${COLUMNS.join(", ")}) ` +
    `VALUES (${COLUMNS.map(() => "?").join(", ")}) ` +
    `ON DUPLICATE KEY UPDATE ${updatable.map((c) => `${c} = ?`).join(", ")}`;
  const updateValues = updatable.map((c) => row[COLUMNS.indexOf(c)]);
  await pool.execute(sql, [...row, ...updateValues]);
  return (await getEventById(event.id)) ?? event;
}
