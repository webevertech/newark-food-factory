import {
  Warehouse,
  Truck,
  ChefHat,
  Check,
  Star,
  Snowflake,
  Settings,
  TrendingUp,
  GraduationCap,
  UtensilsCrossed,
  PartyPopper,
  ShoppingCart,
  ShoppingBag,
  Palette,
  Camera,
  Megaphone,
  Package,
  FileCheck,
  Clapperboard,
  ArrowRight,
  Phone,
  CalendarDays,
  Flame,
  BookOpen,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Membership",
  description:
    "More than a commissary kitchen — Newark Food Factory is where food entrepreneurs launch, operate, and scale real businesses. Explore membership plans from $149/mo.",
  alternates: { canonical: "/kitchen-membership" },
};

export default function KitchenMembershipPage() {
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
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 mb-5">
                <Warehouse className="h-5 w-5 text-primary-bright" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-tight text-white leading-[1.1]">
                Your Kitchen. Your Business.
                <br />
                <span className="text-primary-bright">Your Growth Platform.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed">
                More than a commissary kitchen — Newark Food Factory is where food
                entrepreneurs launch, operate, and scale real businesses.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Join Membership</Button>
                <Button href="/contact" variant="outline-light">
                  Book a Tour
                </Button>
              </div>

              <div className="mt-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-bright hover:text-primary-light transition-colors"
                >
                  See Pricing <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1920&q=90"
              alt="Professional commercial kitchen"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950/80 to-transparent" />
          </div>

          <div className="relative h-72 lg:hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1920&q=90"
              alt="Professional commercial kitchen"
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
          SECTION 1 — WHAT THIS REALLY IS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              What This Really Is
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Not Just Kitchen Access.
              <br />
              <span className="text-primary">A Business Engine.</span>
            </h2>
            <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>Most commissary kitchens give you space.</p>
              <p>We give you a <strong>system</strong>.</p>
              <p>
                At Newark Food Factory, you don&apos;t just rent a kitchen — you
                plug into a live food economy:
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-primary">
              This is where food businesses are built — not just cooked.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: UtensilsCrossed,
                title: "Daily meal production",
                desc: "built-in customers",
              },
              {
                icon: PartyPopper,
                title: "Catering & events",
                desc: "high revenue opportunities",
              },
              {
                icon: Truck,
                title: "Food truck ecosystem",
                desc: "mobility + scale",
              },
              {
                icon: ShoppingCart,
                title: "Ordering platform",
                desc: "sell online immediately",
              },
              {
                icon: TrendingUp,
                title: "Coaching + support",
                desc: "grow smarter, faster",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — WHAT YOU GET
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              What You Get
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Everything You Need to Operate &amp; Grow
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              You&apos;re not figuring it out alone — you&apos;re building inside a
              system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ChefHat,
                title: "Commercial Kitchen Access",
                items: [
                  "Licensed commercial kitchen",
                  "Flexible prep stations",
                  "Equipment access",
                  "Health code compliance",
                ],
              },
              {
                icon: Snowflake,
                title: "Storage + Infrastructure",
                items: [
                  "Dry storage",
                  "Refrigeration & freezer",
                  "Inventory support",
                ],
              },
              {
                icon: Settings,
                title: "Commissary Support",
                items: [
                  "Cleaning + waste management",
                  "Scheduling system",
                  "Prep coordination",
                ],
              },
              {
                icon: TrendingUp,
                title: "Business Growth",
                label: "Your Differentiator",
                items: [
                  "Menu pricing strategy",
                  "Cost control systems",
                  "Branding + packaging support",
                  "Marketplace listing + exposure",
                  "Event & catering opportunities",
                ],
              },
            ].map(({ icon: Icon, title, label, items }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">{title}</h3>
                {label && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-bright mb-3">
                    {label}
                  </p>
                )}
                {!label && <div className="mb-3" />}
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check className="h-4 w-4 text-primary-bright shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — MEMBERSHIP PLANS
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50"
        id="pricing"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Membership Plans
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Choose the Plan That Fits Your Stage
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              From aspiring entrepreneurs to scaling brands — there&apos;s a plan
              for every stage of your food business journey.
            </p>
          </div>

          {/* Top row — 3 core plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* STARTER */}
            <PlanCard
              tier="Starter"
              subtitle="Aspiring Entrepreneurs / Students"
              price="$149"
              period="/month"
              desc="Perfect for beginners testing ideas."
              features={[
                "10 kitchen hours/month (off-peak)",
                "Shared storage (limited)",
                "Basic workshops + training",
                "Community events access",
              ]}
              idealFor="Side hustlers, students, early-stage ideas"
            />

            {/* BUILDER — featured */}
            <PlanCard
              tier="Builder"
              subtitle="Food Truck Owners / Active Businesses"
              price="$899"
              period="/month"
              desc="Your operational home base."
              featured
              features={[
                "40 kitchen hours/month",
                "Dry + cold storage",
                "Full commissary services",
                "Monthly business coaching",
                "Listing on NFF ordering platform",
                "Access to delivery system",
              ]}
              idealFor="Food truck owners & active businesses"
              badge="Most Popular"
              tagline="This is where real businesses operate daily"
            />

            {/* PRO */}
            <PlanCard
              tier="Pro"
              subtitle="Scaling Brands / Ghost Kitchen Operators"
              price="$2,500"
              period="/month"
              desc="For serious operators scaling revenue."
              features={[
                "Priority kitchen scheduling",
                "Dedicated kitchen blocks",
                "Expanded storage",
                "Featured placement on platform",
                "Marketing + branding support",
                "Access to catering & large events",
                "Sales + performance insights",
              ]}
              idealFor="Scaling brands & ghost kitchen operators"
              tagline="Built for brands ready to scale fast"
            />
          </div>

          {/* Bottom row — 2 specialty plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {/* STARTER PROGRAM */}
            <PlanCard
              tier="Starter"
              subtitle="Program Bonus - Free"
              price="$0"
              period="/month (3-6 months)"
              desc={'For qualified students in the "Start Your Own Food Truck" Program.'}
              features={[
                "Kitchen access (limited hours)",
                "Marketplace listing (start selling)",
                "Mentorship + support",
                "Event participation opportunities",
              ]}
              badge="Program Bonus - Free"
              eligibility={[
                "Completed 450+ hours",
                "Active participation",
                "Validated business concept",
              ]}
              tagline="This is your transition from learning to earning"
            />

            {/* ENTERPRISE */}
            <PlanCard
              tier="Enterprise / Partner Kitchen"
              price="$5,000+"
              period="/month + % of revenue"
              desc="For established brands and partners."
              features={[
                "Dedicated production zone",
                "Co-branded food concepts",
                "Workforce pipeline (students)",
                "R&D + product testing",
                "Large-scale production support",
              ]}
              idealFor="Corporate partnerships & scale operations"
              tagline="Designed for corporate partnerships & scale"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — WHY THIS MODEL WINS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Entrepreneurs Choose Newark Food Factory
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <p className="font-bold text-gray-500 text-sm">Typical Commissary</p>
              </div>
              <div className="bg-primary px-6 py-4 border-b border-primary-dark">
                <p className="font-bold text-white text-sm">Newark Food Factory</p>
              </div>
            </div>
            {[
              ["Just kitchen space", "Full business ecosystem"],
              ["No customers", "Built-in sales channels"],
              ["No support", "Coaching + growth system"],
              ["No exposure", "Events + platform + brand"],
              ["No workforce", "Student-powered labor"],
            ].map(([typical, nff], i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${
                  i < 4 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="px-6 py-4 text-sm text-gray-500 flex items-center gap-2">
                  <XIcon className="h-4 w-4 text-gray-300 shrink-0" />
                  {typical}
                </div>
                <div className="px-6 py-4 text-sm text-gray-900 font-medium bg-primary/[0.03] flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {nff}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-primary">
            You don&apos;t just rent space — you gain momentum.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — BUILT-IN REVENUE OPPORTUNITIES
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food production"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-950/80" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
                Built-In Revenue
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Start Making Money Faster
              </h2>
              <p className="mt-4 text-gray-300 max-w-lg mx-auto">
                Members can earn through:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                {
                  icon: UtensilsCrossed,
                  label: "Daily meal program",
                  desc: "pickup & delivery",
                },
                {
                  icon: PartyPopper,
                  label: "Events & catering",
                  desc: "opportunities",
                },
                {
                  icon: Truck,
                  label: "Food truck",
                  desc: "collaborations",
                },
                {
                  icon: Smartphone,
                  label: "Online ordering",
                  desc: "platform",
                },
                {
                  icon: ShoppingBag,
                  label: "Product sales",
                  desc: "& retail testing",
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="text-xs text-gray-400 mt-1">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm font-semibold text-primary-bright">
              You don&apos;t wait for customers — the system brings customers to you.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — ADD-ON SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Add-On Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Upgrade Your Growth
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Upgrade your growth with premium services designed to accelerate
                your brand, your reach, and your revenue.
              </p>
              <Button href="/contact" className="mt-8">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Palette, title: "Branding + logo design" },
                { icon: BookOpen, title: "Menu engineering" },
                { icon: Camera, title: "Food photography" },
                { icon: Megaphone, title: "Social media marketing" },
                { icon: Package, title: "Packaging + labeling" },
                { icon: FileCheck, title: "Licensing & compliance support" },
              ].map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 7 — HOW IT FITS THE ECOSYSTEM
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Part of Something Bigger
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Your Membership Connects You To:
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg mx-auto">
              This is a Live - Learn - Work - Sell ecosystem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: GraduationCap,
                label: "Paid student workforce",
              },
              {
                icon: ChefHat,
                label: "Daily food production engine",
              },
              {
                icon: Clapperboard,
                label: "Chef Studio content platform",
              },
              {
                icon: CalendarDays,
                label: "Event & catering system",
              },
              {
                icon: Truck,
                label: "Food truck fleet opportunities",
              },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-bright" />
                </div>
                <p className="font-semibold text-white text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* Ecosystem flow */}
          <div className="flex justify-center items-center gap-3 text-sm flex-wrap mt-12">
            {["Live", "Learn", "Work", "Sell"].map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="bg-white/10 rounded-full px-4 py-2 text-white font-semibold">
                  {step}
                </span>
                {i < 3 && (
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 min-h-[400px]">
        <div className="relative h-64 lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=95"
            alt="Newark Food Factory team"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        <div className="bg-primary flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-24">
          <Flame className="h-10 w-10 text-white/80 mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Ready to Build Your Food Business?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-md">
            Whether you&apos;re just starting out or scaling fast — there&apos;s a
            place for you at Newark Food Factory.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="white">
              Join Membership
            </Button>
            <Button href="/start-a-food-business" variant="outline-light">
              Apply for Food Truck Program
            </Button>
            <Button href="/meals-events#events" variant="outline-light">
              Book an Event
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              <CalendarDays className="h-4 w-4" /> Book a Tour
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" /> Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────
   Plan Card Component
──────────────────────────────────────────────────────────────────── */
function PlanCard({
  tier,
  subtitle,
  price,
  period,
  desc,
  features,
  idealFor,
  eligibility,
  featured = false,
  badge,
  tagline,
}: {
  tier: string;
  subtitle?: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  idealFor?: string;
  eligibility?: string[];
  featured?: boolean;
  badge?: string;
  tagline?: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 sm:p-8 transition-all ${
        featured
          ? "bg-primary text-white ring-2 ring-primary shadow-xl"
          : "bg-white border border-gray-200 hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {/* Badge */}
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

      {/* Tier name */}
      <h3
        className={`text-lg font-bold ${featured ? "" : "text-gray-900"}`}
      >
        {tier}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-xs font-medium mt-0.5 ${
            featured ? "text-white/60" : "text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Price */}
      <div className="mt-4 mb-2">
        <span
          className={`text-4xl font-bold tracking-tight ${
            featured ? "" : "text-gray-900"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-sm ml-1 ${
            featured ? "text-white/60" : "text-gray-400"
          }`}
        >
          {period}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed ${
          featured ? "text-white/80" : "text-gray-500"
        }`}
      >
        {desc}
      </p>

      {/* Divider */}
      <div
        className={`my-6 h-px ${
          featured ? "bg-white/20" : "bg-gray-100"
        }`}
      />

      {/* Includes label */}
      <p
        className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
          featured ? "text-white/50" : "text-gray-400"
        }`}
      >
        Includes
      </p>

      {/* Features list — grows to push content down */}
      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li
            key={f}
            className={`text-sm flex items-start gap-2.5 ${
              featured ? "text-white/90" : "text-gray-700"
            }`}
          >
            <Check
              className={`h-4 w-4 shrink-0 mt-0.5 ${
                featured ? "text-white" : "text-primary"
              }`}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Ideal for OR Eligibility */}
      {idealFor && (
        <div
          className={`mt-6 pt-4 border-t ${
            featured ? "border-white/20" : "border-gray-100"
          }`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
              featured ? "text-white/50" : "text-gray-400"
            }`}
          >
            Ideal for
          </p>
          <p
            className={`text-sm leading-relaxed ${
              featured ? "text-white/80" : "text-gray-500"
            }`}
          >
            {idealFor}
          </p>
        </div>
      )}

      {eligibility && (
        <div
          className={`mt-6 pt-4 border-t ${
            featured ? "border-white/20" : "border-gray-100"
          }`}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
              featured ? "text-white/50" : "text-gray-400"
            }`}
          >
            Eligibility
          </p>
          <ul className="space-y-1.5">
            {eligibility.map((e) => (
              <li
                key={e}
                className={`text-sm flex items-start gap-2 ${
                  featured ? "text-white/80" : "text-gray-500"
                }`}
              >
                <Check
                  className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                    featured ? "text-white/60" : "text-primary"
                  }`}
                />
                {e}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tagline */}
      {tagline && (
        <p
          className={`mt-4 text-xs font-semibold ${
            featured ? "text-white/70" : "text-primary"
          }`}
        >
          {tagline}
        </p>
      )}

      {/* CTA */}
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
