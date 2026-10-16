"use client";

import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Truck,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { MENU_PDF_HREF } from "@/lib/site";
import Image from "next/image";
import { useState } from "react";

const categories = ["Signature Sandwiches", "Factory Bowls", "Wings"] as const;

type Category = (typeof categories)[number];

const menus: Record<Category, { name: string; desc: string; price: string }[]> = {
  "Signature Sandwiches": [
    { name: "Brick Press", desc: "Steak, grilled onions, American cheese, and crispy fries pressed on a toasted roll.", price: "$12" },
    { name: "Newark Cubano", desc: "Mojo pork, sliced ham, Swiss cheese, pickles, and mustard pressed on Cuban-style bread.", price: "$12" },
    { name: "Iron Chicken", desc: "Peri-peri chicken, pepper jack, garlic aioli, lettuce, and tomato on a toasted roll.", price: "$12" },
    { name: "Factory Shawarma", desc: "Chicken shawarma, garlic sauce, lettuce, and tomato wrapped in warm flatbread.", price: "$11" },
    { name: "Brickcity Burger", desc: "Griddled beef burger, American cheese, lettuce, tomato, onion, and house sauce on a toasted bun.", price: "$13" },
  ],
  "Factory Bowls": [
    { name: "Fire-grilled Chicken Bowl", desc: "Grilled chicken with yellow rice, beans, corn medley, pickled onions and fresh herbs.", price: "$15" },
    { name: "Salmon Bowl", desc: "Grilled salmon with yellow rice, beans, corn medley, pickled onions and fresh herbs.", price: "$17" },
    { name: "Beef Bowl", desc: "Beef with yellow rice, beans, corn medley, pickled onions and fresh herbs.", price: "$15" },
    { name: "Vegetable Bowl", desc: "Roasted vegetables with yellow rice, beans, corn medley, pickled onions and fresh herbs.", price: "$13" },
  ],
  Wings: [
    { name: "Regular Wings", desc: "Crispy chicken wings tossed in house sauce.", price: "$12" },
    { name: "Alabama White Wings", desc: "Crispy wings tossed in tangy Alabama white sauce.", price: "$12" },
    { name: "Plain Wings", desc: "Crispy chicken wings served plain.", price: "$10" },
  ],
};

export default function MealsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>(
    "Signature Sandwiches",
  );

  return (
    <>
      <PageHero
        icon={UtensilsCrossed}
        title="Daily Meals"
        subtitle="Signature sandwiches, factory bowls & wings, chef-prepared fresh daily. Pickup or delivery."
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=90"
        imageAlt="Beautifully plated fresh meal"
      />

      {/* COMING SOON banner */}
      <section className="bg-amber-50 border-b border-amber-200 px-6 sm:px-10 lg:px-16 xl:px-20 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 text-center sm:text-left">
          <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Coming Soon
          </span>
          <p className="text-sm sm:text-base text-amber-900">
            Online ordering for daily meals is launching soon. In the meantime, reach out and we&apos;ll take care of you directly.
          </p>
        </div>
      </section>

      {/* DAILY MEALS, white bg, split layout */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Daily Meals
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Fresh Meals. Every Day.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
                Chef-prepared signature sandwiches, factory bowls, and wings made fresh daily with
                a rotating weekly menu.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: CalendarDays, text: "7-day rotating menu" },
                  { icon: Clock, text: "Signature Sandwiches, Factory Bowls, Wings" },
                  { icon: MapPin, text: "Pickup available" },
                  { icon: Truck, text: "Delivery available" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={MENU_PDF_HREF} external>
                  View Full Menu
                </Button>
                <Button href="/contact" disabled>
                  Order Now — Coming Soon
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=90"
                alt="Fresh daily meals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY MENU, dark bg, frosted glass cards */}
      <section
        className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950"
        id="order"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-bright mb-3">
              Our Menu
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              See What&apos;s Cooking
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/15"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menus[activeCategory].map((item) => (
              <div
                key={item.name}
                className="rounded-xl bg-white/[0.05] border border-white/10 p-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm font-semibold text-primary-bright shrink-0">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={MENU_PDF_HREF} external>
              View Full Menu
            </Button>
            <Button href="/contact" disabled>
              Order Now — Coming Soon
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Order Fresh Meals Today"
        subtitle="Chef-prepared meals delivered fresh, every day of the week."
      />
    </>
  );
}
