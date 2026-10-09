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
    <div style={{ borderTop: "1px solid var(--portfolio-line)" }}>
      {projects.map((project) => {
        const name = tr(project, "name") ?? project.nameEn;
        const description = tr(project, "description") ?? project.descriptionEn;
        const inProgress = project.status === "in_progress";
        return (
          <Link
            key={project.id}
            href={localePath(locale, `/projects/${project.id}`)}
            className="group grid grid-cols-1 md:grid-cols-[1fr_auto_110px_24px] gap-x-10 gap-y-2 py-6 border-b no-underline"
            style={{ borderColor: "var(--portfolio-line)", color: "inherit" }}
          >
            <div className="min-w-0">
              <h3
                className="text-[length:var(--fs-5)] font-semibold tracking-[var(--tracking-title)] mb-1 leading-tight underline-offset-4 decoration-1 group-hover:underline"
                style={{ color: "var(--text-p-0)" }}
              >
                {name}
              </h3>
              <p
                className="text-[length:var(--fs-3)] leading-relaxed m-0 max-w-[62ch]"
                style={{ color: "var(--text-p-2)" }}
              >
                {description}
              </p>
            </div>

            <div className="hidden md:flex flex-wrap gap-1.5 self-center justify-end">
              {(project.tags ?? []).slice(0, 3).map((tag) => (
                <span key={tag} className="ds-tag">
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="text-[length:var(--fs-2)] m-0 md:self-center md:text-right inline-flex md:justify-end items-center gap-2"
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
            </p>

            <span
              aria-hidden="true"
              className="hidden md:block self-center text-[length:var(--fs-4)] transition-transform duration-150 group-hover:translate-x-1"
              style={{ color: "var(--text-p-2)" }}
            >
              →
            </span>
          </Link>
        );
      })}
    </div>
  );
}
