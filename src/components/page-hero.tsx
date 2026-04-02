import { LucideIcon } from "lucide-react";
import Image from "next/image";

export function PageHero({
  icon: Icon,
  title,
  subtitle,
  image,
  imageAlt = "",
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  variant?: string;
}) {
  return (
    <section className="relative bg-gray-950 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[440px] lg:min-h-[500px]">
        {/* LEFT — gradient panel */}
        <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-24 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-orange-500/15 to-amber-400/10" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(211,1,0,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(245,158,11,0.2) 0%, transparent 50%)",
            }}
          />
          <div className="absolute top-10 right-8 w-28 h-28 rounded-full bg-amber-400/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 mb-5">
              <Icon className="h-5 w-5 text-primary-bright" aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] max-w-lg">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-md leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT — full bleed image */}
        {image && (
          <div className="relative hidden lg:block">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="50vw"
              quality={90}
            />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-gray-950/80 to-transparent" />
          </div>
        )}

        {/* Mobile image fallback */}
        {image && (
          <div className="relative h-56 lg:hidden">
            <Image src={image} alt={imageAlt} fill className="object-cover" quality={90} sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
