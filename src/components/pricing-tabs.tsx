"use client";

import { useState, useEffect } from "react";
import { Check, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/button";

const AUTO_ROTATE_MS = 15000;

type Tier = {
  id: string;
  name: string;
  stageLabel: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  quarterlyBenefits?: string[];
  quarterlyLabel?: string;
  promiseCallout?: boolean;
  idealFor?: string;
  eligibility?: string;
  footnote?: string;
  badge?: string;
  badgeVariant?: "primary" | "info" | "accent";
  ctaLabel: string;
};

const TIERS: Tier[] = [
  {
    id: "bridge",
    name: "Bridge",
    stageLabel: "For IITNJ workforce program graduates",
    price: "$0",
    period: "for 6 months (max)",
    desc: "From learning to earning, with no financial barrier.",
    features: [
      "10 off-peak kitchen hours/month",
      "Shared storage (dry, cold, freezer)",
      "Basic equipment access",
      "Monthly group workshops",
      "Marketplace listing eligibility",
      "Mentorship from IITNJ faculty advisor",
    ],
    eligibility:
      "Completed 450+ hours of IITNJ workforce program. Validated business concept. Limited to 8 active Bridge members at a time.",
    footnote: "Auto-converts to Starter at month 7.",
    badge: "Program Bonus",
    badgeVariant: "info",
    ctaLabel: "Apply for Bridge",
  },
  {
    id: "starter",
    name: "Starter",
    stageLabel: "Test your idea",
    price: "$179",
    period: "per month • 6-month minimum",
    desc: "Validate your concept with low-risk kitchen access.",
    features: [
      "10 kitchen hours/month (off-peak)",
      "Dedicated dry storage bin (24″ × 18″)",
      "Shared cold and freezer access",
      "Basic equipment access",
      "14-day advance booking",
      "Monthly workshops + quarterly community dinners",
      "First-customer worksheet + orientation call",
      "Pause right (up to 60 days/year)",
    ],
    idealFor:
      "Side hustlers, students, early-stage entrepreneurs validating a food business idea.",
    ctaLabel: "Start with Starter",
  },
  {
    id: "builder",
    name: "Builder",
    stageLabel: "Launch your business",
    price: "$899",
    period: "per month • 12-month term",
    desc: "Where real food businesses operate daily.",
    features: [
      "40 kitchen hours/month, anytime",
      "Dedicated dry shelf + cold/freezer storage",
      "Full equipment access (hood, combi oven, dishmachine)",
      "21-day advance booking",
      "Marketplace listing on NFF platform",
      "Monthly 1:1 business coaching",
      "Quarterly business review",
      "Full compliance support",
      "Pause right (up to 60 days/year)",
      "Cohort onboarding",
    ],
    quarterlyBenefits: [
      "1 Channel 40 video feature",
      "1 IITNJ institutional catering intro",
      "Newsletter member spotlight",
      "Open Mic Newark catering eligibility",
    ],
    promiseCallout: true,
    idealFor:
      "New food trucks, first-year caterers, food businesses with consistent revenue.",
    badge: "Most Popular",
    ctaLabel: "Build with Builder",
  },
  {
    id: "operator",
    name: "Operator",
    stageLabel: "Grow steadily",
    price: "$1,499",
    period: "per month • 12-month term • 10% off annual prepay",
    desc: "Built for established food businesses scaling beyond launch.",
    features: [
      "80 priority kitchen hours/month",
      "Expanded storage (2 dry shelves + half-section)",
      "Full equipment access + specialty equipment",
      "30-day advance booking",
      "Featured marketplace placement (1 week/month)",
      "Bi-weekly 1:1 business coaching",
      "Quarterly content shoot (4-hour session)",
      "Annual menu engineering review",
      "Vendor introductions",
      "Pause right (up to 60 days/year)",
      "Cohort onboarding",
    ],
    quarterlyBenefits: [
      "2 Channel 40 features",
      "3 IITNJ institutional catering intros",
      "Featured at one NFF event",
      "Priority Open Mic Newark catering",
      "Influencer Café K-12 spotlight (annual)",
    ],
    promiseCallout: true,
    idealFor:
      "Established food trucks doing 4+ days/week, scaling caterers, packaged food makers with retail distribution.",
    badge: "New",
    badgeVariant: "accent",
    ctaLabel: "Grow with Operator",
  },
  {
    id: "pro",
    name: "Pro",
    stageLabel: "Scale multi-unit",
    price: "$2,499",
    period: "per month • 12-month term • 10% off annual prepay",
    desc: "For serious operators running multi-unit businesses or scaling toward wholesale.",
    features: [
      "130 kitchen hours/month (capped, $18/hr overage)",
      "Up to 2 recurring 6-hour dedicated blocks per week",
      "Dedicated 4-ft storage section + reserved cart",
      "Priority on specialty equipment",
      "45-day advance booking",
      "Continuous featured marketplace placement",
      "Weekly 1:1 with assigned coach",
      "Monthly content production",
      "Wholesale strategy support",
      "Expansion planning (second location, retail, distribution)",
      "Member-to-Mentor program eligibility",
      "Pause right (up to 60 days/year)",
    ],
    quarterlyBenefits: [
      "1 Channel 40 feature per month",
      "First refusal on IITNJ institutional catering RFPs",
      "First refusal on Open Mic Newark catering",
      "Featured at one NFF event per month",
      "Wholesale distribution pilot (Phase 3)",
    ],
    quarterlyLabel: "Monthly Ecosystem Benefits",
    promiseCallout: true,
    idealFor:
      "Ghost kitchen operators, multi-truck operations, food businesses scaling toward wholesale distribution.",
    ctaLabel: "Scale with Pro",
  },
];

export function PricingTabs() {
  const [activeId, setActiveId] = useState<string>("builder");
  const [autoPlay, setAutoPlay] = useState(true);
  const active = TIERS.find((t) => t.id === activeId) ?? TIERS[2];

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setActiveId((current) => {
        const idx = TIERS.findIndex((t) => t.id === current);
        return TIERS[(idx + 1) % TIERS.length].id;
      });
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [autoPlay]);

  const handleSelect = (id: string) => {
    setAutoPlay(false);
    setActiveId(id);
  };

  return (
    <div>
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Membership tiers"
        className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-1.5 grid grid-cols-2 sm:grid-cols-5 gap-1.5"
      >
        {TIERS.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tier-panel-${t.id}`}
              id={`tier-tab-${t.id}`}
              onClick={() => handleSelect(t.id)}
              className={`relative rounded-xl px-3 py-3 text-center transition-all cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                {t.id === "builder" && (
                  <Star
                    className={`h-3.5 w-3.5 ${
                      isActive ? "text-white" : "text-primary"
                    }`}
                    fill="currentColor"
                  />
                )}
                <span className="font-bold text-sm sm:text-base">{t.name}</span>
              </div>
              <p
                className={`text-xs sm:text-sm font-mono mt-0.5 ${
                  isActive ? "text-white/90" : "text-gray-500"
                }`}
              >
                {t.price}
                {t.id !== "bridge" && (
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    /mo
                  </span>
                )}
              </p>
              {t.badge && (
                <span
                  className={`absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                    t.badgeVariant === "info"
                      ? "bg-blue-100 text-blue-800"
                      : t.badgeVariant === "accent"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-primary text-white"
                  }`}
                >
                  {t.badge}
                </span>
              )}

              {/* Auto-rotate progress bar — only on the active tab while autoplay is on */}
              {isActive && autoPlay && (
                <span
                  key={activeId}
                  aria-hidden
                  className="absolute bottom-1.5 left-3 right-3 h-0.5 rounded-full bg-white/30 overflow-hidden"
                >
                  <span
                    className="block h-full bg-white origin-left"
                    style={{
                      animation: `pricing-tabs-progress ${AUTO_ROTATE_MS}ms linear forwards`,
                    }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes pricing-tabs-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="pricing-tabs-progress"] { animation: none !important; }
        }
      `}</style>

      {/* Active tier panel */}
      <div
        key={active.id}
        role="tabpanel"
        id={`tier-panel-${active.id}`}
        aria-labelledby={`tier-tab-${active.id}`}
        className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        <TierPanel tier={active} />
      </div>
    </div>
  );
}

function TierPanel({ tier }: { tier: Tier }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary text-white ring-2 ring-primary shadow-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.25) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(255,200,150,0.18) 0%, transparent 50%)",
        }}
      />

      <div className="relative grid lg:grid-cols-12 gap-8 p-6 sm:p-10">
        {/* Left: Header / price / CTA */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="text-3xl sm:text-4xl font-bold">{tier.name}</h3>
          <p className="text-sm italic mt-1 text-white/70">{tier.stageLabel}</p>

          <div className="mt-6 mb-1">
            <span className="text-5xl sm:text-6xl font-bold tracking-tight font-mono">
              {tier.price}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70">{tier.period}</p>

          <p className="mt-5 text-base leading-relaxed text-white/90 font-medium">
            {tier.desc}
          </p>

          {tier.promiseCallout && (
            <div className="mt-5 rounded-xl bg-white/15 p-4 text-xs leading-relaxed">
              <p className="font-semibold mb-1">90-Day First Customer Promise</p>
              <p className="text-white/85">
                Get your first IITNJ intro and platform feature in 90 days — or
                one month’s credit.
              </p>
            </div>
          )}

          {tier.idealFor && (
            <div className="mt-5 pt-5 border-t border-white/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                Ideal for
              </p>
              <p className="text-sm italic leading-relaxed text-white/80">
                {tier.idealFor}
              </p>
            </div>
          )}

          {tier.eligibility && (
            <div className="mt-5 pt-5 border-t border-white/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                Eligibility
              </p>
              <p className="text-sm italic leading-relaxed text-white/80">
                {tier.eligibility}
              </p>
            </div>
          )}

          <div className="mt-auto pt-7">
            <Button href="/contact" variant="white" className="w-full sm:w-auto">
              {tier.ctaLabel}
            </Button>
            {tier.footnote && (
              <p className="mt-3 text-xs text-white/70">{tier.footnote}</p>
            )}
          </div>
        </div>

        {/* Right: Features + Quarterly benefits */}
        <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
            Includes
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {tier.features.map((f) => (
              <div
                key={f}
                className="text-sm flex items-start gap-2 text-white/90"
              >
                <Check className="h-4 w-4 shrink-0 mt-0.5 text-white" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          {tier.quarterlyBenefits && (
            <>
              <div className="my-6 h-px bg-white/15" />
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
                {tier.quarterlyLabel ?? "Quarterly Ecosystem Benefits"}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {tier.quarterlyBenefits.map((b) => (
                  <div
                    key={b}
                    className="text-sm flex items-start gap-2 text-white/90"
                  >
                    <Sparkles className="h-3.5 w-3.5 shrink-0 mt-0.5 text-white" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
