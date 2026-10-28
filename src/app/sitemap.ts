import type { MetadataRoute } from "next";
import { getProjectsData } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

const LOCALES = ["en", "fr"] as const;

// One entry per locale, each listing its translations so Google pairs
// /about with /fr/about instead of treating them as duplicates.
function entries(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const languages = {
    en: siteUrl("en", path),
    fr: siteUrl("fr", path),
    "x-default": siteUrl("en", path),
  };
  return LOCALES.map((locale) => ({
    url: siteUrl(locale, path),
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjectsData();
  return [
    ...entries("", "weekly", 1),
    ...entries("/about", "monthly", 0.9),
    ...entries("/uses", "monthly", 0.6),
    ...projects.flatMap((p) => entries(`/projects/${p.id}`, "monthly", 0.8)),
    ...entries("/privacy", "yearly", 0.2),
  ];
}
