import type { MetadataRoute } from "next";

const BASE_URL = "https://nitroc.xyz";
const LOCALES = ["en", "fr"];
const PROJECT_IDS = ["zeus", "placeholder-1", "placeholder-2"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/projects", "/contact", "/privacy"];

  const pageEntries = LOCALES.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" || page === "/projects"
        ? ("weekly" as const)
        : page === "/privacy"
          ? ("yearly" as const)
          : ("monthly" as const),
      priority: page === "" ? 1 : page === "/projects" ? 0.8 : 0.6,
    })),
  );

  const projectEntries = LOCALES.flatMap((locale) =>
    PROJECT_IDS.map((id) => ({
      url: `${BASE_URL}/${locale}/projects/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  return [...pageEntries, ...projectEntries];
}
