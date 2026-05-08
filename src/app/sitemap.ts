import type { MetadataRoute } from "next";
import { projectsControllerFindAllV1 } from "@/api/generated/projects/projects";
import type { ProjectDto } from "@/api/generated/nestJSAPI.schemas";

const BASE_URL = "https://nitroc.xyz";
const LOCALES = ["en", "fr"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
      priority: page === "" ? 1 : page === "/about" ? 0.9 : page === "/projects" ? 0.8 : 0.6,
    })),
  );

  let projectIds: string[] = [];
  try {
    const response = await projectsControllerFindAllV1();
    const projects = (response as any)?.data?.data as ProjectDto[] | undefined;
    projectIds = (projects ?? [])
      .filter((p) => p.status !== "in_progress")
      .map((p) => p.projectId);
  } catch {
    // API unavailable at build time — skip project entries
  }

  const projectEntries = LOCALES.flatMap((locale) =>
    projectIds.map((id) => ({
      url: `${BASE_URL}/${locale}/projects/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...pageEntries, ...projectEntries];
}
