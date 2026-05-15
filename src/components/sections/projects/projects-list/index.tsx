import Link from "next/link";
import { getProjectsData } from "@/lib/data";
import { createTranslator } from "@/utils/translate";
import type { ProjectsListProps } from "./props";

export async function ProjectsList({
  locale,
  featuredOnly = false,
}: ProjectsListProps) {
  const tr = createTranslator(locale);
  const all = await getProjectsData();
  const projects = all.filter((p) => !featuredOnly || p.isFeatured);

  return (
    <div style={{ borderTop: "1px solid var(--portfolio-line)" }}>
      {projects.map((project, i) => {
        const name = tr(project, "name") ?? project.nameEn;
        const description = tr(project, "description") ?? project.descriptionEn;
        return (
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
            <div
              className="font-mono text-xs self-center"
              style={{ color: "var(--text-p-3)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0">
              <h3
                className="text-[22px] font-semibold tracking-tight mb-1 leading-tight"
                style={{ color: "var(--text-p-0)" }}
              >
                {name}
              </h3>
              <p
                className="text-sm leading-relaxed m-0 line-clamp-2"
                style={{ color: "var(--text-p-2)" }}
              >
                {description}
              </p>
            </div>

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

            <div
              className="self-center text-lg transition-transform duration-200 group-hover:translate-x-1.5"
              style={{ color: "var(--portfolio-accent)" }}
            >
              →
            </div>
          </Link>
        );
      })}
    </div>
  );
}
