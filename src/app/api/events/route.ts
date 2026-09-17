import { timingSafeEqual } from "crypto";
import { NextResponse, type NextRequest } from "next/server";
import {
  addEvent,
  getUpcomingEvents,
  type EventInput,
  type PublicEvent,
} from "@/lib/events-store";

export const dynamic = "force-dynamic";

// Abuse limits: the store is a flat JSON file read on every render, so keep
// individual writes bounded.
const MAX_BODY_BYTES = 256 * 1024;
const MAX_ITEMS_PER_REQUEST = 100;
const LIMITS = {
  id: 80,
  title: 200,
  short: 300,
  description: 4000,
  url: 2048,
} as const;
const ID_PATTERN = /^[A-Za-z0-9_-]{1,80}$/;

type IncomingPayload = Record<string, unknown>;

function pickString(payload: IncomingPayload, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = payload[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
}

function pickBool(payload: IncomingPayload, ...keys: string[]): boolean | undefined {
  for (const key of keys) {
    const v = payload[key];
    if (typeof v === "boolean") return v;
    if (typeof v === "string") {
      if (v.toLowerCase() === "true") return true;
      if (v.toLowerCase() === "false") return false;
    }
  }
  return undefined;
}

function clamp(value: string | undefined, max: number): string | undefined {
  if (value === undefined) return undefined;
  return value.length > max ? value.slice(0, max) : value;
}

// Only accept ids we would be happy to echo into the DOM and use as a file key.
function sanitizeId(raw: string | undefined): string | undefined {
  return raw && ID_PATTERN.test(raw) ? raw : undefined;
}

// Ticket links are rendered as <a href> for the public. Allow http(s), site
// relative paths, mailto: and tel:. Anything else (javascript:, data:, etc.)
// is dropped so the card falls back to the contact page.
function sanitizeUrl(raw: string | undefined): string | undefined {
  if (!raw || raw.length > LIMITS.url) return undefined;
  if (raw.startsWith("/") && !raw.startsWith("//")) return raw;
  if (/^(mailto|tel):/i.test(raw)) return raw;

  let candidate = raw;
  if (raw.startsWith("//")) candidate = `https:${raw}`;
  else if (!/^[a-z][a-z0-9+.-]*:/i.test(raw)) candidate = `https://${raw}`;

  try {
    const url = new URL(candidate);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.toString();
    }
  } catch {
    // fall through
  }
  return undefined;
}

function normalizeDate(raw: string): string | null {
  const candidate = raw.includes(" ") && !raw.includes("T")
    ? raw.replace(" ", "T")
    : raw;
  const parsed = new Date(candidate);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }
  const m = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : null;
}

function extractTime(raw: string): string | undefined {
  const m = raw.match(/(\d{2}:\d{2})/);
  return m ? m[1] : undefined;
}

function isConfigured(): boolean {
  return Boolean(process.env.EVENTS_API_KEY);
}

// Fail closed: if no key is configured the endpoint refuses writes rather
// than accepting them from anyone. Comparison is constant-time.
function isAuthorized(request: NextRequest): boolean {
  const requiredKey = process.env.EVENTS_API_KEY;
  if (!requiredKey) return false;
  const provided =
    request.headers.get("x-api-key") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!provided) return false;
  const a = Buffer.from(provided, "utf8");
  const b = Buffer.from(requiredKey, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

function tryParseEventsString(raw: string): IncomingPayload[] | null {
  const cleaned = raw.replace(/^\s*\d+\.\s*events\s*:\s*/i, "").trim();
  if (!cleaned) return null;
  try {
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) return parsed as IncomingPayload[];
    if (
      parsed &&
      typeof parsed === "object" &&
      Array.isArray((parsed as IncomingPayload).events)
    ) {
      return (parsed as IncomingPayload).events as IncomingPayload[];
    }
  } catch {
    return null;
  }
  return null;
}

function unwrapPayload(payload: unknown): {
  rawList: IncomingPayload[] | null;
  defaults: IncomingPayload;
} {
  if (Array.isArray(payload)) {
    return { rawList: payload as IncomingPayload[], defaults: {} };
  }
  if (!payload || typeof payload !== "object") {
    return { rawList: null, defaults: {} };
  }

  const obj = payload as IncomingPayload;
  const { body, events, ...defaults } = obj;

  if (Array.isArray(events)) {
    return { rawList: events as IncomingPayload[], defaults };
  }

  if (body !== undefined) {
    if (Array.isArray(body)) {
      return { rawList: body as IncomingPayload[], defaults };
    }
    if (typeof body === "string") {
      const parsed = tryParseEventsString(body);
      if (parsed) return { rawList: parsed, defaults };
    }
    if (body && typeof body === "object") {
      const inner = body as IncomingPayload;
      if (Array.isArray(inner.events)) {
        return { rawList: inner.events as IncomingPayload[], defaults };
      }
    }
  }

  return { rawList: [obj], defaults: {} };
}

