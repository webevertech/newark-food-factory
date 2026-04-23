"use client";

import { useEffect, useState, useCallback } from "react";
import {
  X,
  Clock,
  MapPin,
  ArrowUpRight,
  Tag,
  CalendarDays,
} from "lucide-react";
import type { PublicEvent } from "@/lib/events-store";

const MONTH_SHORT = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const WEEKDAY_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function dateParts(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return { day: "—", month: "—", year: "", weekday: "" };
  }
  return {
    day: String(date.getUTCDate()).padStart(2, "0"),
    month: MONTH_SHORT[date.getUTCMonth()],
    year: String(date.getUTCFullYear()),
    weekday: WEEKDAY_LONG[date.getUTCDay()],
  };
}

function longDateLabel(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function daysUntil(value: string): number | null {
  const target = new Date(value);
  if (Number.isNaN(target.getTime())) return null;
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const event = Date.UTC(
    target.getUTCFullYear(),
    target.getUTCMonth(),
    target.getUTCDate(),
  );
  return Math.round((event - today) / 86400000);
}

function countdownLabel(value: string): string {
  const days = daysUntil(value);
  if (days === null) return "Soon";
  if (days <= 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days < 14) return `In ${days} days`;
  if (days < 60) return `In ${Math.round(days / 7)} weeks`;
  return `In ${Math.round(days / 30)} months`;
}

function EventModal({
  event,
  onClose,
}: {
  event: PublicEvent;
  onClose: () => void;
}) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleEscape]);

  const parts = dateParts(event.date);
  const ticketHref = event.ticketUrl ?? "/contact/";
  const titleId = `event-${event.id}-title`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm cursor-default"
      />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 backdrop-blur hover:bg-white text-gray-900 flex items-center justify-center shadow-md transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary to-primary-dark text-white p-8 sm:p-10 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative flex items-start gap-5">
            <div className="text-7xl sm:text-8xl font-black leading-[0.85] tabular-nums tracking-tighter">
              {parts.day}
            </div>
            <div className="pt-2">
              <div className="text-xl sm:text-2xl font-black tracking-[0.2em]">
                {parts.month}
              </div>
              <div className="text-xs font-bold tracking-[0.25em] text-white/70 mt-1">
                {parts.year}
              </div>
              <div className="text-sm text-white/90 mt-2 font-medium">
                {parts.weekday}
              </div>
            </div>
          </div>
          {event.category && (
            <div className="relative inline-flex mt-6 items-center rounded-full bg-white/15 border border-white/25 px-3 py-1 text-[11px] font-bold tracking-[0.2em] uppercase">
              {event.category}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-8 sm:p-10">
          <h2
            id={titleId}
            className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
          >
            {event.title}
          </h2>

          {event.description && (
            <p className="mt-5 text-gray-600 leading-relaxed">
              {event.description}
            </p>
          )}

          <dl className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-5 border-t border-gray-100 pt-6">
            <DetailRow icon={CalendarDays} label="Date">
              {parts.weekday}, {longDateLabel(event.date)}
            </DetailRow>
            {event.time && (
              <DetailRow icon={Clock} label="Time">
                {event.time}
              </DetailRow>
            )}
            {event.venue && (
              <DetailRow icon={MapPin} label="Venue">
                <div>{event.venue}</div>
                {event.address && (
                  <div className="text-xs text-gray-500 mt-0.5">
                    {event.address}
                  </div>
                )}
              </DetailRow>
            )}
            {event.price && (
              <DetailRow icon={Tag} label="Price">
                {event.price}
              </DetailRow>
            )}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ticketHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-bold hover:bg-primary-dark transition-colors"
            >
              {event.ticketUrl ? "Reserve a Spot" : "Inquire to Attend"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-700 px-6 py-3 text-sm font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Clock;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 pt-1">
        <dt className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
          {label}
        </dt>
        <dd className="mt-1 text-sm font-medium text-gray-900">{children}</dd>
      </div>
    </div>
  );
}

export function FeaturedEventCard({ event }: { event: PublicEvent }) {
  const [open, setOpen] = useState(false);
  const parts = dateParts(event.date);

  return (
    <>
      <article className="relative overflow-hidden rounded-3xl bg-gray-950 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none"
        />

        <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col">
            <div className="inline-flex self-start items-center gap-2 rounded-full bg-primary/20 border border-primary-bright/30 px-3 py-1 text-[11px] font-bold tracking-[0.25em] uppercase text-primary-bright mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse" />
              Next Up · {countdownLabel(event.date)}
            </div>
            <div className="flex items-start gap-5">
              <div className="text-[8rem] sm:text-[10rem] lg:text-[12rem] font-black leading-[0.8] tabular-nums tracking-tighter">
                {parts.day}
              </div>
              <div className="pt-3 sm:pt-4">
                <div className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-primary-bright">
                  {parts.month}
                </div>
                <div className="text-sm font-bold tracking-[0.25em] text-white/60 mt-1">
                  {parts.year}
                </div>
                <div className="text-sm text-white/80 mt-3 font-medium">
                  {parts.weekday}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {event.category && (
              <div className="text-[11px] font-bold tracking-[0.3em] text-primary-bright uppercase mb-3">
                {event.category}
              </div>
            )}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              {event.title}
            </h3>

            {event.description && (
              <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl line-clamp-3">
                {event.description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
              {event.time && (
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary-bright" />
                  {event.time}
                </span>
              )}
              {event.venue && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-bright" />
                  {event.venue}
                </span>
              )}
              {event.price && (
                <span className="inline-flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary-bright" />
                  {event.price}
                </span>
              )}
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-950 px-7 py-3.5 text-sm font-bold hover:bg-primary-bright hover:text-white transition-colors cursor-pointer"
              >
                View Event Details
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {open && <EventModal event={event} onClose={() => setOpen(false)} />}
    </>
  );
}

export function MiniEventCard({ event }: { event: PublicEvent }) {
  const [open, setOpen] = useState(false);
  const parts = dateParts(event.date);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block text-left w-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-baseline gap-1.5">
            <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
              {parts.month}
            </span>
            <span className="text-3xl font-black text-gray-900 tabular-nums leading-none">
              {parts.day}
            </span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            {countdownLabel(event.date)}
          </span>
        </div>

        {event.category && (
          <div className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">
            {event.category}
          </div>
        )}

        <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 min-h-[3.25rem]">
          {event.title}
        </h4>

        <div className="mt-4 space-y-1.5 text-xs text-gray-500">
          {event.time && (
            <div className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              {event.time}
            </div>
          )}
          {event.venue && (
            <div className="flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gray-400 mt-0.5 shrink-0" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">
            {event.price ?? "Inquire"}
          </span>
          <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </button>

      {open && <EventModal event={event} onClose={() => setOpen(false)} />}
    </>
  );
}
