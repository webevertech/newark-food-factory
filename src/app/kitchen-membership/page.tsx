import {
  Warehouse,
  ChefHat,
  Check,
  Crown,
  TrendingUp,
  Building2,
  ShoppingCart,
  Clapperboard,
  CalendarDays,
  Mic2,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Award,
  ClipboardCheck,
  Users,
  Package,
  Route,
  Minus,
} from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { PricingTabs } from "@/components/pricing-tabs";

export const metadata = createMetadata({
  title: "Commissary Kitchen Membership in Newark NJ",
  description:
    "Five tiers built for every stage of your food business. Real kitchen access, real coaching, real distribution channels through our IITNJ ecosystem. Apply or tour today.",
  path: "/kitchen-membership",
  keywords: [
    "commissary kitchen Newark",
    "commercial kitchen rental NJ",
    "food business incubator Newark",
    "shared kitchen Essex County",
    "food truck commissary Newark",
    "food entrepreneur Newark",
    "kitchen membership NJ",
    "commissary kitchen membership",
  ],
});

/* ────────────────────────────────────────────────────────────────────
   FAQ Data (used for both rendering and Schema.org structured data)
──────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How long is my commitment?",
    a: "Bridge maxes at 6 months. Starter has a 6-month minimum. Builder, Operator, and Pro have 12-month minimums. After your minimum term, your membership continues month-to-month and can be cancelled with 30 days’ notice.",
  },
  {
    q: "What if I need to pause my membership?",
    a: "Every paid-tier member can pause for up to 60 days per calendar year. During pause: no monthly fee, your storage is held for $50/month, your term clock pauses. Give 14 days’ notice to reactivate.",
  },
  {
    q: "What happens if I go over my included hours?",
    a: "You’re charged the overage rate for your tier: Starter $25/hr, Builder $22/hr, Operator $20/hr, Pro $18/hr. If you’re regularly going over, that usually means you’re ready to upgrade.",
  },
  {
    q: "Can I upgrade between tiers?",
    a: "Upgrade anytime with a prorated billing adjustment. Downgrade only at the end of your current term with 30 days’ notice.",
  },
  {
    q: "What’s the security deposit?",
    a: "One month’s membership fee, refundable when you end your membership in good standing. Collected at signing along with your first month’s fee.",
  },
  {
    q: "Do I need my own insurance and licenses?",
    a: "Yes. You’ll need: your own Retail Food Establishment license (or applicable permit), Certified Food Protection Manager certification, food handler cards for your staff, and $1M general liability insurance naming Newark Food Factory as additional insured. We help you navigate it all during onboarding.",
  },
  {
    q: "Are the ecosystem benefits actually guaranteed?",
    a: "The quarterly deliverables listed for each tier are contractual — we commit to deliver them on schedule. If we miss a quarterly delivery, we make it up next quarter or credit your fee. Business outcomes (revenue, customers, sales) are never guaranteed — those depend on your work. We open doors. You walk through them.",
  },
  {
    q: "What does the 90-Day First Customer Promise actually guarantee?",
    a: "If you’re a new Builder, Operator, or Pro member and we haven’t delivered both (1) your first warm IITNJ catering introduction and (2) your first marketplace feature within your first 90 days, we credit one month’s fee. The promise is that we’ll create the opportunity. We don’t promise the prospect will buy.",
  },
  {
    q: "Can I bring my employees to work in the kitchen?",
    a: "Yes, with proper documentation. Each employee must have a current food handler card. They access the kitchen under your membership credentials, and you’re responsible for their conduct and compliance.",
  },
  {
    q: "How do bookings work?",
    a: "All kitchen use is booked through our member portal. Your tier determines how far in advance you can book (14 days for Starter, up to 45 days for Pro). Minimum 2 hours per booking, maximum 8. Cancel 24+ hours ahead for no penalty.",
  },
  {
    q: "What about IITNJ students in the kitchen?",
    a: "IITNJ Work-Based Learning students rotate through the kitchen as part of their education. They’re not your employees and you don’t direct their work. They’re supervised by NFF and IITNJ staff. The student presence is part of NFF’s mission as a workforce education partner.",
  },
  {
    q: "What’s the difference between Builder and Operator?",
    a: "Builder is built for businesses launching or in their first year of consistent revenue — 40 hours/month is enough for most early operations. Operator is built for businesses that have outgrown 40 hours — established food trucks, scaling caterers, working CPG makers. You’ll know it’s time to upgrade when you’re consistently using 50+ hours and growing.",
  },
  {
    q: "Can I tour without applying?",
    a: "Absolutely. Tours are free with no commitment. Many of our members tour two or three times before deciding. We’d rather you take the time to be sure.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function KitchenMembershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 01 / HERO
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
                Commissary Kitchen Membership
                <br />
                <span className="text-primary-bright">in Newark, NJ</span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-semibold text-white/90">
                Most commissaries rent you space. We build you a business.
              </p>

              <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                Five tiers built for every stage of your food business — from
                testing your first idea to scaling your tenth catering
                contract. Real kitchen access, real coaching, and real
                opportunities through our IITNJ institutional network and
                ecosystem of Newark distribution channels.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Apply for Membership</Button>
                <Button href="/contact" variant="outline-light">
                  Book a Tour
                </Button>
              </div>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-bright hover:text-primary-light transition-colors"
                >
                  Try the Kitchen Free <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-72 lg:h-auto">
            <Image
              src="/kitchen membership.jpg"
              alt="Newark Food Factory commissary kitchen members at work"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950/80 to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 02 / THE REFRAME
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            What Makes Us Different
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            A pathway, not just a kitchen.
          </h2>
          <div className="mt-6 text-gray-600 leading-relaxed space-y-4 text-base sm:text-lg">
            <p>
              Every food business goes through stages. You start with an idea.
              You launch. You grow. You scale. Most commissary kitchens treat
              every member the same way — they rent you space and wish you
              luck.
            </p>
            <p>
              Newark Food Factory is different. Each of our membership tiers is
              built for a specific stage of your business, with the kitchen
              access, business support, and ecosystem opportunities calibrated
              to where you are right now. As your business grows, you move up.{" "}
              <strong className="text-gray-900">The pathway is the product.</strong>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ChefHat,
              title: "Real Kitchen Access",
              desc: "Licensed commercial kitchen. Full equipment. Dedicated storage. 24/7 access.",
            },
            {
              icon: Users,
              title: "Real Business Support",
              desc: "Monthly coaching. Quarterly business reviews. Compliance handled. A Membership Manager who knows your name.",
            },
            {
              icon: Route,
              title: "Real Distribution Channels",
              desc: "IITNJ institutional catering pipeline. Marketplace platform. Channel 40 features. Open Mic Newark catering RFPs.",
            },
            {
              icon: TrendingUp,
              title: "Real Growth Pathway",
              desc: "Move from Starter to Pro as your business grows. Cohort onboarding. Member-to-mentor program. Annual member summit.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 03 / MEMBERSHIP PLANS — 5 TIERS
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Five tiers. One pathway.
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
              Choose the stage that fits where you are. Move up when you’re
              ready.
            </p>
          </div>

          <PricingTabs />

          <p className="mt-6 text-xs text-gray-500 italic text-center max-w-2xl mx-auto">
            Operator and Pro tiers: 10% off with annual prepay.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 04 / PARTNER STUDIO BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section className="px-6 sm:px-10 lg:px-16 xl:px-20 -mt-4 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-gray-900 px-8 sm:px-12 lg:px-16 py-12 lg:py-16">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                }}
              />
            </div>

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-5">
                <Crown className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Strategic Partnerships
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Partner Studio
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
                For corporate brands, institutions, and established food
                businesses requiring dedicated production zones, co-branded
                concepts, or workforce pipeline partnerships. Custom-negotiated
                arrangements with base fees from{" "}
                <strong className="text-white">$5,000/month</strong> plus
                tailored components per partnership.
              </p>
              <p className="mt-4 text-sm text-white/70 italic">
                Corporate cafeteria operators • CPG brands with retail products
                • Restaurant groups needing commissary capacity • Healthcare or
                education food programs • Foundation-funded production lines
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="white">
                  Discuss a Partnership
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 05 / TIER COMPARISON TABLE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Side-by-Side
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Compare every benefit, tier by tier.
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              No hidden fees. No vague promises. Here’s exactly what each tier
              delivers.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 06 / 90-DAY FIRST CUSTOMER PROMISE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gradient-to-b from-red-50/40 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border-2 border-primary/20 bg-white shadow-xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Our Commitment to You
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                The 90-Day First Customer Promise.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Most commissaries leave new members alone after orientation. We
                don’t. If you’re a new Builder, Operator, or Pro member, we
                commit — in writing — to deliver these two things in your first
                90 days:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    One warm introduction
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To a real institutional catering prospect through our IITNJ
                  network. Newark corporates. Newark nonprofits. Newark
                  institutions. Decision-makers we have relationships with.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    One marketplace feature
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Featured placement on our marketplace platform or in NFF
                  content distribution. Real visibility, not a logo on a
                  footer.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-primary text-white text-center">
              <p className="font-semibold text-base sm:text-lg">
                If we haven’t delivered both by your 90th day, we credit a
                month’s fee to your account.
              </p>
            </div>

            <p className="mt-8 text-xs sm:text-sm text-gray-500 italic leading-relaxed text-center max-w-2xl mx-auto">
              To be clear: we promise the introduction and the feature. We
              don’t promise the prospect will buy or the platform will drive
              sales. The opportunity is ours to create; the close is yours to
              land.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 07 / UNIVERSAL BENEFITS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              What’s Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Every Member Gets the Essentials.
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Across every paid tier, these are non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ChefHat,
                title: "Commercial Kitchen Access",
                items: [
                  "Licensed commercial kitchen",
                  "Flexible prep stations",
                  "Full equipment access",
                  "NJ Health Department compliance",
                  "Sanitation and waste management",
                ],
              },
              {
                icon: Package,
                title: "Storage and Operations",
                items: [
                  "Dry, cold, and freezer storage",
                  "Inventory labeling support",
                  "Online booking system",
                  "Compliance tracking with renewal reminders",
                  "24/7 access for paid tiers",
                ],
              },
              {
                icon: TrendingUp,
                title: "Business Support",
                items: [
                  "1:1 coaching (monthly to weekly by tier)",
                  "Quarterly business reviews",
                  "Cohort onboarding",
                  "Vendor and supplier introductions",
                  "Annual Member Summit",
                ],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white text-lg mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check className="h-4 w-4 text-primary-bright shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 08 / ECOSYSTEM BENEFITS — 5 CHANNELS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              What Else You Get
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Five distribution channels, available to members.
            </h2>
            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
              Newark Food Factory sits inside an ecosystem of distribution
              channels no other commissary in New Jersey has access to. Members
              at Builder tier and higher receive contractual access to these
              channels, with specific quarterly deliverables. We open the
              doors. You walk through them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                num: "01",
                title: "IITNJ Institutional Catering Network",
                desc: "Warm introductions to Newark-area institutional decision-makers — corporates, nonprofits, schools, government. Real relationships, not lead lists.",
              },
              {
                icon: ShoppingCart,
                num: "02",
                title: "NFF Marketplace Platform",
                desc: "Listed presence on our online ordering platform. Featured placement on higher tiers.",
              },
              {
                icon: Clapperboard,
                num: "03",
                title: "Channel 40 Content Distribution",
                desc: "Video features on our OTT platform. Production by our IITNJ multimedia team. Quarterly cadence at Builder, monthly at Pro.",
              },
              {
                icon: Mic2,
                num: "04",
                title: "Open Mic Newark Catering",
                desc: "Eligibility for catering RFPs across the Open Mic Newark event calendar. Priority and first refusal on higher tiers.",
              },
              {
                icon: CalendarDays,
                num: "05",
                title: "NFF Event Venue Showcases",
                desc: "Featured presence at events held at our 5,000 sq ft venue — corporate events, weddings, nonprofit galas. Showcase tables, tastings, vendor introductions.",
              },
            ].map(({ icon: Icon, num, title, desc }) => (
              <div
                key={title}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="absolute top-6 right-6 text-3xl font-bold text-gray-100 select-none">
                  {num}
                </span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 pr-8">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-gray-500 italic max-w-3xl mx-auto text-center leading-relaxed">
            All ecosystem deliverables are contractual. Specific cadences per
            tier are listed in the comparison table above and in your Member
            Agreement. We track delivery quarterly. If we miss a quarterly
            delivery, we make it up the next quarter or credit your fee.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 09 / FOUNDING MEMBER OFFER
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gradient-to-br from-red-50 via-amber-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Limited-Time Offer
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Be one of our first 10 Founding Members.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Newark Food Factory’s first 10 paying members receive Founding
              Member status — with benefits we’ll never offer again. The first
              10 members shape the program. They get our undivided attention.
              They get the original pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Benefits */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Founding Member Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "$200/month discount for your first 12 months",
                  "Founding Member designation in NFF marketing",
                  "Priority on early IITNJ catering opportunities",
                  "Free attendance for two at the Annual Member Summit",
                  "Member-to-Mentor eligibility",
                  "Direct line to NFF leadership",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-5">
                Pricing with Founding Discount
              </h3>
              <div className="space-y-3">
                {[
                  { tier: "Builder", std: "$899/mo", founding: "$699/mo" },
                  { tier: "Operator", std: "$1,499/mo", founding: "$1,299/mo" },
                  { tier: "Pro", std: "$2,499/mo", founding: "$2,299/mo" },
                ].map(({ tier, std, founding }) => (
                  <div
                    key={tier}
                    className="grid grid-cols-3 gap-2 items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <p className="font-semibold text-gray-900 text-sm">{tier}</p>
                    <p className="text-sm text-gray-400 line-through text-center">
                      {std}
                    </p>
                    <p className="text-sm font-bold text-primary text-right">
                      {founding}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs italic text-gray-500">
                Starter and Bridge are not eligible for Founding Member pricing.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border-2 border-primary shadow-md mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-bold text-gray-900">
                10 of 10 Founding Member spots remain.
              </span>
            </div>

            <div>
              <Button href="/contact">Apply for Founding Member Status</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 10 / TRY THE KITCHEN
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Before You Commit
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Try the kitchen, free.
            </h2>
            <div className="mt-6 text-gray-600 leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                We know choosing a commissary is a big commitment. Before you
                apply, come cook here. Twice a week we host free 4-hour
                sessions where prospective members work in the kitchen
                alongside our Membership Manager. Bring your ingredients, make
                your product, get a feel for the space.
              </p>
              <p>
                No pressure, no pitch. If it’s a fit, you’ll know. If it’s not,
                you’ll know that too — and we’ll send you off with a list of
                other Newark options that might be right for you.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Required to participate
              </p>
              <ul className="space-y-2">
                {[
                  "Current food handler certificate",
                  "Proof of $1M general liability insurance",
                  "A real product you plan to make during the session",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button href="/contact">Book a Try the Kitchen Session</Button>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/Updated Images/culinary hall.png"
              alt="Newark Food Factory commercial kitchen interior"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 11 / HOW TO APPLY — 7 STEPS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              How to Apply
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              From inquiry to first kitchen booking in 2–3 weeks.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "1", title: "Inquire", desc: "Submit an inquiry form, email, or call. We respond within 4 business hours." },
              { n: "2", title: "Discovery Call", desc: "15-min conversation with the Membership Manager to confirm fit and tier." },
              { n: "3", title: "Facility Tour", desc: "60-min walk through the kitchen, storage, equipment, and event spaces. Q&A." },
              { n: "4", title: "Apply", desc: "Complete the membership application after your tour. Submitting doesn’t bind you." },
              { n: "5", title: "Review", desc: "We review your application and confirm tier fit within 5 business days." },
              { n: "6", title: "Agreement & Payment", desc: "Sign the Member Agreement, provide compliance docs, pay first month + security deposit." },
              { n: "7", title: "Orientation", desc: "90-minute orientation, then book your first kitchen session." },
            ].map(({ n, title, desc }) => (
              <div
                key={n}
                className="relative rounded-2xl bg-white border border-gray-200 p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {n}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 12 / FAQ
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-gray-200 bg-white open:border-primary/30 open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-5 font-semibold text-gray-900 text-sm sm:text-base">
                  <span>{faq.q}</span>
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 transition-[rotate] duration-200 group-open:rotate-90" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 13 / FINAL CTA / FOOTER
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-amber-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to start?
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto text-lg">
              Three ways to get started — pick the one that fits where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: ClipboardCheck,
                title: "Apply Now",
                desc: "Ready to commit. Submit your application and start the membership process.",
                cta: "Apply for Membership",
              },
              {
                icon: Warehouse,
                title: "Book a Tour",
                desc: "Walk through the kitchen with our Membership Manager. 60 minutes, no commitment.",
                cta: "Schedule a Tour",
              },
              {
                icon: ChefHat,
                title: "Try the Kitchen",
                desc: "Cook here before you decide. Free 4-hour session, twice weekly.",
                cta: "Book a Try the Kitchen Session",
              },
            ].map(({ icon: Icon, title, desc, cta }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-colors flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {desc}
                </p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-bright hover:text-primary-light transition-colors"
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 text-center">
            <p className="font-bold text-white text-base">
              Newark Food Factory at Makerhoods
            </p>
            <p className="mt-2 text-sm text-gray-400">
              145 Court Street, Newark, NJ 07102
            </p>
            <p className="mt-1 text-sm text-gray-400">
              <a href="tel:+16095445569" className="hover:text-primary-bright transition-colors">
                (609) 544-5569
              </a>
              {" • "}
              <a
                href="mailto:info@newarkfoodfactory.com"
                className="hover:text-primary-bright transition-colors"
              >
                info@newarkfoodfactory.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────
   Comparison Table
──────────────────────────────────────────────────────────────────── */
function ComparisonTable() {
  const tiers = ["Bridge", "Starter", "Builder", "Operator", "Pro"];
  const rows: { label: string; values: (string | "dash" | "check")[] }[] = [
    { label: "Monthly Fee", values: ["$0", "$179", "$899", "$1,499", "$2,499"] },
    { label: "Initial Term", values: ["6 mo max", "6 months", "12 months", "12 months", "12 months"] },
    { label: "Kitchen Hours/Month", values: ["10 off-peak", "10 off-peak", "40 anytime", "80 priority", "130 capped"] },
    { label: "Overage Rate", values: ["dash", "$25/hr", "$22/hr", "$20/hr", "$18/hr"] },
    { label: "Booking Window", values: ["14 days", "14 days", "21 days", "30 days", "45 days"] },
    { label: "Dedicated Blocks (recurring)", values: ["dash", "dash", "dash", "dash", "2× 6 hr/week"] },
    { label: "Dry Storage", values: ["Shared bin", "1 dedicated bin", "1 dedicated shelf", "2 shelves + section", "4-ft section + cart"] },
    { label: "Cold & Freezer Storage", values: ["Shared", "Shared", "Quarter-shelves", "Half-shelves", "Full shelves"] },
    { label: "Equipment Access", values: ["Basic", "Basic", "Full", "Full + specialty", "Full + priority"] },
    { label: "Marketplace Listing", values: ["Eligible", "dash", "Standard", "Featured 1wk/mo", "Featured always"] },
    { label: "Channel 40 Features", values: ["dash", "dash", "1/quarter", "2/quarter", "1/month"] },
    { label: "IITNJ Catering Intros", values: ["dash", "dash", "1/quarter", "3/quarter", "Priority/first refusal"] },
    { label: "Open Mic Newark RFPs", values: ["dash", "dash", "Eligible", "Priority", "First refusal"] },
    { label: "NFF Event Showcase", values: ["dash", "dash", "dash", "1/quarter", "1/month"] },
    { label: "1:1 Business Coaching", values: ["dash", "dash", "Monthly", "Bi-weekly", "Weekly"] },
    { label: "Quarterly Business Review", values: ["dash", "dash", "check", "check", "Board-style"] },
    { label: "Content Production", values: ["dash", "dash", "dash", "Quarterly shoot", "Monthly content"] },
    { label: "90-Day First Customer Promise", values: ["dash", "dash", "check", "check", "check"] },
    { label: "Cohort Onboarding", values: ["dash", "dash", "check", "check", "check"] },
    { label: "Pause Right (60 days/year)", values: ["dash", "check", "check", "check", "check"] },
    { label: "Annual Member Summit", values: ["check", "check", "check", "check", "check"] },
    { label: "Annual Prepay Discount", values: ["dash", "dash", "dash", "10%", "10%"] },
    { label: "Member-to-Mentor Eligibility", values: ["dash", "dash", "dash", "dash", "check"] },
  ];

  const renderCell = (v: string) => {
    if (v === "dash")
      return <Minus className="h-4 w-4 text-gray-300 mx-auto" />;
    if (v === "check")
      return <Check className="h-4 w-4 text-primary mx-auto" />;
    return <span className="text-xs sm:text-sm text-gray-700">{v}</span>;
  };

  return (
    <div className="overflow-x-auto -mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20 px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="min-w-[860px] rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left text-xs font-semibold uppercase tracking-wider text-gray-600 px-4 sm:px-5 py-4 sticky left-0 bg-gray-50 z-10 min-w-[180px]">
                Feature
              </th>
              {tiers.map((t) => (
                <th
                  key={t}
                  className={`text-center text-xs font-bold uppercase tracking-wider px-3 py-4 ${
                    t === "Builder" ? "bg-primary text-white" : "text-gray-700"
                  }`}
                >
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, values }, i) => (
              <tr
                key={label}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
              >
                <td className="text-xs sm:text-sm font-medium text-gray-900 px-4 sm:px-5 py-3 sticky left-0 bg-inherit z-10 border-r border-gray-100">
                  {label}
                </td>
                {values.map((v, j) => (
                  <td
                    key={j}
                    className={`text-center px-3 py-3 ${
                      j === 2 ? "bg-primary/5" : ""
                    }`}
                  >
                    {renderCell(v)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500 italic sm:hidden">
        Scroll horizontally to see all tiers →
      </p>
    </div>
  );
}

