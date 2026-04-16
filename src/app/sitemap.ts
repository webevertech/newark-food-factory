import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://newarkfoodfactory.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/start-a-food-business",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kitchen-membership",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/meals-events",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    { path: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/food-entrepreneurs",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/chef-studio",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/programs/work-based-learning",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/programs/food-business-incubator",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/programs/food-truck-membership",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/programs/product-development-lab",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
