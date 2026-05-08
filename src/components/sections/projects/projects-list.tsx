"use client";

import Link from "next/link";
import type { ProjectDto } from "@/api/generated/nestJSAPI.schemas";
import { useProjectsControllerFindAllV1 } from "@/api/generated/projects/projects";
import type { Project } from "@/data/hardcoded-data";

function mapDto(dto: ProjectDto, locale: string): Project {
  return {
    id: dto.projectId,
    name: locale === "fr" ? dto.nameFr : dto.nameEn,
    description: locale === "fr" ? dto.descriptionFr : dto.descriptionEn,
    tags: dto.tags,
    year: dto.year as string | undefined,
    role: dto.role as string | undefined,
    status: dto.status as Project["status"],
    isFeatured: dto.isFeatured,
    repositoryUrl: dto.repositoryUrl as string | undefined,
    websiteUrl: dto.websiteUrl as string | undefined,
  };
}

function RowSkeleton() {
  return (
    <div
      className="flex items-center gap-8 py-6 px-3 border-b animate-pulse"
      style={{ borderColor: "var(--portfolio-line)" }}
    >
      <div className="w-8 h-3 rounded bg-[var(--navy-2)]" />
      <div className="flex-1 space-y-2">
        <div className="w-40 h-4 rounded bg-[var(--navy-2)]" />
        <div className="w-72 h-3 rounded bg-[var(--navy-2)]" />
      </div>
      <div className="hidden md:flex gap-1.5">
        <div className="w-16 h-5 rounded bg-[var(--navy-2)]" />
        <div className="w-16 h-5 rounded bg-[var(--navy-2)]" />
      </div>
      <div className="hidden md:block w-10 h-3 rounded bg-[var(--navy-2)]" />
    </div>
  );
}

interface ProjectsListProps {
  locale: string;
  featuredOnly?: boolean;
}

export function ProjectsList({
  locale,
  featuredOnly = false,
}: ProjectsListProps) {
  const { data, isLoading, isError } = useProjectsControllerFindAllV1();

  if (isLoading) {
    return (
      <div style={{ borderTop: "1px solid var(--portfolio-line)" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <RowSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) return null;

  const raw = (data as any)?.data?.data as ProjectDto[] | undefined;
  const projects = (raw ?? [])
    .map((dto) => mapDto(dto, locale))
    .filter((p) => !featuredOnly || p.isFeatured);

  return (
    <div style={{ borderTop: "1px solid var(--portfolio-line)" }}>
      {projects.map((project, i) => (
        <Link
          key={project.id}
          href={`/${locale}/projects/${project.id}`}
          className="group grid gap-8 py-6 px-3 border-b transition-all duration-200 no-underline
            hover:pl-6 hover:[background:linear-gradient(90deg,var(--portfolio-accent-soft),transparent_40%)]"
          style={{
            gridTemplateColumns: "56px 1fr auto auto 28px",
            borderColor: "var(--portfolio-line)",
            color: "inherit",
          }}
        >
          {/* Number */}
          <div
            className="font-mono text-xs self-center"
            style={{ color: "var(--text-p-3)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* Title + description */}
          <div className="min-w-0">
            <h3
              className="text-[22px] font-semibold tracking-tight mb-1 leading-tight"
              style={{ color: "var(--text-p-0)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-sm leading-relaxed m-0 line-clamp-2"
              style={{ color: "var(--text-p-2)" }}
            >
              {project.description}
            </p>
          </div>

          {/* Tags — hidden on small screens */}
          <div className="hidden md:flex flex-wrap gap-1.5 self-center">
            {(project.tags ?? []).slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs"
                style={{
                  background: "var(--navy-2)",
                  border: "1px solid var(--portfolio-line)",
                  color: "var(--text-p-1)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year — hidden on small screens */}
          <div
            className="hidden md:block font-mono text-[13px] text-right self-center"
            style={{ color: "var(--text-p-2)" }}
          >
            {project.year ?? "—"}
            {project.role && (
              <small
                className="block text-[11px] mt-1"
                style={{ color: "var(--text-p-3)" }}
              >
                {project.role}
              </small>
            )}
          </div>

          {/* Arrow */}
          <div
            className="self-center text-lg transition-transform duration-200 group-hover:translate-x-1.5"
            style={{ color: "var(--portfolio-accent)" }}
          >
            →
          </div>
        </Link>
      ))}
    </div>
  );
}
