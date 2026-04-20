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
import Image from "next/image";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const menus: Record<
  string,
  { breakfast: string; lunch: string; dinner: string }
> = {
  Mon: { breakfast: "Scrambled Eggs & Toast", lunch: "Jerk Chicken Bowl", dinner: "Pasta Primavera" },
  Tue: { breakfast: "Pancakes & Fruit", lunch: "BBQ Pulled Pork Sandwich", dinner: "Grilled Salmon" },
  Wed: { breakfast: "Oatmeal & Berries", lunch: "Chicken Caesar Wrap", dinner: "Beef Stir Fry" },
  Thu: { breakfast: "Breakfast Burrito", lunch: "Shrimp Tacos", dinner: "Roasted Chicken" },
  Fri: { breakfast: "French Toast", lunch: "Fish & Chips", dinner: "Curry Bowl" },
  Sat: { breakfast: "Eggs Benedict", lunch: "Burger & Fries", dinner: "Chef's Special" },
  Sun: { breakfast: "Brunch Platter", lunch: "Soul Food Plate", dinner: "Sunday Roast" },
};

export default function MealsPage() {
  const [activeDay, setActiveDay] = useState("Mon");

  return (
    <>
      <PageHero
        icon={UtensilsCrossed}
        title="Daily Meals"
        subtitle="Fresh chef-prepared breakfast, lunch, and dinner made daily. Pickup or delivery."
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=90"
        imageAlt="Beautifully plated fresh meal"
      />

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
                Chef-prepared breakfast, lunch, and dinner made fresh daily with
                a rotating weekly menu.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: CalendarDays, text: "7-day rotating menu" },
                  { icon: Clock, text: "Breakfast, lunch & dinner" },
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
              <Button href="/contact" className="mt-8">
                Order Now
              </Button>
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
              Weekly Menu
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              See what&apos;s cooking this week
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDay === day
                    ? "bg-primary text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/15"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {(["breakfast", "lunch", "dinner"] as const).map((meal) => (
              <div
                key={meal}
                className="rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-bright mb-2">
                  {meal}
                </p>
                <p className="font-medium text-white">
                  {menus[activeDay][meal]}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/contact">Order Now</Button>
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
