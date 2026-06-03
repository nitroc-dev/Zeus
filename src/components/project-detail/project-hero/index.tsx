import { ExternalLink, Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SidebarRow } from "@/components/project-detail/sidebar-row";
import type { ProjectHeroProps } from "./props";

export function ProjectHero({ project, name, description, statusColor, statusLabel, t }: ProjectHeroProps) {
  return (
    <section
      className="pt-8 pb-12 grid gap-15 items-start"
      style={{ gridTemplateColumns: "1.4fr 1fr" }}
    >
      {/* Left */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {statusColor && statusLabel && (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
              style={{
                background: `color-mix(in oklch, ${statusColor} 12%, transparent)`,
                border: `1px solid color-mix(in oklch, ${statusColor} 35%, transparent)`,
                color: statusColor,
              }}
            >
              <span className="size-1.5 rounded-full bg-current" />
              {statusLabel}
            </span>
          )}
          {project.version && (
            <span
              className="px-2.5 py-1 rounded-full text-xs font-mono"
              style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line)", color: "var(--text-p-1)" }}
            >
              {project.version}
            </span>
          )}
          {project.category && (
            <span
              className="px-2.5 py-1 rounded-full text-xs font-mono capitalize"
              style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line)", color: "var(--text-p-1)" }}
            >
              {project.category}
            </span>
          )}
        </div>

        <h1
          className="font-semibold tracking-tight mb-4"
          style={{ fontSize: "clamp(48px, 6vw, 72px)", lineHeight: "1", color: "var(--text-p-0)" }}
        >
          {name}
        </h1>

        <p className="text-[19px] leading-[1.5] mb-6 max-w-[560px]" style={{ color: "var(--text-p-1)" }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2.5">
          {project.websiteUrl &&
            (project.websiteUrl.includes("nitroc.xyz") ? (
              <span
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium select-none"
                style={{
                  background: "color-mix(in oklch, var(--portfolio-ok) 10%, transparent)",
                  border: "1px solid color-mix(in oklch, var(--portfolio-ok) 30%, transparent)",
                  color: "var(--portfolio-ok)",
                }}
              >
                <span className="size-1.5 rounded-full bg-current animate-pulse" />
                {t("youAreOnIt")}
              </span>
            ) : (
              <Link
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
                style={{
                  background: "var(--portfolio-accent)",
                  color: "oklch(0.18 0.02 252)",
                  boxShadow: "0 4px 16px var(--portfolio-accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <ExternalLink className="size-3.5" />
                {t("liveDemo")}
              </Link>
            ))}
          {project.repositoryUrl && (
            <Link
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all border hover:-translate-y-px"
              style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line-2)", color: "var(--text-p-0)" }}
            >
              <Github className="size-3.5" />
              {t("sourceCode")}
            </Link>
          )}
        </div>
      </div>

      {/* Right - sticky sidebar */}
      <aside
        className="rounded-[16px] p-6"
        style={{ position: "sticky", top: "88px", background: "var(--navy-1)", border: "1px solid var(--portfolio-line)" }}
      >
        {project.year && <SidebarRow label={t("detailYear")} value={project.year} />}
        {project.role && <SidebarRow label={t("detailRole")} value={project.role} />}
        {project.timeline && <SidebarRow label={t("detailTimeline")} value={project.timeline} />}
        {project.lighthouseScore && (
          <SidebarRow
            label={t("detailLighthouse")}
            value={
              <span className="font-mono" style={{ color: "var(--portfolio-ok, oklch(0.74 0.16 145))" }}>
                {project.lighthouseScore}
              </span>
            }
          />
        )}
        {project.tags && project.tags.length > 0 && (
          <div className="py-3">
            <h5
              className="font-mono text-[10px] uppercase tracking-[0.1em] font-medium mb-2.5"
              style={{ color: "var(--text-p-3)" }}
            >
              {t("detailStack")}
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md font-mono text-xs"
                  style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line)", color: "var(--text-p-1)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </aside>
    </section>
  );
}
