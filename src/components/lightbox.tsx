"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const SWIPE_THRESHOLD = 50;

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const current = items[index];
  const total = items.length;
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  // Keyboard: Esc / ← / →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  // Body scroll lock + initial focus
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
    };
  }, []);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  if (!current) return null;

  const prevIdx = (index - 1 + total) % total;
  const nextIdx = (index + 1) % total;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="lightbox-root fixed inset-0 z-[200] flex items-center justify-center"
    >
      {/* Scrim */}
      <button
        type="button"
        aria-label="Close photo viewer"
        onClick={onClose}
        className="absolute inset-0 bg-gray-950/95 backdrop-blur-md cursor-default"
      />

      {/* Counter — top center */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] text-white tabular-nums">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 text-white/40">/</span>
          {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Close — top right */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev — desktop edge */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous photo"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-primary border border-white/15 backdrop-blur-md hidden sm:flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next — desktop edge */}
      <button
        type="button"
        onClick={goNext}
        aria-label="Next photo"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-primary border border-white/15 backdrop-blur-md hidden sm:flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image stage — crossfade by key */}
      <div
        className="relative z-[5] w-full h-full flex items-center justify-center px-4 sm:px-20 py-20 sm:py-16"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={current.src}
          className="lightbox-stage relative max-w-[min(95vw,1400px)] max-h-[min(85vh,900px)] w-full h-full flex items-center justify-center"
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1200}
            className="max-h-[min(85vh,900px)] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl"
            priority
            quality={90}
            sizes="(min-width: 1024px) 1400px, 100vw"
          />
        </div>
      </div>

      {/* Caption + mobile nav — bottom */}
      <div className="absolute bottom-4 left-0 right-0 z-10 px-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous photo"
          className="sm:hidden w-11 h-11 rounded-full bg-white/10 hover:bg-primary border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {current.caption && (
          <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 text-xs font-medium text-white/90 max-w-[60vw] truncate">
            {current.caption}
          </div>
        )}

        <button
          type="button"
          onClick={goNext}
          aria-label="Next photo"
          className="sm:hidden w-11 h-11 rounded-full bg-white/10 hover:bg-primary border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Neighbor preload (hidden) — avoids flicker when navigating */}
      <div className="hidden">
        <Image
          src={items[prevIdx]?.src ?? current.src}
          alt=""
          width={1600}
          height={1200}
          aria-hidden
        />
        <Image
          src={items[nextIdx]?.src ?? current.src}
          alt=""
          width={1600}
          height={1200}
          aria-hidden
        />
      </div>
    </div>
  );
}
