import {
  Handshake,
  Briefcase,
  Users,
  Heart,
  TrendingUp,
  Building2,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Partners",
  description:
    "Partner with Newark Food Factory to support workforce development, small business growth, and community food access in Newark, NJ.",
  path: "/partners",
  keywords: ["partner with Newark Food Factory", "community food access", "workforce development Newark", "food business sponsorship"],
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        icon={Handshake}
        title="Our Partners"
        subtitle="Building a stronger Newark through workforce development, small business growth, and community food access."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=90"
        imageAlt="Team collaboration and partnership"
      />

      {/* PARTNERSHIP FOCUS AREAS */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-3">Partnership Focus Areas</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: GraduationCap,
                title: "Workforce & Economic Development",
                desc: "We partner with organizations focused on job training, workforce readiness, and economic empowerment in the food sector.",
              },
              {
                icon: TrendingUp,
                title: "Small Business Growth",
                desc: "We collaborate with business development organizations, lenders, and accelerators to support food entrepreneurs.",
              },
              {
                icon: Heart,
                title: "Community Food Access",
                desc: "We work with community organizations to expand healthy food access across Newark neighborhoods.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 p-6 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDING TOGETHER */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=90"
                alt="Community partnership and collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright">
                Collaboration
              </p>
              <h2 className="text-3xl font-bold text-white mt-3">Building Together</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                We believe in the power of collaboration. Our partners include workforce development
                agencies, educational institutions, community organizations, and business support networks
                that share our vision for a stronger Newark food economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US — horizontal list */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Benefits
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-3">Why Partner With Us</h2>
          <div className="mt-12 space-y-4">
            {[
              { icon: Building2, label: "Licensed Facility", desc: "Commercial kitchen and event space ready for production and events." },
              { icon: Users, label: "Community Reach", desc: "Thousands of community members served through daily meals and programming." },
              { icon: Briefcase, label: "Business Pipeline", desc: "Active entrepreneur development programs generating new food businesses." },
              { icon: ShoppingCart, label: "Revenue Channels", desc: "Daily meals, events, and catering create multiple revenue opportunities." },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-primary/20 hover:shadow-md transition-all"
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
      </section>

      <CTASection
        dark
        title="Become a Partner"
        subtitle="Let's build Newark's food ecosystem together."
      />
    </>
  );
}
