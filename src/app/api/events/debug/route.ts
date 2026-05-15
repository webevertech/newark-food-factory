import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

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

  return NextResponse.json({
    cwd: process.cwd(),
    envEventsDataDir: envValue,
    resolvedDataDir,
    dataFile,
    fileExists,
    fileSize,
    eventCount,
    readError,
    nodeVersion: process.version,
    deployMarker: "debug-v1",
  });
}
