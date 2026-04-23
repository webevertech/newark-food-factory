import { promises as fs } from "fs";
import path from "path";

export type PublicEvent = {
  id: string;
  title: string;
  date: string;
  time?: string;
  venue?: string;
  address?: string;
  description?: string;
  imageUrl?: string;
  ticketUrl?: string;
  category?: string;
  price?: string;
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
  return a.date.localeCompare(b.date);
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

export async function getAllEvents(): Promise<PublicEvent[]> {
  const stored = await readStoredEvents();
  return [...stored].sort(sortByDateAsc);
}

export async function getUpcomingEvents(): Promise<PublicEvent[]> {
  const all = await getAllEvents();
  const now = new Date();
  return all.filter((event) => isUpcoming(event, now));
}

function generateId(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${slug || "event"}-${suffix}`;
}

export async function addEvent(input: EventInput): Promise<PublicEvent> {
  const stored = await readStoredEvents();
  const event: PublicEvent = {
    id: input.id ?? generateId(input.title),
    title: input.title,
    date: input.date,
    time: input.time,
    venue: input.venue,
    address: input.address,
    description: input.description,
    imageUrl: input.imageUrl,
    ticketUrl: input.ticketUrl,
    category: input.category,
    price: input.price,
    createdAt: input.createdAt ?? new Date().toISOString(),
  };
  stored.push(event);
  await writeStoredEvents(stored);
  return event;
}
