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
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
} from "lucide-react";
import Image from "next/image";
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

const BROCHURE_HREF = "/nff-start-a-food-business-brochure.pdf";

const tracks = [
  { title: "Food Business Incubator", image: "/food business incubator.jpg" },
  { title: "Work Based Learning", image: "/Updated Images/work based learning.webp" },
  { title: "Product Development Lab", image: "/Updated Images/product development lab.webp" },
];

const highlights = [
  "Commercial Kitchen Training",
  "Food Business Startup Support",
  "Work-Based Learning Opportunities",
  "Branding & Marketing Training",
  "Licensing & Food Safety Guidance",
  "Ghost Kitchen & Delivery Operations",
  "Entrepreneurship & Hospitality Training",
  "Networking & Mentorship Opportunities",
  "Full Prepared Menu Development Support",
  "Chef Studio & Culinary Content Opportunities",
  "Food Truck Ownership Opportunities",
];

export default function StartFoodBusinessPage() {
  return (
    <>
      <PageHero
        icon={Rocket}
        title="Launch Your Food Business"
        subtitle="From idea to thriving business. We provide the kitchen, coaching, sales channels, and community to help you succeed."
        image="/start a food business.jpg"
        imageAlt="Start a food business at Newark Food Factory"
      />

      {/* ════════════════════════════════════════════════════════════════
          PATHWAY, dark numbered squares with connecting line
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Your Pathway
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Six Steps to Building Your Food Business
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
          SALES CHANNELS, dark bg, frosted glass cards
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
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 hover:bg-white/[0.08] transition-colors"
              >
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SUPPORT SYSTEM, split: content left + stacked items right
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
              ].map(({ label, desc }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">{label}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ECOSYSTEM, brochure content: intro + 3 tracks + highlights
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Start a Food Business
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-[1.05]">
                <span className="font-light">A Complete</span>
                <br />
                Food Business Ecosystem.
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                A hands-on food business incubator designed for aspiring chefs,
                caterers, bakers, food truck owners, and culinary entrepreneurs.
                Participants receive entrepreneurship training, commercial
                kitchen experience, mentorship, and real-world work-based
                learning opportunities through live events, ghost kitchen
                operations, and culinary business development.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-950 p-8 text-white">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                Launch<span className="text-primary-bright">.</span> Grow
                <span className="text-primary-bright">.</span> Scale
                <span className="text-primary-bright">.</span>
              </p>
              <p className="mt-2 text-gray-300">
                Learn the Business. Launch your Future!
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://iitnj.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors bg-primary text-white hover:bg-primary-dark"
                >
                  Apply Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={BROCHURE_HREF}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {tracks.map(({ title, image }, i) => (
              <div
                key={title}
                className="group relative aspect-16/9 md:aspect-3/2 lg:aspect-16/10 overflow-hidden rounded-2xl bg-gray-900"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-[scale] duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-bold tracking-widest text-primary-bright">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 flex items-center gap-2 text-xl font-bold text-white">
                    <ArrowRight className="h-5 w-5 text-primary-bright shrink-0" />
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-8 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Program Highlights
              </h3>
              <p className="text-sm text-gray-500">
                {highlights.length} ways we help you build your food business
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
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
