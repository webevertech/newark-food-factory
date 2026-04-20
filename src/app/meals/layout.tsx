import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Daily Meals",
  description:
    "Fresh chef-prepared breakfast, lunch, and dinner every day in Newark, NJ — pickup and delivery available. View our rotating weekly menu.",
  path: "/meals",
  keywords: [
    "daily meals Newark NJ",
    "meal delivery Newark",
    "chef-prepared meals",
    "Newark lunch delivery",
    "breakfast lunch dinner Newark",
  ],
});

export default function MealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
