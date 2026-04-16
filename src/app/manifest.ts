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
    theme_color: "#8d1c0d",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
