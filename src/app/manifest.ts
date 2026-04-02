import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Newark Food Factory",
    short_name: "NFF",
    description:
      "A food innovation hub powering daily meals, delivery, events, and food entrepreneurs in Newark, NJ.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d30100",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
