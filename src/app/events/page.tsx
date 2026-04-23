import {
  CalendarCheck,
  PartyPopper,
  Briefcase,
  Users,
  ChefHat,
  Megaphone,
  Store,
  Building2,
  Target,
  Sparkles,
  Utensils,
  Heart,
  Flame,
  Check,
} from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { Button } from "@/components/button";
import { EventInquiryButton } from "@/components/event-inquiry-button";
import { PageHero } from "@/components/page-hero";
import { UpcomingEventsSection } from "@/components/upcoming-events-section";
import { getUpcomingEvents } from "@/lib/events-store";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = createMetadata({
  title: "Event Space",
  description:
    "Book Newark's most unique food-centered event space — a 5,000 sq ft venue for private, corporate, and community events with chef-driven catering options.",
  path: "/events",
  keywords: [
    "event space Newark NJ",
    "wedding venue Newark",
    "corporate event space",
    "private event venue Newark",
    "Newark event rental",
    "catering venue Newark",
  ],
});

const differentiators = [
  {
    icon: Building2,
    title: "5,000 Sq Ft Flexible Event Space",
    desc: "Designed for celebrations, showcases, pop-ups, tastings, dinners, and corporate gatherings.",
  },
  {
    icon: Utensils,
    title: "Chef + Vendor Powered Food Options",
    desc: "Access curated culinary experiences, tastings, and multi-vendor food concepts.",
  },
  {
    icon: Target,
    title: "Mission-Driven Story",
    desc: "Your event supports an ecosystem that helps students, entrepreneurs, and local food businesses learn, earn, and grow.",
  },
  {
    icon: Sparkles,
    title: "Customizable Experiences",
    desc: "From simple rentals to full signature productions, we help shape the right package.",
  },
];

const perfectFor = [
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    desc: "Birthdays, anniversaries, engagement parties, family gatherings.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Team gatherings, client events, networking receptions, launch events.",
  },
  {
    icon: Heart,
    title: "Community Events",
    desc: "Fundraisers, cultural gatherings, nonprofit events, neighborhood activations.",
  },
  {
    icon: ChefHat,
    title: "Chef Experiences",
    desc: "Live dining events, tasting nights, chef storytelling dinners, filmed culinary sessions.",
  },
  {
    icon: Megaphone,
    title: "Brand Activations",
    desc: "Sponsored food experiences, product launches, local campaign events.",
  },
  {
    icon: Store,
    title: "Pop-Ups + Food Markets",
    desc: "Vendor showcases, tasting halls, special food events.",
  },
];

const packages = [
  {
    name: "Basic Event Rental",
    price: "Starting at $1,500–$3,000",
    blurb: "Best for clients who want the space and a flexible setup.",
    features: [
      "Event space access",
      "Basic setup window",
      "Standard venue use",
      "Ideal for private rentals and simple gatherings",
    ],
  },
  {
    name: "Curated Food Experience",
    price: "Starting at $3,500–$7,000",
    blurb: "Best for hosts who want food to be central to the event.",
    features: [
      "Event space",
      "Curated food experience",
      "Catering from 2–3 vendors",
      "Staff support",
      "More immersive guest experience",
    ],
    highlighted: true,
  },
  {
    name: "Signature Newark Experience",
    price: "Starting at $8,000–$15,000+",
    blurb:
      "Best for premium events, community showcases, and high-impact celebrations.",
    features: [
      "Multi-vendor tasting stations",
      "Live cooking demos",
      "Storytelling moments",
      "Elevated branding and decor opportunities",
      "Premium guest journey",
    ],
  },
  {
    name: "Corporate / Sponsored Buyout",
    price: "Starting at $15,000–$20,000+",
    blurb: "Best for sponsors, institutions, and larger organizations.",
    features: [
      "Full venue buyout",
      "Customized menus",
      "Branded event experience",
      "Storytelling + impact integration",
      "Premium production potential",
    ],
  },
];

const whyChoose = [
  "A venue with real cultural and entrepreneurial energy",
  "Flexible for private, public, and branded experiences",
  "Strong food-centered event identity",
  "More memorable than a standard banquet room",
  "Built-in access to culinary concepts and local storytelling",
  "Aligned with a bold Newark-rooted brand voice: real, ambitious, community-powered",
];

const trustCards = [
  {
    icon: Utensils,
    title: "Food-Centered Venue Experience",
    desc: "Events can integrate chefs, tastings, and food entrepreneurs in ways traditional venues cannot.",
  },
  {
    icon: Heart,
    title: "Mission + Impact Story",
    desc: "NFF exists to help people move from skill to ownership through a live-learn-work food ecosystem.",
  },
  {
    icon: Sparkles,
    title: "Flexible Venue Strategy",
    desc: "Built to host rentals, curated experiences, showcases, and premium activations.",
  },
];

