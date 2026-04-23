"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniEventCard } from "@/components/event-cards";
import type { PublicEvent } from "@/lib/events-store";

export function EventCarousel({ events }: { events: PublicEvent[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateBounds = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    updateBounds();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateBounds, { passive: true });
    window.addEventListener("resize", updateBounds);
    return () => {
      el.removeEventListener("scroll", updateBounds);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = containerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-carousel-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 300;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div className="flex items-baseline gap-3 min-w-0">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase whitespace-nowrap">
            Also Coming Up
          </span>
          <span className="h-px w-16 bg-primary/30 hidden sm:block" />
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-medium text-gray-400 hidden sm:inline">
            {events.length} more event{events.length === 1 ? "" : "s"}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous events"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-gray-700 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next events"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-gray-700 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto snap-x snap-mandatory pb-2 -mx-2 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              data-carousel-card
              className="snap-start shrink-0 basis-[85%] sm:basis-[calc(50%-8px)] lg:basis-[calc(33.333%-11px)]"
            >
              <MiniEventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
