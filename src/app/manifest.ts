import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Corentin - Full Stack Developer",
    short_name: "Corentin",
    description:
      "Full Stack Developer specializing in React, Next.js, and .NET. Based in Brussels.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/profile.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
