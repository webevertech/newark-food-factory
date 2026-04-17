import {
  Clapperboard,
  UtensilsCrossed,
  Megaphone,
  Handshake,
  Check,
  Star,
  Ticket,
  Video,
  Camera,
  Mic,
  Flame,
  Users,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Phone,
  CalendarDays,
  Clock,
  Sparkles,
  DollarSign,
  Repeat,
} from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Chef Studio",
  description:
    "Create content. Host live dining experiences. Grow your audience. At Newark Food Factory, chefs step into a platform — not just a kitchen.",
  path: "/chef-studio",
  keywords: ["chef studio Newark", "culinary content creation", "live dining experience NJ", "chef platform Newark Food Factory"],
});

export default function ChefStudioPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
          <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-28 z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-orange-500/15 to-amber-400/10" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(211,1,0,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(245,158,11,0.2) 0%, transparent 50%)",
              }}
            />
            <div className="absolute top-16 right-12 w-32 h-32 rounded-full bg-amber-400/20 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-bright/70 mb-4">
                A Signature Service of Newark Food Factory
              </p>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 mb-5">
                <Clapperboard className="h-5 w-5 text-primary-bright" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1]">
                Chef Studio &amp; Content Platform
                <br />
                <span className="text-primary-bright">Newark Food Factory</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed">
                Create content. Host live dining experiences. Grow your audience.
                At Newark Food Factory, you step into a platform — not just a kitchen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Book Your Chef Studio Session</Button>
                <Button href="/contact" variant="outline-light">
                  Host a Live Experience
                </Button>
              </div>

              <p className="mt-6 text-sm text-gray-400">
                Content. Audience. Revenue. All in one place.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=90"
              alt="Chef creating content in professional kitchen"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950/80 to-transparent" />
          </div>

          <div className="relative h-72 lg:hidden">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=90"
              alt="Chef creating content in professional kitchen"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — THE SHIFT
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              The Shift
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              This Is Not Kitchen Rental
            </h2>
            <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>Most kitchens give you space.</p>
              <p>We give you:</p>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                "a stage",
                "a built-in audience",
                "a content engine",
                "and real revenue opportunities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-gray-700">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-semibold text-primary">
                You don&apos;t just cook here.
              </p>
              <p className="text-sm font-semibold text-primary">
                You create experiences that people pay for.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=90"
              alt="Chef performing for audience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — WHAT YOU CAN DO
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              What You Can Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Turn One Session Into Multiple Outcomes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Video,
                title: "Film recipes, reels, and branded content",
              },
              {
                icon: UtensilsCrossed,
                title: "Host ticketed dining experiences",
              },
              {
                icon: Megaphone,
                title: "Build your personal chef brand",
              },
              {
                icon: Handshake,
                title: "Partner with sponsors and food brands",
              },
            ].map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-bright" />
                </div>
                <h3 className="font-semibold text-white text-sm leading-relaxed">{title}</h3>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm font-semibold text-primary-bright">
            Every session produces: content + income + future bookings
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — SIGNATURE EXPERIENCES
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Signature Experiences
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Experiences That Sell Out
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: "Watch & Taste",
                desc: "Film live + serve audience",
              },
              {
                icon: UtensilsCrossed,
                title: "Chef's Table",
                desc: "Premium intimate dining",
              },
              {
                icon: Flame,
                title: "Cook With the Chef",
                desc: "Hands-on classes",
              },
              {
                icon: Mic,
                title: "Story + Food",
                desc: "Connect through your journey",
              },
              {
                icon: Sparkles,
                title: "Chef Takeover Night",
                desc: "Own the kitchen + menu",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm font-semibold text-primary">
            You&apos;re not hosting events. You&apos;re creating moments.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — PRICING & PACKAGES
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Pricing & Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Choose Your Experience Level
            </h2>
          </div>

          {/* Top row — 2 main packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Studio Session */}
            <PackageCard
              tier="Studio Session"
              subtitle="Entry Level"
              pricing={["$150-$300/hour", "$500-$900 (half day)", "$900-$1,500 (full day)"]}
              desc="Best for: creators, local chefs, influencers"
              features={[
                "Demo kitchen access",
                "Basic lighting setup",
                "Minimal staff support",
              ]}
              tagline="Perfect starting point to create content"
            />

            {/* Content Creator Package */}
            <PackageCard
              tier="Content Creator Package"
              subtitle="Most Popular"
              pricing={["$2,000-$5,000 per session"]}
              desc="Best for: chefs building a brand"
              featured
              badge="Most Popular"
              features={[
                "Full-day kitchen access",
                "1-2 camera setup",
                "Videographer",
                "3-5 edited clips",
                "Social media content",
              ]}
              tagline="Your brand-building engine"
            />
          </div>

          {/* Bottom row — 2 premium packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Chef Studio + Live Experience */}
            <PackageCard
              tier="Chef Studio + Live Experience"
              subtitle="Hero Offer"
              pricing={["$3,000-$8,000 production fee", "+ ticket revenue"]}
              desc="Best for: chefs ready to monetize audience"
              features={[
                "General tickets: $75-$125",
                "Premium tickets: $150-$250",
                "VIP tickets: $300-$500",
                "Revenue example: 100 guests = $12K-$18K",
              ]}
              tagline="You create content + generate income in one event"
            />

            {/* Signature Chef Residency */}
            <PackageCard
              tier="Signature Chef Residency"
              subtitle="Flagship"
              pricing={["Contact for pricing"]}
              desc="Best for: celebrity chefs, brand activations"
              features={[
                "Multi-day residency",
                "Multiple events",
                "Content production",
                "Community engagement",
                "Sponsorship integration",
              ]}
              tagline="This turns you into a destination experience"
            />
          </div>

          {/* Add-ons */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h3 className="font-bold text-lg text-gray-900 mb-6">Add-Ons</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Production</p>
                <ul className="space-y-2">
                  {[
                    "Video production: $1,500-$5,000",
                    "Reels bundle: $500-$1,500",
                    "Food photography: $300-$1,000",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Experience</p>
                <ul className="space-y-2">
                  {[
                    "VIP upgrades",
                    "Beverage pairing",
                    "Decor + styling",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Business</p>
                <ul className="space-y-2">
                  {[
                    "Branding kit",
                    "Sponsor matchmaking",
                    "Social media strategy",
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — HOW YOU MAKE MONEY
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Chef studio experience"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-950/80" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
                Revenue Engine
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                This Isn&apos;t a Cost. It&apos;s a Revenue Engine.
              </h2>
              <p className="mt-4 text-gray-300 max-w-lg mx-auto">
                Every Chef Studio Experience generates:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                { icon: Ticket, label: "Ticket sales" },
                { icon: Video, label: "Reusable content" },
                { icon: Handshake, label: "Sponsorship opportunities" },
                { icon: Megaphone, label: "Audience growth" },
                { icon: Repeat, label: "Repeat bookings" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm font-semibold text-primary-bright">
              One session = multiple income streams
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 7 — WHY NEWARK FOOD FACTORY
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Why Here
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why This Only Works Here
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Built-in audience + community",
              "Content + event in one experience",
              "5,000 sq ft event activation space",
              "Professional kitchen + production setup",
              "Access to entrepreneurs + food ecosystem",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="font-medium text-gray-900 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center space-y-1">
            <p className="text-sm font-semibold text-primary">
              This is not a studio.
            </p>
            <p className="text-sm font-semibold text-primary">
              This is a live economic platform.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 8 — YOUR EDGE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Your Edge
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Powered by Real Talent.
              <br />
              <span className="text-primary-bright">Not Just Staff.</span>
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Your experience is supported by:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Culinary students",
                "Emerging chefs",
                "Paid workforce trainees",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-4 w-4 text-primary-bright" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-400 leading-relaxed">They:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Assist your production",
                "Support your event",
                "Learn directly from you",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="h-4 w-4 text-primary-bright shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-semibold text-primary-bright">
                You don&apos;t just create content
              </p>
              <p className="text-sm font-semibold text-primary-bright">
                You shape the next generation
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=90"
              alt="Culinary students working with chef"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 9 — FOR BRANDS & SPONSORS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=90"
              alt="Brand activation event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              For Brands & Sponsors
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Turn Your Product Into an Experience
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We create:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Chef-led brand activations",
                "Sponsored dining experiences",
                "Product integrations",
                "Content campaigns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-700">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-primary">
              Food becomes your marketing channel.
            </p>
            <Button href="/contact" className="mt-8">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 min-h-[400px]">
        <div className="relative h-64 lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=95"
            alt="Chef studio team"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        <div className="bg-primary flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-24">
          <Clapperboard className="h-10 w-10 text-white/80 mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Create. Host. Build Your Culinary Brand.
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-md">
            We host a limited number of Chef Studio Experiences each month to
            maintain quality and audience impact. Dates fill quickly — secure yours
            early.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="white">
              Book Your Chef Studio Experience
            </Button>
            <Button href="/contact" variant="outline-light">
              Schedule a Consultation
            </Button>
            <Button href="/meals-events#events" variant="outline-light">
              Book an Event
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CLOSING BRAND STATEMENT
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed italic">
            At Newark Food Factory, chefs don&apos;t just cook —
            <br className="hidden sm:inline" />
            <span className="text-white font-semibold">
              {" "}they create experiences, build brands, and connect with a community.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────
   Package Card Component
──────────────────────────────────────────────────────────────────── */
function PackageCard({
  tier,
  subtitle,
  pricing,
  desc,
  features,
  featured = false,
  badge,
  tagline,
}: {
  tier: string;
  subtitle: string;
  pricing: string[];
  desc: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  tagline: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 sm:p-8 transition-all ${
        featured
          ? "bg-primary text-white ring-2 ring-primary shadow-xl"
          : "bg-white border border-gray-200 hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {badge && (
        <div
          className={`self-start inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
            featured
              ? "bg-white/20 text-white"
              : "bg-primary/10 text-primary"
          }`}
        >
          <Star className="h-3 w-3" /> {badge}
        </div>
      )}

      <h3 className={`text-lg font-bold ${featured ? "" : "text-gray-900"}`}>
        {tier}
      </h3>
      <p className={`text-xs font-medium mt-0.5 ${featured ? "text-white/60" : "text-gray-400"}`}>
        {subtitle}
      </p>

      <div className="mt-4 mb-2 space-y-1">
        {pricing.map((p) => (
          <p
            key={p}
            className={`text-sm font-bold ${featured ? "text-white" : "text-gray-900"}`}
          >
            {p}
          </p>
        ))}
      </div>

      <p className={`text-sm leading-relaxed ${featured ? "text-white/80" : "text-gray-500"}`}>
        {desc}
      </p>

      <div className={`my-6 h-px ${featured ? "bg-white/20" : "bg-gray-100"}`} />

      <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${featured ? "text-white/50" : "text-gray-400"}`}>
        Includes
      </p>

      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li
            key={f}
            className={`text-sm flex items-start gap-2.5 ${featured ? "text-white/90" : "text-gray-700"}`}
          >
            <Check className={`h-4 w-4 shrink-0 mt-0.5 ${featured ? "text-white" : "text-primary"}`} />
            {f}
          </li>
        ))}
      </ul>

      <p className={`mt-6 text-xs font-semibold ${featured ? "text-white/70" : "text-primary"}`}>
        {tagline}
      </p>

      <Button
        href="/contact"
        variant={featured ? "white" : "primary"}
        className="mt-6 w-full"
      >
        Get Started
      </Button>
    </div>
  );
}
