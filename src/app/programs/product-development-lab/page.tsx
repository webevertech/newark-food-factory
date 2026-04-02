import {
  FlaskConical,
  ChefHat,
  Package,
  Truck,
  ShieldCheck,
  Tag,
  TrendingUp,
  UtensilsCrossed,
  CalendarDays,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Development Lab",
  description:
    "Turn your food idea into a market-ready product. Full-service development lab from recipe to retail in Newark, NJ.",
  alternates: { canonical: "/programs/product-development-lab" },
};

export default function ProductDevelopmentLabPage() {
  return (
    <>
      <PageHero
        icon={FlaskConical}
        title="From Recipe to Retail"
        subtitle="Turn your food idea into a market-ready product with our full-service development lab."
        image="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1920&q=90"
        imageAlt="Artisan food products on display"
      />

      {/* PROCESS */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                The Process
              </h2>
            </div>
          </div>
          <div className="mt-12 relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: ChefHat, label: "Recipe", step: "01" },
                { icon: FlaskConical, label: "Production", step: "02" },
                { icon: Package, label: "Packaging", step: "03" },
                { icon: Truck, label: "Distribution", step: "04" },
              ].map(({ icon: Icon, label, step }) => (
                <div key={label} className="relative flex flex-col items-center">
                  <div className="w-28 h-28 bg-gray-900 rounded-2xl flex flex-col items-center justify-center mb-4 relative z-10">
                    <span className="text-xs font-semibold text-primary-bright mb-1">{step}</span>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL SUPPORT */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1200&q=90"
                  alt="Food product development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  End-to-End
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  Full Support
                </h2>
                <p className="mt-4 text-gray-600">
                  We guide you through every step of product development, from recipe formulation to retail distribution.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    { icon: ShieldCheck, text: "Compliance & food safety" },
                    { icon: Tag, text: "Labeling & nutrition facts" },
                    { icon: TrendingUp, text: "Scaling from small batch to production" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-gray-700">
                      <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEST MARKET */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright">
                Validate
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Built-In Test Market
              </h2>
              <p className="mt-3 text-gray-400">Validate your product before scaling</p>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { icon: UtensilsCrossed, title: "Daily Meals", desc: "Feature your product in our rotating meal program." },
              { icon: CalendarDays, title: "Events", desc: "Sample and sell at community events." },
              { icon: Handshake, title: "Catering", desc: "Include your product in catering orders." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Bring Your Product to Life</h2>
          <p className="mt-4 text-lg text-white/80">Apply to our Product Development Lab.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white">Apply Now</Button>
            <Button href="/programs/food-business-incubator" variant="outline-light">Explore Incubator</Button>
          </div>
        </div>
      </section>
    </>
  );
}
