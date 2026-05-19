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
  courtyard: "Courtyard",
  patio: "Outdoor Patio",
  greenhouse: "Greenhouse",
};

const VENUE_IMAGES: VenueImage[] = [
  {
    src: "/1st floor 1.jpeg",
    area: "culinary-hall",
    alt: "Culinary Hall event space",
  },
  {
    src: "/1st floor 2.jpeg",
    area: "culinary-hall",
    alt: "Culinary Hall event space",
  },
  {
    src: "/1st floor 3.jpeg",
    area: "culinary-hall",
    alt: "Culinary Hall event space",
  },
  {
    src: "/1st floor 4.jpeg",
    area: "culinary-hall",
    alt: "Culinary Hall event space",
  },
  {
    src: "/1st floor 5.jpeg",
    area: "culinary-hall",
    alt: "Culinary Hall event space",
  },
  {
    src: "/1st floor workshop pics.jpg",
    area: "culinary-hall",
    alt: "Culinary Hall workshop",
  },
  { src: "/2nd floor 1.jpeg", area: "greenhouse", alt: "Greenhouse" },
  { src: "/2nd floor 2.jpeg", area: "greenhouse", alt: "Greenhouse" },
  { src: "/2nd floor 3.jpeg", area: "greenhouse", alt: "Greenhouse" },
  { src: "/2nd floor 4.jpeg", area: "greenhouse", alt: "Greenhouse" },
  { src: "/courtyard 1.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 2.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 3.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 4.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 5.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 6.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 7.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/courtyard 8.jpeg", area: "courtyard", alt: "Courtyard" },
  { src: "/outdoor patio 1.jpeg", area: "patio", alt: "Outdoor patio" },
  { src: "/outdoor patio 2.jpeg", area: "patio", alt: "Outdoor patio" },
  { src: "/outdoor patio 3.jpeg", area: "patio", alt: "Outdoor patio" },
  {
    src: "/Green house sweet 16 party image.jpg",
    area: "greenhouse",
    alt: "Greenhouse — sweet sixteen",
  },
  {
    src: "/Green house 25th bday party decor.jpg",
    area: "greenhouse",
    alt: "Greenhouse — 25th birthday",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "culinary-hall", label: "Culinary Hall" },
  { key: "courtyard", label: "Courtyard" },
  { key: "patio", label: "Outdoor Patio" },
  { key: "greenhouse", label: "Greenhouse" },
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
