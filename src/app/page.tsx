import {
  ChefHat,
  Rocket,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  BookOpen,
  DollarSign,
  TrendingUp,
  Warehouse,
  ShieldCheck,
  CalendarDays,
  Briefcase,
  Users,
  ArrowRight,
  Store,
  Heart,
  Clock,
  Award,
  Balloon,
} from "lucide-react";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          HERO — split gradient + full bleed image
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[700px] lg:min-h-[750px]">
          {/* LEFT — gradient panel with content */}
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-6">
                Let&apos;s grow your Food business
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight leading-[1.1] text-white">
                Where Newark builds food businesses.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed">
                A food innovation hub powering{" "}
                <strong className="text-white">
                  daily meals, delivery, events, and food entrepreneurs
                </strong>
                —from students to food truck owners.
              </p>

              <div className="mt-10">
                <Button href="/start-a-food-business">Start Your Journey</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "Order Meals", href: "/meals-events", icon: UtensilsCrossed },
                  { label: "Book a Tour", href: "/contact", icon: Warehouse },
                  { label: "Book an Event", href: "/meals-events#events", icon: CalendarDays },
                ].map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-center gap-2 rounded-lg bg-white/[0.08] backdrop-blur-sm border border-white/15 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-primary-bright" />
                    {label}
                  </Link>
                ))}
              </div>

              {/* Stat cards */}
              <div className="mt-12 grid grid-cols-3 gap-3 max-w-md">
                {[
                  { stat: "50+", label: "Businesses Launched" },
                  { stat: "10K+", label: "Community Served" },
                  { stat: "5,000", label: "Sq Ft Event Space" },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-center"
                  >
                    <p className="text-xl font-bold text-white">{stat}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust bar */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "bg-primary",
                    "bg-orange-500",
                    "bg-amber-500",
                    "bg-primary-light",
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${bg} border-2 border-gray-950 flex items-center justify-center`}
                    >
                      <ChefHat className="h-3.5 w-3.5 text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Trusted by{" "}
                  <span className="text-white font-semibold">100+</span> food
                  entrepreneurs
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — full bleed image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
              alt="Commercial kitchen in action"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950/80 to-transparent" />
          </div>

          {/* Mobile image fallback */}
          <div className="relative h-72 lg:hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
              alt="Commercial kitchen in action"
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
          WHO WE ARE — dark section, text left + glass icon cards right
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 py-24 px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Not just a kitchen.
              <br />
              <span className="text-primary-bright">
                A complete food business ecosystem.
              </span>
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed max-w-lg">
              From commercial kitchen access to business incubation, daily meal
              production to event hosting — everything under one roof to help you
              build, launch, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: ChefHat,
                title: "Commercial Kitchen",
                desc: "Licensed, fully equipped commissary space",
              },
              {
                icon: UtensilsCrossed,
                title: "Daily Meals",
                desc: "Breakfast, lunch & dinner — pickup or delivery",
              },
              {
                icon: CalendarDays,
                title: "Events & Catering",
                desc: "5,000 sq ft venue for any occasion",
              },
              {
                icon: Rocket,
                title: "Business Incubator",
                desc: "Launch your food brand with mentorship & support",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary-bright" />
                </div>
                <h3 className="font-semibold text-white text-sm">{title}</h3>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          HOW IT WORKS — numbered dark squares + connecting gradient line
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Four steps to building your food business
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: "01",
                  icon: BookOpen,
                  label: "Learn",
                  desc: "Gain culinary & business skills through hands-on training",
                },
                {
                  num: "02",
                  icon: DollarSign,
                  label: "Earn",
                  desc: "Start generating revenue while you build your brand",
                },
                {
                  num: "03",
                  icon: Rocket,
                  label: "Launch",
                  desc: "Open your own food business with our support system",
                },
                {
                  num: "04",
                  icon: TrendingUp,
                  label: "Scale",
                  desc: "Grow with continued mentorship and resources",
                },
              ].map(({ num, icon: Icon, label, desc }) => (
                <div key={num} className="text-center relative">
                  <div className="mx-auto w-24 h-24 rounded-2xl bg-gray-900 flex flex-col items-center justify-center mb-5 shadow-lg">
                    <span className="text-[10px] font-bold text-primary-bright tracking-widest">
                      {num}
                    </span>
                    <Icon className="h-7 w-7 text-white mt-1" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{label}</h3>
                  <p className="mt-2 text-sm text-gray-500 max-w-[200px] mx-auto">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PATHWAYS — image-backed cards with hover zoom + gradient overlay
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Your Pathway
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Choose the track that fits your goals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Start a Food Business",
                desc: "Launch and scale your own food venture with full support.",
                href: "/start-a-food-business",
                image:
                  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
              },
              {
                title: "Work-Based Learning",
                desc: "Students gain real-world culinary and business experience.",
                href: "/programs/work-based-learning",
                image:
                  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
              },
              {
                title: "Food Truck Membership",
                desc: "Commissary kitchen access, storage, and business coaching.",
                href: "/programs/food-truck-membership",
                image:
                  "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&q=80",
              },
              {
                title: "Meals & Events",
                desc: "Fresh daily meals and chef-driven event experiences.",
                href: "/meals-events",
                image:
                  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
              },
            ].map(({ title, desc, href, image }) => (
              <Link
                key={title}
                href={href}
                className="group relative rounded-2xl overflow-hidden h-80 block"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-bold text-white text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-bright group-hover:gap-3 transition-all">
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          DAILY MEALS — full-bleed photo with dark gradient overlay
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Fresh daily meals"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-transparent" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20 py-20 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-4">
            Daily Meals
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Fresh Meals.
            <br />
            Every Day.
          </h2>
          <ul className="mt-8 space-y-3">
            {[
              { icon: Clock, text: "7-day rotating menu" },
              { icon: UtensilsCrossed, text: "Breakfast, lunch & dinner" },
              { icon: Truck, text: "Pickup & delivery available" },
            ].map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 text-gray-200"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary-bright" />
                </div>
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/meals-events">View Menu</Button>
            <Button href="/meals-events#order" variant="outline-light">
              Order Now
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Three Ways to Get Started"
        subtitle="Apply for a program, join our kitchen community, or tour the facility in person."
      />

      {/* ════════════════════════════════════════════════════════════════
          COMMISSARY — white bg, large image, overlapping feature cards
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — stacked images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 lg:h-72 col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90"
                  alt="Commissary kitchen prep area"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-36 sm:h-44">
                <Image
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=90"
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 25vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-36 sm:h-44">
                <Image
                  src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=90"
                  alt="Commercial kitchen equipment"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 25vw, 50vw"
                />
              </div>
            </div>

            {/* Right — text + feature list */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Commissary Kitchen
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Your Home Base for Food Truck &amp; Catering Businesses
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Newark Food Factory operates as a{" "}
                <strong>commissary kitchen</strong>, providing food
                truck owners and caterers with everything they need to grow —
                from prep space to compliance support.
              </p>

              {/* Feature grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Warehouse, title: "Prep Space", desc: "Fully equipped commercial stations" },
                  { icon: ShieldCheck, title: "Compliance", desc: "Health dept. & licensing support" },
                  { icon: Clock, title: "Flexible Hours", desc: "24/7 kitchen access for members" },
                  { icon: Truck, title: "Storage", desc: "Dry, cold, and frozen storage" },
                  { icon: Award, title: "Coaching", desc: "Business mentorship & guidance" },
                  { icon: CalendarDays, title: "Scheduling", desc: "Easy online booking system" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/kitchen-membership">Join Membership</Button>
                <Button href="/kitchen-membership#pricing" variant="outline">
                  Explore Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          EVENTS — stacked: heading + 4 image cards + CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Events &amp; Catering
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Your Next Event Starts Here
              </h2>
              <p className="mt-3 text-gray-600 max-w-lg leading-relaxed">
                5,000 sq ft event space for weddings, corporate gatherings,
                markets, and community celebrations.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Button href="/meals-events#events">Book Event</Button>
              <Button href="/contact" variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                label: "Birthdays",
                icon: Balloon,
                img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
              },
              {
                label: "Weddings",
                icon: Heart,
                img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
              },
              {
                label: "Corporate",
                icon: Briefcase,
                img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
              },
              {
                label: "Markets",
                icon: Store,
                img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
              },
            ].map(({ label, icon: Icon, img }) => (
              <div
                key={label}
                className="group relative rounded-2xl overflow-hidden h-72"
              >
                <Image
                  src={img}
                  alt={`${label} at Newark Food Factory`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-bold text-white text-lg">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT — dark section, ecosystem flow, gradient stat cards */}
      <section className="bg-gray-950 py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Building a thriving food ecosystem in Newark
            </h2>
          </div>

          {/* Ecosystem flow */}
          <div className="flex justify-center items-center gap-3 text-sm flex-wrap mb-16">
            <span className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5 text-gray-300">
              <GraduationCap className="h-3.5 w-3.5 text-primary-bright" />{" "}
              Students
            </span>
            <ArrowRight className="h-4 w-4 text-gray-600" />
            <span className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5 text-gray-300">
              <Briefcase className="h-3.5 w-3.5 text-primary-bright" />{" "}
              Entrepreneurs
            </span>
            <ArrowRight className="h-4 w-4 text-gray-600" />
            <span className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5 text-gray-300">
              <Truck className="h-3.5 w-3.5 text-primary-bright" /> Food Trucks
            </span>
            <ArrowRight className="h-4 w-4 text-gray-600" />
            <span className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5 text-gray-300">
              <Heart className="h-3.5 w-3.5 text-primary-bright" /> Community
            </span>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                label: "Students Trained",
                stat: "100+",
              },
              {
                icon: Briefcase,
                label: "Entrepreneurs Launched",
                stat: "50+",
              },
              { icon: Truck, label: "Food Trucks Supported", stat: "25+" },
              { icon: Users, label: "Community Members", stat: "10K+" },
            ].map(({ icon: Icon, label, stat }) => (
              <div
                key={label}
                className="relative rounded-2xl overflow-hidden p-6 text-center bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-bright" />
                </div>
                <p className="text-4xl font-bold text-white">{stat}</p>
                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Ready to Get Started?"
        subtitle="Whether you want to start a food business, join our kitchen, or book a tour — we're here for you."
      />
    </>
  );
}
