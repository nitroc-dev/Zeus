import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getProjectsData } from "@/lib/data";
import { localePath } from "@/lib/seo";
import { createTranslator } from "@/utils/translate";
import type { ProjectsListProps } from "./props";

export async function ProjectsList({
  locale,
  featuredOnly = false,
}: ProjectsListProps) {
  const tr = createTranslator(locale);
  const [all, t] = await Promise.all([
    getProjectsData(),
    getTranslations({ locale, namespace: "projects" }),
  ]);
  const projects = all.filter((p) => !featuredOnly || p.isFeatured);

  return (
    <div style={{ borderTop: "1px solid var(--line)" }}>
      {projects.map((project) => {
        const name = tr(project, "name") ?? project.nameEn;
        const description = tr(project, "description") ?? project.descriptionEn;
        const inProgress = project.status === "in_progress";
        return (
          <Link
            key={project.id}
            href={localePath(locale, `/projects/${project.id}`)}
            className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 py-5 border-b no-underline"
            style={{ borderColor: "var(--line)", color: "inherit" }}
          >
            <div className="min-w-0">
              <h3
                className="m-0 mb-1 text-[length:var(--fs-4)] font-semibold tracking-[var(--tracking-title)] leading-tight underline-offset-4 decoration-1 group-hover:underline"
                style={{ color: "var(--text-1)" }}
              >
                {name}
              </h3>
              <p
                className="m-0 text-[length:var(--fs-3)] leading-relaxed"
                style={{ color: "var(--text-3)" }}
              >
                {description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="ds-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 self-start mt-3 sm:mt-0 sm:pt-0.5 sm:row-start-1 sm:col-start-2">
              <span
                className="inline-flex items-center gap-2 text-[length:var(--fs-2)] whitespace-nowrap"
                style={{ color: inProgress ? "var(--warn)" : "var(--text-3)" }}
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full shrink-0"
                  style={{
                    background: inProgress ? "var(--warn)" : "var(--ok)",
                  }}
                />
                {inProgress ? t("statusInProgress") : project.year}
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
                style={{ color: "var(--text-3)" }}
              >
                →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
