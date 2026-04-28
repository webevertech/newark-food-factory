import { NextResponse, type NextRequest } from "next/server";
import {
  addEvent,
  getUpcomingEvents,
  type EventInput,
  type PublicEvent,
} from "@/lib/events-store";

export const dynamic = "force-dynamic";

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

function isAuthorized(request: NextRequest): boolean {
  const requiredKey = process.env.EVENTS_API_KEY;
  if (!requiredKey) return true;
  const provided =
    request.headers.get("x-api-key") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  return provided === requiredKey;
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
  if (pickBool(raw, "deleted") === true) {
    return { kind: "skip", reason: "deleted", id: pickString(raw, "id") };
  }

  const title = pickString(raw, "event_title", "title", "name");
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
    return { kind: "error", error: `Unparseable date: ${startRaw}` };
  }

  const endRaw = pickString(raw, "endTime", "end_time");
  const startTime = extractTime(startRaw);
  const endTime = endRaw ? extractTime(endRaw) : undefined;
  const explicitTime = pickString(raw, "time", "event_time");

  const input: EventInput = {
    id: pickString(raw, "id"),
    title,
    date,
    time: explicitTime,
    startTime,
    endTime,
    venue: pickString(
      raw,
      "calendarName",
      "calendar_name",
      "venue",
      "location",
      "address",
    ),
    address: pickString(raw, "address"),
    calendarId: pickString(raw, "calendarId", "calendar_id"),
    description: pickString(raw, "description", "summary", "details", "notes"),
    ticketUrl: pickString(raw, "ticketUrl", "ticket_url", "url", "link"),
    category: pickString(raw, "category", "type"),
    price: pickString(raw, "price", "ticket_price"),
  };

  return { kind: "ok", input };
}

export async function GET() {
  const events = await getUpcomingEvents();
  return NextResponse.json({ count: events.length, events });
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
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
