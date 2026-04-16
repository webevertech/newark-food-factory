import {
  Info,
  BookOpen,
  Factory,
  ShoppingCart,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Newark Food Factory — a food innovation hub at the intersection of education, production, and entrepreneurship in Newark, NJ.",
  path: "/about",
  keywords: ["about Newark Food Factory", "food innovation hub Newark", "community kitchen Newark NJ", "food business ecosystem"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        icon={Info}
        title="About Newark Food Factory"
        subtitle="A food innovation hub at the intersection of education, production, and entrepreneurship."
        image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=90"
        imageAlt="Chef team working together"
      />

      {/* Mission */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Mission
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary-light">
                Empowering Food Entrepreneurs
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Newark Food Factory exists to empower the next generation of food entrepreneurs while
                serving our community with fresh, affordable meals. We combine a commercial kitchen,
                business incubator, and community food hub into one powerful ecosystem.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From students learning real-world skills to experienced chefs scaling their businesses,
                our platform supports every stage of the food business journey.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=90"
                alt="Team working in kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright">
              The Model
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Four pillars that make our ecosystem work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Education", desc: "Work-based learning programs for aspiring food professionals." },
              { icon: Factory, title: "Production", desc: "Licensed commercial kitchen powering daily meals and catering." },
              { icon: ShoppingCart, title: "Distribution", desc: "Pickup, delivery, events, and catering sales channels." },
              { icon: Rocket, title: "Entrepreneurship", desc: "Incubator and membership programs for food businesses." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-bright" />
                </div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — full-width banner */}
      <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-300">
          {[
            { stat: "100+", label: "Students Trained" },
            { stat: "50+", label: "Businesses Launched" },
            { stat: "25+", label: "Food Trucks Supported" },
            { stat: "10K+", label: "Community Members Served" },
          ].map(({ stat, label }) => (
            <div key={label} className="lg:px-12 py-4 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stat}</p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <p className="mt-3 text-white/80">Be part of Newark&apos;s food innovation story.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white">Contact Us</Button>
            <Button href="/start-a-food-business" variant="outline-light">
              Start a Business
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
