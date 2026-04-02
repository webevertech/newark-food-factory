import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Meals + Events",
  description:
    "Fresh chef-prepared meals every day and a 5,000 sq ft event space for weddings, corporate events, and community gatherings in Newark, NJ.",
  alternates: { canonical: "/meals-events" },
};

export default function MealsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
