import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Corentin - Software Engineer",
    short_name: "Corentin",
    description:
      "Software engineer specializing in TypeScript, React, Next.js, React Native and .NET. Based in Brussels.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090f",
    theme_color: "#5b72e8",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/profile.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
