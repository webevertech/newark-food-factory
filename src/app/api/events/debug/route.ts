import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function safeList(dir: string): Promise<string[] | string> {
  try {
    return await fs.readdir(dir);
  } catch (err) {
    return `ERR: ${(err as Error).message}`;
  }
}

export async function GET() {
  const envValue = process.env.EVENTS_DATA_DIR ?? null;
  const resolvedDataDir = envValue
    ? path.resolve(envValue)
    : path.join(process.cwd(), "data");
  const dataFile = path.join(resolvedDataDir, "events.json");

  let fileExists = false;
  let fileSize: number | null = null;
  let eventCount: number | null = null;
  let readError: string | null = null;

  try {
    const stat = await fs.stat(dataFile);
    fileExists = true;
    fileSize = stat.size;
    const raw = await fs.readFile(dataFile, "utf8");
    const parsed = JSON.parse(raw);
    eventCount = Array.isArray(parsed) ? parsed.length : null;
  } catch (err) {
    readError = (err as Error).message;
  }

  const homeDir = process.env.HOME ?? null;
  const homeListing = homeDir ? await safeList(homeDir) : null;
  const eventsDataListing = await safeList(resolvedDataDir);
  const cwdParentListing = await safeList(path.dirname(process.cwd()));

  return NextResponse.json({
    cwd: process.cwd(),
    homeDir,
    envEventsDataDir: envValue,
    resolvedDataDir,
    dataFile,
    fileExists,
    fileSize,
    eventCount,
    readError,
    homeListing,
    eventsDataListing,
    cwdParentListing,
    nodeVersion: process.version,
    deployMarker: "debug-v2",
    timestamp: new Date().toISOString(),
  });
}
