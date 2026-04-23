import { NextResponse, type NextRequest } from "next/server";
import {
  addEvent,
  getUpcomingEvents,
  type EventInput,
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

function normalizeDate(raw: string): string | null {
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

function isAuthorized(request: NextRequest): boolean {
  const requiredKey = process.env.EVENTS_API_KEY;
  if (!requiredKey) return true;
  const provided =
    request.headers.get("x-api-key") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  return provided === requiredKey;
}

export async function GET() {
  const events = await getUpcomingEvents();
  return NextResponse.json({ count: events.length, events });
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  let payload: IncomingPayload;
  try {
    payload = (await request.json()) as IncomingPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const title = pickString(payload, "title", "event_title", "name");
  const dateRaw = pickString(payload, "date", "event_date", "start_date");

  if (!title || !dateRaw) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["title", "date"],
      },
      { status: 400 },
    );
  }

  const date = normalizeDate(dateRaw);
  if (!date) {
    return NextResponse.json(
      { error: "Invalid date — use a parseable date string (e.g. 2026-05-15)" },
      { status: 400 },
    );
  }

  const input: EventInput = {
    title,
    date,
    time: pickString(payload, "time", "event_time", "start_time"),
    venue: pickString(payload, "venue", "location"),
    address: pickString(payload, "address"),
    description: pickString(payload, "description", "summary", "details"),
    imageUrl: pickString(payload, "imageUrl", "image_url", "image"),
    ticketUrl: pickString(payload, "ticketUrl", "ticket_url", "url", "link"),
    category: pickString(payload, "category", "type"),
    price: pickString(payload, "price", "ticket_price"),
  };

  const event = await addEvent(input);
  return NextResponse.json({ ok: true, event }, { status: 201 });
}