type BuildResult =
  | { kind: "ok"; input: EventInput }
  | { kind: "skip"; reason: string; id?: string }
  | { kind: "error"; error: string };

function buildInput(raw: IncomingPayload): BuildResult {
  const id = sanitizeId(pickString(raw, "id"));

  if (pickBool(raw, "deleted") === true) {
    return { kind: "skip", reason: "deleted", id };
  }

  const status = pickString(raw, "appointmentStatus", "appoinmentStatus");
  if (status && status.toLowerCase() !== "confirmed") {
    return {
      kind: "skip",
      reason: `appointmentStatus=${clamp(status, 50)}`,
      id,
    };
  }

  const title = clamp(pickString(raw, "event_title", "title", "name"), LIMITS.title);
  const startRaw = pickString(
    raw,
    "startTime",
    "start_time",
    "date",
    "event_date",
    "start_date",
  );

  if (!title || !startRaw) {
    return {
      kind: "error",
      error: "Missing required fields — need title (or event_title) and startTime (or date)",
    };
  }

  const date = normalizeDate(startRaw);
  if (!date) {
    return { kind: "error", error: `Unparseable date: ${clamp(startRaw, 60)}` };
  }

  const endRaw = pickString(raw, "endTime", "end_time");
  const startTime = extractTime(startRaw);
  const endTime = endRaw ? extractTime(endRaw) : undefined;
  const explicitTime = clamp(pickString(raw, "time", "event_time"), LIMITS.short);

  const input: EventInput = {
    id,
    title,
    date,
    time: explicitTime,
    startTime,
    endTime,
    venue: clamp(
      pickString(raw, "calendarName", "calendar_name", "venue", "location", "address"),
      LIMITS.short,
    ),
    address: clamp(pickString(raw, "address"), LIMITS.short),
    calendarId: clamp(pickString(raw, "calendarId", "calendar_id"), LIMITS.short),
    description: clamp(
      pickString(raw, "description", "summary", "details", "notes"),
      LIMITS.description,
    ),
    ticketUrl: sanitizeUrl(pickString(raw, "ticketUrl", "ticket_url", "url", "link")),
    category: clamp(pickString(raw, "category", "type"), LIMITS.short),
    price: clamp(pickString(raw, "price", "ticket_price"), LIMITS.short),
  };

  return { kind: "ok", input };
}

export async function GET() {
  const events = await getUpcomingEvents();
  return NextResponse.json({ count: events.length, events });
}

export async function POST(request: NextRequest) {
  if (!isConfigured()) {
    console.error(
      "[events] EVENTS_API_KEY is not set; refusing POST /api/events. Set it in the host's environment variables.",
    );
    return NextResponse.json(
      { error: "Events API is not configured" },
      { status: 503 },
    );
  }
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const declared = Number(request.headers.get("content-length") ?? "0");
  if (declared > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let payload: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }
    payload = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { rawList, defaults } = unwrapPayload(payload);
  if (rawList === null) {
    return NextResponse.json(
      { error: "Body must be an object, an array, or { events: [...] }" },
      { status: 400 },
    );
  }
  if (rawList.length > MAX_ITEMS_PER_REQUEST) {
    return NextResponse.json(
      { error: `Too many items — max ${MAX_ITEMS_PER_REQUEST} per request` },
      { status: 400 },
    );
  }

  const created: PublicEvent[] = [];
  const skipped: { reason: string; id?: string }[] = [];
  const errors: { index: number; error: string }[] = [];

  for (let i = 0; i < rawList.length; i++) {
    const item = rawList[i];
    if (!item || typeof item !== "object") {
      errors.push({ index: i, error: "Item is not an object" });
      continue;
    }
    const merged = { ...defaults, ...(item as IncomingPayload) };
    const result = buildInput(merged);
    if (result.kind === "skip") {
      skipped.push({ reason: result.reason, id: result.id });
      continue;
    }
    if (result.kind === "error") {
      errors.push({ index: i, error: result.error });
      continue;
    }
    const event = await addEvent(result.input);
    created.push(event);
  }

  const status = errors.length === 0 ? (created.length > 0 ? 201 : 200) : 207;
  return NextResponse.json(
    {
      ok: errors.length === 0,
      created: created.length,
      events: created,
      skipped: skipped.length ? skipped : undefined,
      errors: errors.length ? errors : undefined,
    },
    { status },
  );
}
