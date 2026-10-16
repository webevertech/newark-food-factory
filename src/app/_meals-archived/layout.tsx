import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Daily Meals",
  description:
    "Fresh chef-prepared signature sandwiches, factory bowls, and wings every day in Newark, NJ — pickup and delivery available. View our menu.",
  path: "/meals",
  keywords: [
    "daily meals Newark NJ",
    "meal delivery Newark",
    "chef-prepared meals",
    "Newark lunch delivery",
    "sandwiches bowls wings Newark",
  ],
});

export default function MealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
