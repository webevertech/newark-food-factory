import {
  Rocket,
  ArrowRight,
  Flame,
} from "lucide-react";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Food Entrepreneurs",
  description:
    "Resources, support, and community for food entrepreneurs at Newark Food Factory. Launch, operate, and scale your food business.",
  path: "/food-entrepreneurs",
  keywords: ["food entrepreneur Newark", "food business support NJ", "food startup resources", "culinary entrepreneur program"],
});

export default function FoodEntrepreneursPage() {
  return (
    <>
      <PageHero
        icon={Rocket}
        title="Food Entrepreneurs"
        subtitle="Resources, support, and community for food entrepreneurs building real businesses at Newark Food Factory."
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=90"
        imageAlt="Food entrepreneur in commercial kitchen"
      />

      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <Flame className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Coming Soon
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We&apos;re building something special for food entrepreneurs. In the
            meantime, explore our programs or get in touch to learn more.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/start-a-food-business">Start a Food Business</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
            <Button href="/meals-events#events" variant="outline">
              Book an Event
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