export default async function EventsPage() {
  const upcomingEvents = await getUpcomingEvents();
  const hasUpcomingEvents = upcomingEvents.length > 0;

  return (
    <>
      <PageHero
        icon={CalendarCheck}
        title="Book Newark's Most Unique Food-Centered Event Space"
        subtitle="Host your next private, corporate, or community event inside Newark Food Factory — a dynamic venue where food, culture, entrepreneurship, and unforgettable experiences come together."
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=90"
        imageAlt="Elegant event space with set tables"
      >
        <Button href="/contact#tour" variant="white">
          Book a Tour
        </Button>
        <EventInquiryButton label="Get Pricing" variant="outline-light" />
      </PageHero>

      {/* HERO SUPPORTING + PRIMARY CTAS */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg">
            From intimate celebrations to branded community experiences, our
            5,000 sq ft event space is built for gatherings that feel alive,
            purposeful, and distinctly Newark. The broader NFF model combines
            food entrepreneurship, workforce development, and community
            activation into one ecosystem, making the venue story stronger than
            a standard rental space.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact#tour">Book a Tour</Button>
            <EventInquiryButton label="Get Pricing" variant="outline" />
            {hasUpcomingEvents && (
              <Button href="#upcoming-events" variant="outline">
                See Upcoming Events
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* WHY THIS SPACE IS DIFFERENT */}
      <section className="py-10 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Why This Space Is Different
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Not Just a Venue. A Curated Newark Experience.
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Most venues give you four walls. Newark Food Factory gives you
              something bigger: a vibrant event space connected to chefs, food
              entrepreneurs, culinary storytelling, and a mission-driven
              ecosystem that builds opportunity through food.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here, your event can be more than a booking. It can become a
              celebration with chef-driven catering, a branded food experience,
              a corporate gathering with real Newark flavor, a community event
              with authentic local impact, or a memorable experience guests
              talk about long after it ends.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Who This Is For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Perfect For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfectFor.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING PUBLIC EVENTS — section + section CTA only render when there's data */}
      <UpcomingEventsSection id="upcoming-events" events={upcomingEvents} />

      {/* EVENT PACKAGES */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Event Packages Designed Around Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packages.map(({ name, price, blurb, features, highlighted }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 border transition-all ${
                  highlighted
                    ? "bg-gradient-to-br from-primary to-primary-dark border-primary text-white shadow-xl"
                    : "bg-white/[0.04] border-white/10 text-gray-200 hover:border-primary-bright/40"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    highlighted ? "text-white" : "text-white"
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`mt-2 text-lg font-semibold ${
                    highlighted ? "text-white" : "text-primary-bright"
                  }`}
                >
                  {price}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    highlighted ? "text-white/90" : "text-gray-400"
                  }`}
                >
                  {blurb}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        highlighted ? "text-white/95" : "text-gray-300"
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          highlighted ? "text-white" : "text-primary-bright"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/contact#tour" variant="outline-light">
              Book a Tour
            </Button>
            <EventInquiryButton label="Get Pricing" variant="white" />
          </div>
        </div>
      </section>

      {/* CHEF STUDIO UPSELL */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96 order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90"
                alt="Chef plating food during a live culinary experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                <Flame className="h-3.5 w-3.5" /> Premium Add-On
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                Want to Make It Unforgettable? Add a Chef Studio Experience.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Bring your guests inside the chef&apos;s world with a live
                culinary experience that blends storytelling, food, and
                performance.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Live chef demo + tasting",
                  "Chef's table experience",
                  "Watch-and-taste format",
                  "Content-friendly culinary activation",
                  "Premium branded dining event",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact#tour" variant="outline">
                  Book a Tour
                </Button>
                <EventInquiryButton label="Get Pricing" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HOSTS CHOOSE NFF */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Hosts Choose Newark Food Factory
            </h2>
          </div>
          <ul className="space-y-4">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST BUILDERS */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              What Makes NFF Special
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              More Than a Space. A Platform for Gathering, Food, and
              Opportunity.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {trustCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 p-6 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s Create an Event People Remember
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Book a tour, request pricing, or start planning your Newark Food
            Factory experience today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact#tour" variant="white">
              Book a Tour
            </Button>
            <EventInquiryButton label="Get Pricing" variant="outline-light" />
          </div>
        </div>
      </section>

      <Script
        src="https://links.newarkfoodfactory.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
