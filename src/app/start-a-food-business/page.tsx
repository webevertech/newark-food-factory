import {
  Rocket,
  Lightbulb,
  ChefHat,
  ShoppingCart,
  CalendarDays,
  Truck,
  TrendingUp,
  UtensilsCrossed,
  Handshake,
  Palette,
  DollarSign,
  Users,
} from "lucide-react";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Start a Food Business",
  description:
    "Launch your food business with Newark Food Factory. Kitchen access, coaching, sales channels, and community support from idea to scale.",
  path: "/start-a-food-business",
  keywords: ["start food business Newark", "how to start a food business NJ", "food business startup", "commercial kitchen access Newark"],
});

export default function StartFoodBusinessPage() {
  return (
    <>
      <PageHero
        icon={Rocket}
        title="Launch Your Food Business"
        subtitle="From idea to thriving business. We provide the kitchen, coaching, sales channels, and community to help you succeed."
        image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=90"
        imageAlt="Entrepreneur preparing food in commercial kitchen"
      />

      {/* ════════════════════════════════════════════════════════════════
          PATHWAY — dark numbered squares with connecting line
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Your Pathway
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Six steps to building your food business
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[8.3%] right-[8.3%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
              {[
                { num: "01", icon: Lightbulb, label: "Idea" },
                { num: "02", icon: ChefHat, label: "Kitchen" },
                { num: "03", icon: ShoppingCart, label: "First Sale" },
                { num: "04", icon: CalendarDays, label: "Events" },
                { num: "05", icon: Truck, label: "Delivery" },
                { num: "06", icon: TrendingUp, label: "Scale" },
              ].map(({ num, icon: Icon, label }) => (
                <div key={label} className="relative">
                  <div className="mx-auto w-24 h-24 rounded-2xl bg-gray-900 flex flex-col items-center justify-center mb-5 shadow-lg">
                    <span className="text-[10px] font-bold text-primary-bright tracking-widest">
                      {num}
                    </span>
                    <Icon className="h-7 w-7 text-white mt-1" />
                  </div>
                  <h3 className="font-bold text-gray-900">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SALES CHANNELS — dark bg, frosted glass cards
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Sales Channels
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built-In Sales Channels
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Revenue opportunities from day one. No need to build your own customer base.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UtensilsCrossed, title: "Daily Meal Program", desc: "Sell meals through our daily production pipeline." },
              { icon: Handshake, title: "Catering", desc: "Access catering gigs through our network." },
              { icon: CalendarDays, title: "Events", desc: "Vend at events hosted at our 5,000 sq ft space." },
              { icon: Truck, title: "Food Truck Collabs", desc: "Partner with food truck members for pop-ups." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SUPPORT SYSTEM — split: content left + stacked items right
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Support System
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Everything You Need to Start and Grow
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From your first recipe to your hundredth customer, we provide
              the infrastructure, expertise, and community to support every
              stage of your journey.
            </p>
            <Button href="/contact" className="mt-8">
              Get Started
            </Button>
          </div>
          <div>
            <div className="space-y-4">
              {[
                { icon: ChefHat, label: "Kitchen Access", desc: "Licensed commercial kitchen with professional equipment" },
                { icon: ShoppingCart, label: "Licensing Help", desc: "Navigate permits, health codes, and compliance" },
                { icon: Palette, label: "Branding", desc: "Logo, packaging, and brand identity support" },
                { icon: DollarSign, label: "Pricing Strategy", desc: "Cost analysis and competitive pricing guidance" },
                { icon: Users, label: "Growth Coaching", desc: "One-on-one mentorship from industry experts" },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{label}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PROGRAM TIERS — 3-tier pricing layout
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Program Tiers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Choose the level that matches where you are
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                tier: "Starter",
                desc: "For aspiring food entrepreneurs just getting started.",
                features: ["Kitchen orientation", "Business basics workshop", "Menu planning support"],
              },
              {
                tier: "Incubator",
                desc: "For food businesses ready to build and launch.",
                features: ["Dedicated kitchen hours", "Licensing & compliance help", "Sales channel access", "Branding support"],
                featured: true,
              },
              {
                tier: "Growth",
                desc: "For established businesses ready to scale.",
                features: ["Priority kitchen access", "Catering & event bookings", "Advanced business coaching", "Distribution partnerships"],
              },
            ].map(({ tier, desc, features, featured }) => (
              <div
                key={tier}
                className={`rounded-2xl p-8 transition-all ${
                  featured
                    ? "bg-primary text-white ring-2 ring-primary shadow-xl"
                    : "bg-white border border-gray-200 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <h3 className={`text-xl font-bold ${featured ? "" : "text-gray-900"}`}>{tier}</h3>
                <p className={`mt-2 text-sm ${featured ? "text-white/80" : "text-gray-600"}`}>{desc}</p>
                <ul className="mt-6 space-y-2">
                  {features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${featured ? "text-white/90" : "text-gray-700"}`}>
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${featured ? "bg-white" : "bg-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Ready to Launch?"
        subtitle="Apply now and take the first step toward your food business."
      />
    </>
  );
}
