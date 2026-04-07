"use client";

import { useProjectsControllerFindAllV1 } from "@/api/generated/projects/projects";
import type {
  ProjectDto,
  ProjectsControllerFindAllV1StatusItem,
} from "@/api/generated/nestJSAPI.schemas";
import ProjectCard from "@/components/cards/project";
import type { Project } from "@/data/hardcoded-data";

interface ProjectsGridProps {
  locale: string;
  featuredOnly?: boolean;
  status?: ProjectsControllerFindAllV1StatusItem[];
  skeletonCount?: number;
  children?: React.ReactNode;
}

function mapProjectDtoToProject(dto: ProjectDto, locale: string): Project {
  return {
    id: dto.projectId,
    name: locale === "fr" ? dto.nameFr : dto.nameEn,
    description: locale === "fr" ? dto.descriptionFr : dto.descriptionEn,
    longDescription:
      locale === "fr"
        ? (dto.longDescriptionFr as string | undefined)
        : (dto.longDescriptionEn as string | undefined),
    imageUrl: dto.imageUrl as string | undefined,
    repositoryUrl: dto.repositoryUrl as string | undefined,
    websiteUrl: dto.websiteUrl as string | undefined,
    tags: dto.tags,
    highlights: dto.highlights,
    year: dto.year as string | undefined,
    status: dto.status as Project["status"],
    role: dto.role as string | undefined,
    isFeatured: dto.isFeatured,
  };
}

export function ProjectsGrid({
  locale,
  featuredOnly = false,
  status,
  skeletonCount = 3,
  children,
}: ProjectsGridProps) {
  const { data, isLoading, isError } = useProjectsControllerFindAllV1(
    status ? { status } : undefined,
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-lg bg-gray-800/50 border border-gray-700/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) return null;

  const raw = (data as any)?.data?.data as ProjectDto[] | undefined;
  const projects = (raw ?? []).map((dto) => mapProjectDtoToProject(dto, locale));
  const displayed = featuredOnly ? projects.filter((p) => p.isFeatured) : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {displayed.map((project) => (
        <ProjectCard key={project.id} project={project} locale={locale} />
      ))}
      {children}
    </div>
  );
}
