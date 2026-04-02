import {
  Warehouse,
  Truck,
  ChefHat,
  Rocket,
  Clock,
  CreditCard,
  Package,
  Check,
  Star,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Membership",
  description:
    "Flexible commercial kitchen access for food trucks, caterers, and startups. Hourly rentals, memberships, and storage in Newark, NJ.",
  alternates: { canonical: "/kitchen-membership" },
};

export default function KitchenMembershipPage() {
  return (
    <>
      <PageHero
        icon={Warehouse}
        title="Flexible Kitchen Access for Food Businesses"
        subtitle="Hourly rentals, memberships, and storage for food trucks, caterers, and startups."
        image="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1920&q=90"
        imageAlt="Professional commercial kitchen"
      />

      {/* WHO IT'S FOR */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary text-center">
            Built For You
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 text-center">Who It&apos;s For</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Truck, title: "Food Trucks", desc: "Prep, store, and comply, all in one place." },
              { icon: ChefHat, title: "Caterers", desc: "Professional kitchen for your catering operations." },
              { icon: Rocket, title: "Startups", desc: "Launch your food business without the overhead." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 p-6 text-center transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=90"
                alt="Commercial kitchen interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright">
                What You Get
              </p>
              <h2 className="text-3xl font-bold text-white mt-3">Kitchen Features</h2>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Clock, text: "Hourly kitchen rental" },
                  { icon: CreditCard, text: "Flexible memberships" },
                  { icon: Package, text: "Dry, refrigerated & freezer storage" },
                  { icon: CalendarCheck, text: "Online scheduling" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary-bright" />
                    </div>
                    <span className="text-white">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20" id="pricing">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary text-center">
            Plans
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 text-center">Pricing &amp; Plans</h2>
          <p className="mt-2 text-gray-600 text-center">Transparent pricing for every stage of your business</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {[
              {
                tier: "Hourly",
                price: "$25/hr",
                desc: "Pay-as-you-go kitchen access",
                features: ["Licensed kitchen use", "Basic equipment", "Walk-in scheduling"],
              },
              {
                tier: "Monthly",
                price: "$499/mo",
                desc: "Dedicated hours + storage",
                features: ["20 hrs/month kitchen time", "Storage locker included", "Priority scheduling", "Equipment access"],
                featured: true,
              },
              {
                tier: "Premium",
                price: "$899/mo",
                desc: "Unlimited access + coaching",
                features: ["Unlimited kitchen hours", "Full storage suite", "Business coaching", "Event access", "Priority everything"],
              },
            ].map(({ tier, price, desc, features, featured }) => (
              <div
                key={tier}
                className={`rounded-xl p-6 sm:p-8 transition-all ${
                  featured
                    ? "bg-primary text-white ring-2 ring-primary sm:scale-105"
                    : "bg-white border border-gray-200 hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {featured && (
                  <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    <Star className="h-3.5 w-3.5" /> Best Value
                  </div>
                )}
                <h3 className={`text-xl font-bold ${featured ? "" : "text-gray-900"}`}>{tier}</h3>
                <p className={`text-3xl font-bold mt-2 ${featured ? "" : "text-gray-900"}`}>{price}</p>
                <p className={`text-sm mt-1 ${featured ? "text-white/70" : "text-gray-500"}`}>{desc}</p>
                <ul className="mt-6 space-y-2">
                  {features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${featured ? "text-white/90" : "text-gray-700"}`}>
                      <Check className={`h-4 w-4 shrink-0 ${featured ? "text-white" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant={featured ? "white" : "primary"} className="mt-6 w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-24 px-6 sm:px-10 lg:px-16 xl:px-20 text-center" id="book">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold">Book Kitchen Time</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Contact us to schedule your kitchen hours or start a membership.
          </p>
          <Button href="/contact" variant="outline-light" className="mt-6">
            Book Kitchen
          </Button>
        </div>
      </section>
    </>
  );
}
