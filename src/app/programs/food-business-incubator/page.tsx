import {
  Rocket,
  Target,
  BarChart3,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Business Incubator",
  description:
    "A structured program to take your food business from concept to revenue with mentorship, kitchen access, and real customers in Newark, NJ.",
  alternates: { canonical: "/programs/food-business-incubator" },
};

export default function FoodBusinessIncubatorPage() {
  return (
    <>
      <PageHero
        icon={Rocket}
        title="Food Business Incubator"
        subtitle="A structured program to take your food business from concept to revenue."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90"
        imageAlt="Chef plating food in a restaurant kitchen"
      />

      {/* BUILD TEST LAUNCH */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90"
                  alt="Food business incubator kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  The Program
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  Build, Test, Launch
                </h2>
                <p className="mt-4 text-gray-600">
                  Our incubator provides the infrastructure, mentorship, and sales channels to help
                  food entrepreneurs turn ideas into sustainable businesses.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    { icon: Lightbulb, text: "Concept development & menu engineering" },
                    { icon: ShieldCheck, text: "Licensing & compliance guidance" },
                    { icon: Target, text: "Market testing through our daily meal program" },
                    { icon: BarChart3, text: "Financial planning & pricing strategy" },
                    { icon: Users, text: "One-on-one mentorship & coaching" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-gray-700">
                      <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright">
                Our Difference
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Why Our Incubator Is Different
              </h2>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              { title: "Real Customers", desc: "Test your food with actual paying customers through our daily meals, events, and catering pipeline." },
              { title: "Full Kitchen Access", desc: "Work in a licensed commercial kitchen with professional equipment and compliance support." },
              { title: "Growth Ecosystem", desc: "Graduate into our membership program with ongoing access to sales channels and events." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-white/[0.05] border border-white/10 p-6 hover:border-primary/20 transition-all"
              >
                <h3 className="font-bold text-primary-bright">{title}</h3>
                <p className="mt-2 text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Apply to the Incubator</h2>
          <p className="mt-4 text-lg text-white/80">Spots are limited. Apply now to join our next cohort.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white">Apply Now</Button>
            <Button href="/about" variant="outline-light">Learn More</Button>
            <Button href="/meals-events#events" variant="outline-light">Book an Event</Button>
          </div>
        </div>
      </section>
    </>
  );
}
