import { promises as fs } from "fs";
import path from "path";

export type PublicEvent = {
  id: string;
  title: string;
  date: string;
  time?: string;
  startTime?: string;
  endTime?: string;
  venue?: string;
  address?: string;
  description?: string;
  ticketUrl?: string;
  category?: string;
  price?: string;
  calendarId?: string;
  createdAt: string;
};

export type EventInput = Omit<PublicEvent, "id" | "createdAt"> &
  Partial<Pick<PublicEvent, "id" | "createdAt">>;

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "events.json");

async function readStoredEvents(): Promise<PublicEvent[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as PublicEvent[]) : [];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeStoredEvents(events: PublicEvent[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(events, null, 2), "utf8");
}

function sortByDateAsc(a: PublicEvent, b: PublicEvent): number {
  if (a.date !== b.date) return a.date.localeCompare(b.date);
  return (a.startTime ?? "").localeCompare(b.startTime ?? "");
}

function isUpcoming(event: PublicEvent, now: Date): boolean {
  const eventDate = new Date(event.date);
  if (Number.isNaN(eventDate.getTime())) return false;
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  return eventDate.getTime() >= startOfToday.getTime();
}

function formatTime12h(hhmm: string): string {
  const [hStr, mStr] = hhmm.split(":");
  const h = Number(hStr);
  const m = Number(mStr);
  if (Number.isNaN(h) || Number.isNaN(m)) return hhmm;
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  const minutes = m === 0 ? "" : `:${String(m).padStart(2, "0")}`;
  return `${hour12}${minutes} ${suffix}`;
}

function formatTimeRange(start?: string, end?: string): string | undefined {
  if (start && end) return `${formatTime12h(start)} – ${formatTime12h(end)}`;
  if (start) return formatTime12h(start);
  if (end) return formatTime12h(end);
  return undefined;
}

function venueKey(venue?: string): string {
  return (venue ?? "").trim().toLowerCase();
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function mergeSameDayVenue(events: PublicEvent[]): PublicEvent[] {
  type Group = { key: string; list: PublicEvent[] };
  const groups: Group[] = [];
  const groupIndex = new Map<string, number>();

  for (const event of events) {
    const vk = venueKey(event.venue);
    const groupingKey = vk || event.calendarId;
    const key = groupingKey ? `${event.date}|${groupingKey}` : `__solo__|${event.id}`;
    const idx = groupIndex.get(key);
    if (idx === undefined) {
      groupIndex.set(key, groups.length);
      groups.push({ key, list: [event] });
    } else {
      groups[idx].list.push(event);
    }
  }

  const result: PublicEvent[] = [];
  for (const { list } of groups) {
    if (list.length === 1) {
      result.push(list[0]);
      continue;
    }
    const sorted = [...list].sort((a, b) =>
      (a.startTime ?? "").localeCompare(b.startTime ?? ""),
    );
    const first = sorted[0];
    const startTime = sorted
      .map((e) => e.startTime)
      .filter((t): t is string => Boolean(t))
      .sort()[0];
    const endTime = sorted
      .map((e) => e.endTime)
      .filter((t): t is string => Boolean(t))
      .sort()
      .pop();
    const time = formatTimeRange(startTime, endTime) ?? first.time;
    const groupSlug = slugify(first.venue ?? first.calendarId ?? "venue");
    result.push({
      ...first,
      id: `fullday-${first.date}-${groupSlug}`,
      startTime,
      endTime,
      time,
      category: first.category ?? "Full Day Event",
      description:
        first.description ??
        `Both day and evening sessions are booked at ${first.venue ?? "the venue"} — full-day event.`,
    });
  }
  return result.sort(sortByDateAsc);
}

export async function getAllEvents(): Promise<PublicEvent[]> {
  const stored = await readStoredEvents();
  return mergeSameDayVenue([...stored].sort(sortByDateAsc));
}

export async function getUpcomingEvents(): Promise<PublicEvent[]> {
  const all = await getAllEvents();
  const now = new Date();
  return all.filter((event) => isUpcoming(event, now));
}

function generateId(title: string): string {
  const slug = slugify(title);
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${slug || "event"}-${suffix}`;
}

export async function addEvent(input: EventInput): Promise<PublicEvent> {
  const stored = await readStoredEvents();
  const id = input.id ?? generateId(input.title);
  const existingIdx = stored.findIndex((e) => e.id === id);
  const createdAt =
    input.createdAt ??
    (existingIdx >= 0 ? stored[existingIdx].createdAt : new Date().toISOString());
  const time =
    input.time ?? formatTimeRange(input.startTime, input.endTime);
  const event: PublicEvent = {
    id,
    title: input.title,
    date: input.date,
    time,
    startTime: input.startTime,
    endTime: input.endTime,
    venue: input.venue,
    address: input.address,
    description: input.description,
    ticketUrl: input.ticketUrl,
    category: input.category,
    price: input.price,
    calendarId: input.calendarId,
    createdAt,
  };
  if (existingIdx >= 0) {
    stored[existingIdx] = event;
  } else {
    stored.push(event);
  }
  await writeStoredEvents(stored);
  return event;
}
