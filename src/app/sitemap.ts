import type { MetadataRoute } from "next";
import { getProjectsData } from "@/lib/data";

const BASE_URL = "https://nitroc.xyz";
const DEFAULT_LOCALE = "en";
const LOCALES = ["en", "fr"];

function localizedUrl(locale: string, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${BASE_URL}${prefix}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/uses", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const pageEntries = LOCALES.flatMap((locale) =>
    staticPages.map(({ path, changeFrequency, priority }) => ({
      url: localizedUrl(locale, path),
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
  );

  const projects = await getProjectsData();
  const projectIds = projects.flatMap((p) =>
    p.status !== "in_progress" ? [p.id] : [],
  );

  const projectEntries = LOCALES.flatMap((locale) =>
    projectIds.map((id) => ({
      url: localizedUrl(locale, `/projects/${id}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...pageEntries, ...projectEntries];
}
