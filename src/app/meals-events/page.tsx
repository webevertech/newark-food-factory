"use client";

import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Truck,
  CalendarDays,
  Users,
  ChefHat,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/button";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import Image from "next/image";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const menus: Record<string, { breakfast: string; lunch: string; dinner: string }> = {
  Mon: { breakfast: "Scrambled Eggs & Toast", lunch: "Jerk Chicken Bowl", dinner: "Pasta Primavera" },
  Tue: { breakfast: "Pancakes & Fruit", lunch: "BBQ Pulled Pork Sandwich", dinner: "Grilled Salmon" },
  Wed: { breakfast: "Oatmeal & Berries", lunch: "Chicken Caesar Wrap", dinner: "Beef Stir Fry" },
  Thu: { breakfast: "Breakfast Burrito", lunch: "Shrimp Tacos", dinner: "Roasted Chicken" },
  Fri: { breakfast: "French Toast", lunch: "Fish & Chips", dinner: "Curry Bowl" },
  Sat: { breakfast: "Eggs Benedict", lunch: "Burger & Fries", dinner: "Chef's Special" },
  Sun: { breakfast: "Brunch Platter", lunch: "Soul Food Plate", dinner: "Sunday Roast" },
};

export default function MealsEventsPage() {
  const [activeDay, setActiveDay] = useState("Mon");

  return (
    <>
      <PageHero
        icon={UtensilsCrossed}
        title="Daily Meals + Events"
        subtitle="Fresh meals every day, plus a 5,000 sq ft event space for unforgettable experiences."
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=90"
        imageAlt="Beautifully plated fresh meal"
      />

      {/* ════════════════════════════════════════════════════════════════
          DAILY MEALS, white bg, split layout
      ════════════════════════════════════════════════════════════════ */}
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
                Chef-prepared breakfast, lunch, and dinner made fresh daily with a rotating weekly menu.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: CalendarDays, text: "7-day rotating menu" },
                  { icon: Clock, text: "Breakfast, lunch & dinner" },
                  { icon: MapPin, text: "Pickup available" },
                  { icon: Truck, text: "Delivery available" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-gray-700">
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

      {/* ════════════════════════════════════════════════════════════════
          WEEKLY MENU, dark bg, frosted glass cards
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-gray-950" id="order">
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
                <p className="font-medium text-white">{menus[activeDay][meal]}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/contact">Order Now</Button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          EVENTS, white bg, split layout (image left, content right)
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white" id="events">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-[26rem]">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=90"
                alt="Event space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Events & Catering
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                5,000 sq ft Event Space
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
                Host unforgettable events with chef-driven food experiences in our versatile space.
                Our unique multi-chef catering model brings together diverse culinary talents for
                menus that surprise and delight.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: PartyPopper, title: "Weddings & Receptions", desc: "Elegant catering for your special day" },
                  { icon: Users, title: "Corporate Events", desc: "Professional setup for meetings and galas" },
                  { icon: CalendarDays, title: "Markets & Pop-ups", desc: "Vendor-ready space for community events" },
                  { icon: ChefHat, title: "Multi-Chef Catering", desc: "Diverse culinary talents under one roof" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button href="/contact" className="mt-10">
                Book an Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Order Food or Book an Event"
        subtitle="Fresh daily meals or a chef-driven event experience. We've got you covered."
      />
    </>
  );
}
