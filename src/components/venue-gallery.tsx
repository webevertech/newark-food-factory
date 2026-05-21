"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Lightbox } from "@/components/lightbox";

type VenueImage = {
  src: string;
  area: string;
  alt: string;
};

const AREA_LABEL: Record<string, string> = {
  "culinary-hall": "Culinary Hall",
  greenhouse: "Greenhouse",
  courtyard: "Courtyard",
  "outdoor-patio": "Outdoor Patio",
};

const VENUE_IMAGES: VenueImage[] = [
  {
    src: "/Updated Images/culinary hall.webp",
    area: "culinary-hall",
    alt: "Culinary Hall",
  },
  {
    src: "/Updated Images/1st floor birthday party setup.webp",
    area: "culinary-hall",
    alt: "Culinary Hall set up for a birthday celebration",
  },
  {
    src: "/Updated Images/1st floor private chef experience.webp",
    area: "culinary-hall",
    alt: "Private chef experience in the Culinary Hall",
  },
  {
    src: "/Updated Images/1st floor workshop pics.webp",
    area: "culinary-hall",
    alt: "Workshop in the Culinary Hall",
  },
  {
    src: "/Updated Images/greenhouse.webp",
    area: "greenhouse",
    alt: "Greenhouse",
  },
  {
    src: "/Updated Images/Green house sweet 16 party image.webp",
    area: "greenhouse",
    alt: "Greenhouse styled for a sweet sixteen",
  },
  {
    src: "/Updated Images/Green house 25th bday party decor.webp",
    area: "greenhouse",
    alt: "Greenhouse decorated for a 25th birthday",
  },
  {
    src: "/Updated Images/courtyard.webp",
    area: "courtyard",
    alt: "Courtyard",
  },
  {
    src: "/Updated Images/courtyard 1.webp",
    area: "courtyard",
    alt: "Courtyard view",
  },
  {
    src: "/Updated Images/outdoor patio.webp",
    area: "outdoor-patio",
    alt: "Outdoor patio",
  },
  {
    src: "/Updated Images/outdoor patio 1.webp",
    area: "outdoor-patio",
    alt: "Outdoor patio view",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "culinary-hall", label: "Culinary Hall" },
  { key: "greenhouse", label: "Greenhouse" },
  { key: "courtyard", label: "Courtyard" },
  { key: "outdoor-patio", label: "Outdoor Patio" },
];

export function VenueGallery() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      active === "all"
        ? VENUE_IMAGES
        : VENUE_IMAGES.filter((img) => img.area === active),
    [active],
  );

  const lightboxItems = useMemo(
    () =>
      visible.map((img) => ({
        src: img.src,
        alt: img.alt,
        caption: AREA_LABEL[img.area] ?? img.area,
      })),
    [visible],
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div
        role="tablist"
        aria-label="Filter venue spaces"
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {FILTERS.map(({ key, label }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="gallery-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {visible.map(({ src, alt }, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            style={{ "--i": i } as CSSProperties}
            aria-label={`View ${alt} in larger size`}
            className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-200 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <Maximize2 className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && lightboxItems[lightboxIndex] && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
