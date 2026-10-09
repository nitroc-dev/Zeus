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
            className="group grid grid-cols-1 md:grid-cols-[1fr_220px_110px] gap-x-10 gap-y-2 py-6 border-b no-underline"
            style={{ borderColor: "var(--portfolio-line)", color: "inherit" }}
          >
            <div className="min-w-0">
              <h3
                className="text-[22px] font-semibold tracking-tight mb-1 leading-tight underline-offset-4 decoration-1 group-hover:underline"
                style={{ color: "var(--text-p-0)" }}
              >
                {name}
              </h3>
              <p
                className="text-[15px] leading-relaxed m-0 max-w-[62ch]"
                style={{ color: "var(--text-p-2)" }}
              >
                {description}
              </p>
            </div>

            <p
              className="hidden md:block text-sm leading-relaxed m-0 pt-1.5"
              style={{ color: "var(--text-p-2)" }}
            >
              {(project.tags ?? []).slice(0, 3).join(", ")}
            </p>

            <p
              className="text-sm m-0 md:pt-1.5 md:text-right"
              style={{
                color: inProgress ? "var(--portfolio-warn)" : "var(--text-p-2)",
              }}
            >
              {inProgress ? t("statusInProgress") : project.year}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
