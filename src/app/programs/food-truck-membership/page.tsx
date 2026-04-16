import {
  Truck,
  ChefHat,
  Warehouse,
  Calendar,
  ShieldCheck,
  Megaphone,
  BarChart3,
  Star,
  Check,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Food Truck Membership",
  description:
    "Commissary kitchen access, storage, and business growth support for food truck owners and caterers in Newark, NJ.",
  path: "/programs/food-truck-membership",
  keywords: ["food truck commissary Newark", "food truck kitchen rental NJ", "mobile food vendor support", "food truck storage Newark"],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Programs", path: "/start-a-food-business" },
  { name: "Food Truck Membership", path: "/programs/food-truck-membership" },
]);

export default function FoodTruckMembershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHero
        icon={Truck}
        title="Your Commissary Kitchen + Business Growth Partner"
        subtitle="More than a kitchen. We help food truck owners and caterers build and scale their businesses."
        image="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=1920&q=90"
        imageAlt="Food truck serving customers"
      />

      {/* WHAT WE OFFER */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Services
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                What We Offer
              </h2>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Commissary Kitchen Access",
                icon: ChefHat,
                items: ["Licensed facility", "Prep stations", "Equipment access"],
              },
              {
                title: "Storage Solutions",
                icon: Warehouse,
                items: ["Dry storage", "Refrigeration", "Freezer space"],
              },
              {
                title: "Operational Support",
                icon: ShieldCheck,
                items: ["Scheduling", "Cleaning compliance", "Health code alignment"],
              },
              {
                title: "Business Development",
                icon: BarChart3,
                items: ["Pricing strategy", "Menu engineering", "Cost control", "Marketing support", "Event booking opportunities"],
              },
            ].map(({ title, icon: Icon, items }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright">
                  Our Difference
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  Why We&apos;re Different
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6">
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Typical Commissary</p>
                    <p className="mt-1 text-gray-300">Just space. You&apos;re on your own.</p>
                  </div>
                  <div className="rounded-xl bg-primary text-white p-6">
                    <p className="text-sm text-white/70 font-medium uppercase tracking-wider">Newark Food Factory</p>
                    <p className="mt-1 font-semibold">A full growth platform with kitchen, coaching, events, and community.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=1200&q=90"
                  alt="Food truck preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Membership Tiers
              </h2>
              <p className="mt-3 text-gray-600">Choose the plan that fits your business</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" id="pricing">
            {[
              {
                tier: "Basic",
                price: "Contact us",
                desc: "Kitchen access + compliance",
                features: ["Licensed kitchen access", "Health code compliance", "Basic scheduling"],
              },
              {
                tier: "Pro",
                price: "Contact us",
                desc: "Storage + scheduling priority",
                features: ["Everything in Basic", "Dedicated storage", "Priority scheduling", "Equipment priority"],
                featured: true,
              },
              {
                tier: "Growth",
                price: "Contact us",
                desc: "Business coaching + event access",
                features: ["Everything in Pro", "Business coaching", "Event access", "Marketing support", "Catering opportunities"],
              },
            ].map(({ tier, price, desc, features, featured }) => (
              <div
                key={tier}
                className={`rounded-xl p-6 sm:p-8 transition-all ${
                  featured
                    ? "bg-primary text-white ring-2 ring-primary sm:scale-105"
                    : "bg-white border border-gray-200 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {featured && (
                  <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    <Star className="h-3.5 w-3.5" /> Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold ${featured ? "" : "text-gray-900"}`}>{tier}</h3>
                <p className={`text-sm mt-1 ${featured ? "text-white/70" : "text-gray-500"}`}>{desc}</p>
                <p className={`text-lg font-semibold mt-4 ${featured ? "" : "text-gray-900"}`}>{price}</p>
                <ul className="mt-6 space-y-2">
                  {features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${featured ? "text-white/90" : "text-gray-700"}`}>
                      <Check className={`h-4 w-4 shrink-0 ${featured ? "text-white" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={featured ? "white" : "primary"}
                  className="mt-6 w-full"
                >
                  Join Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT INTEGRATION — full-bleed image with overlay content */}
      <section className="relative min-h-[400px] sm:min-h-[480px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=85"
          alt="Food event"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-transparent" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-20">
          <div>
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
                Event Access
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Members Get Exclusive Event Integration
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Star, text: "Priority vending at all NFF events" },
                  { icon: Calendar, text: "Access to catering gigs through our network" },
                  { icon: Megaphone, text: "Spotlight your brand at community events" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-gray-200">
                    <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary-bright" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
              <Button href="/meals-events#events" className="mt-10">
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Join Our Membership</h2>
          <p className="mt-4 text-lg text-white/80">Get started with the commissary that helps you grow.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white">Join Membership</Button>
            <Button href="/kitchen-membership#pricing" variant="outline-light">View Plans</Button>
            <Button href="/meals-events#events" variant="outline-light">Book an Event</Button>
          </div>
        </div>
      </section>
    </>
  );
}
