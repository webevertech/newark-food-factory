import {
  ChefHat,
  Briefcase,
  Rocket,
  Users,
  GraduationCap,
  DollarSign,
  Flame,
  Truck,
  UtensilsCrossed,
  PartyPopper,
  FlaskConical,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Newark Food Factory is where futures are built through food, a place to learn, earn, launch, and own. Built by Ideal Institute of Technology.",
  path: "/about",
  keywords: [
    "about Newark Food Factory",
    "food innovation hub Newark",
    "Ideal Institute of Technology",
    "food entrepreneurship Newark NJ",
  ],
});

export default function AboutPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          SECTION 1, HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gray-950 overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=90"
          alt="Chef at work in the kitchen"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gray-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-28 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              This Is Where Futures Are Built, Through Food
            </h1>

            <div className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              <p>In Newark, talent has always been here.</p>
              <p>What&apos;s been missing is access, opportunity, and ownership.</p>
            </div>

            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
              Newark Food Factory exists to change that, one person, one plate,
              one business at a time.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/start-a-food-business" variant="white">
                Start Your Journey
              </Button>
              <Button href="/contact#tour" variant="outline-light">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2, THE REALITY
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[460px] order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=90"
              alt="Home cooking, raw and real"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-3xl sm:text-4xl font-bold leading-tight">
                Too many people are working jobs
              </p>
              <p className="mt-1 text-xl text-primary-bright">
                instead of building futures.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              The Reality
            </p>
            <ul className="space-y-4">
              {[
                {
                  has: "There are people in Newark who can cook better than most restaurants, ",
                  but: "but have no kitchen.",
                },
                {
                  has: "Students with potential, ",
                  but: "but no clear path forward.",
                },
                {
                  has: "Entrepreneurs with ideas, ",
                  but: "but no way to start.",
                },
                {
                  has: "Communities full of culture, ",
                  but: "but disconnected from ownership.",
                },
              ].map(({ has, but }) => (
                <li
                  key={has}
                  className="rounded-lg bg-gray-50 p-5 border-l-4 border-primary"
                >
                  <p className="text-gray-800 leading-relaxed">{has}</p>
                  <p className="font-semibold text-primary mt-1">{but}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3, THE TURNING POINT
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-bright mb-5">
              The Turning Point
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              What If One Place Could Change That?
            </h2>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              What if there was a space where:
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-primary px-5 py-2.5 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold tracking-wide">
                Not someday. Right now.
              </span>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-3">
            {[
              { icon: GraduationCap, text: "You could learn real skills" },
              { icon: DollarSign, text: "Earn real income" },
              { icon: FlaskConical, text: "Test your ideas" },
              { icon: Briefcase, text: "Build your business" },
              { icon: Rocket, text: "And actually own something" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className="group flex items-center gap-5 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm pl-5 pr-6 py-5 hover:bg-white hover:text-primary transition-all cursor-default"
              >
                <span className="text-xs font-bold text-white/40 group-hover:text-primary/50 tracking-widest w-6 shrink-0">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-lg bg-white/10 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="flex-1 text-lg sm:text-xl font-semibold min-w-0">
                  {text}
                </p>
                <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4, WHAT WE ARE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              What We Are
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              More Than a Kitchen.{" "}
              <span className="text-primary">A System for Opportunity.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: ChefHat,
                title: "Kitchen",
                desc: "A fully licensed commercial space to create",
              },
              {
                icon: Briefcase,
                title: "Work",
                desc: "Paid, real-world experience from day one",
              },
              {
                icon: Rocket,
                title: "Business",
                desc: "Launch your food brand, truck, or product",
              },
              {
                icon: Users,
                title: "Community",
                desc: "A built-in market that supports you",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-7 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xl sm:text-2xl font-bold text-gray-900">
            Everything is connected. Everything is real.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5, IDEAL INSTITUTE
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=85"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Built by{" "}
              <span className="text-primary-bright">
                Ideal Institute of Technology
              </span>
            </h2>
            <p className="mt-5 text-gray-300 leading-relaxed">
              Newark Food Factory is an Ideal Social Enterprise, an initiative
              of the Ideal Institute of Technology, a nonprofit rethinking how
              education works.
            </p>
          </div>
          <div>
            <p className="text-gray-300 mb-4 font-semibold">We believe:</p>
            <div className="space-y-3">
              {[
                "Education should lead to income",
                "Work should lead to ownership",
                "Opportunity should be built, not waited for",
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors"
                >
                  <p className="text-gray-100 text-lg">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="relative mt-14 max-w-4xl mx-auto text-center text-xl sm:text-2xl font-bold text-white">
          This is education, employment, and entrepreneurship, working together.
        </p>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6, THE JOURNEY
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              The Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              From Potential to Ownership
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {[
              {
                icon: GraduationCap,
                step: "Learn",
                desc: "Get trained in a real kitchen",
              },
              {
                icon: DollarSign,
                step: "Earn",
                desc: "Work and get paid while learning",
              },
              {
                icon: Flame,
                step: "Launch",
                desc: "Sell your food through our platform, events, and kitchen",
              },
              {
                icon: Truck,
                step: "Own",
                desc: "Start your food truck, catering business, or product brand",
              },
            ].map(({ icon: Icon, step, desc }, i) => (
              <div key={step} className="relative">
                <div className="rounded-2xl bg-white border border-gray-200 p-6 h-full hover:shadow-lg hover:border-primary transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{step}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-primary items-center justify-center shadow-sm">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              You don&apos;t leave with just knowledge.
            </p>
            <p className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
              You leave with income, experience, and a business.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="See where your journey starts"
        subtitle="Apply, join our kitchen, or book a tour in person."
      />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 7, REAL LIFE INSIDE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Inside The Factory
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              This Isn&apos;t a Classroom
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: UtensilsCrossed,
                title: "Daily Meals",
                desc: "Food made, sold, and delivered every day",
                image:
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85",
              },
              {
                icon: PartyPopper,
                title: "Events",
                desc: "Weddings, markets, and community experiences",
                image:
                  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=85",
              },
              {
                icon: Truck,
                title: "Food Trucks",
                desc: "Entrepreneurs building mobile businesses",
                image:
                  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=85",
              },
              {
                icon: FlaskConical,
                title: "Product Lab",
                desc: "Turning recipes into retail products",
                image:
                  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=85",
              },
            ].map(({ icon: Icon, title, desc, image }) => (
              <div
                key={title}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <Icon className="h-6 w-6 text-primary-bright mb-2" />
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xl sm:text-2xl font-bold text-gray-900">
            This is real work. Real customers. Real money.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 8, THE PEOPLE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              The People
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              This Is Who We Build With
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                role: "The Student",
                image:
                  "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=90",
                quote: "I never thought I could earn while learning.",
              },
              {
                role: "The Entrepreneur",
                image:
                  "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=90",
                quote: "I started with an idea, now I have customers.",
              },
              {
                role: "The Community",
                image:
                  "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=90",
                quote: "This place feels like it belongs to us.",
              },
            ].map(({ role, image, quote }) => (
              <div
                key={role}
                className="group relative rounded-2xl overflow-hidden h-96 hover:shadow-2xl transition-all"
              >
                <Image
                  src={image}
                  alt={role}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Quote className="h-6 w-6 text-primary-bright mb-3" />
                  <p className="text-lg font-medium leading-relaxed">
                    {quote}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary-bright">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 9, THE BIGGER IMPACT
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              The Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              This is bigger than food.
            </h2>
            <p className="mt-5 text-lg text-gray-700">
              What happens here doesn&apos;t stay here.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "New businesses launch",
              "Families earn income",
              "Skills turn into careers",
              "Newark builds its own economy",
            ].map((label) => (
              <div
                key={label}
                className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 px-6 py-5 hover:from-primary hover:to-primary-dark hover:border-primary transition-all group flex items-center gap-4"
              >
                <span className="h-2 w-2 rounded-full bg-primary group-hover:bg-white shrink-0 transition-colors" />
                <p className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xl sm:text-2xl font-bold text-gray-900 max-w-2xl mx-auto">
            This is how a city grows, 
            <span className="text-primary">from the inside out.</span>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 10, FINAL STATEMENT
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-950 to-gray-950" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-light text-white/70">
            We are not a kitchen.
          </p>
          <p className="mt-2 text-2xl sm:text-3xl font-light text-white/70">
            We are not a program.
          </p>
          <p className="mt-8 text-lg font-semibold text-white">
            We are a place where:
          </p>
          <div className="mt-6 mb-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              "A student becomes a chef",
              "A cook becomes an entrepreneur",
              "An idea becomes a business",
              "And a neighborhood becomes an economy",
            ].map((line) => (
              <div
                key={line}
                className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-left"
              >
                <p className="text-white">{line}</p>
              </div>
            ))}
          </div>
          <p className="text-3xl sm:text-5xl font-bold leading-tight text-primary-bright">
            This is where Newark learns, earns, and owns.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 11, CTA
      ════════════════════════════════════════════════════════════════ */}
      <CTASection dark title="Ready to Start Your Journey?" />
    </>
  );
}
