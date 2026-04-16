import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Daily Meals + Events",
  description:
    "Fresh chef-prepared meals every day and a 5,000 sq ft event space for weddings, corporate events, and community gatherings in Newark, NJ.",
  path: "/meals-events",
  keywords: ["daily meals Newark NJ", "catering Newark", "event space Newark", "wedding venue Newark NJ", "corporate events Newark"],
});

export default function MealsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
