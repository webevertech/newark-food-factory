import { LucideIcon } from "lucide-react";
import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
}: {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  variant?: string;
}) {
  return (
    <section className="relative bg-gray-950 overflow-hidden min-h-[400px] sm:min-h-[460px] flex items-center">
      {/* Full-bleed background image */}
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-950/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

      {/* Content — centered */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
