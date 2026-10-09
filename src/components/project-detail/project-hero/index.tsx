import { SidebarRow } from "@/components/project-detail/sidebar-row";
import { Link } from "@/i18n/navigation";
import type { ProjectHeroProps } from "./props";

export function ProjectHero({
  project,
  name,
  description,
  statusColor,
  statusLabel,
  t,
}: ProjectHeroProps) {
  const isThisSite = project.websiteUrl?.includes("nitroc.xyz");
  const textLink =
    "underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]";

  return (
    <section className="pt-10 pb-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-x-16 gap-y-10 items-start">
      <div>
        <h1
          className="text-[clamp(48px,6vw,72px)] leading-[1] font-semibold tracking-[var(--tracking-metric)] mb-5"
          style={{ color: "var(--text-p-0)" }}
        >
          {name}
        </h1>

        <p
          className="text-[length:var(--fs-4)] leading-[1.5] mb-7 max-w-[56ch]"
          style={{ color: "var(--text-p-1)" }}
        >
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[length:var(--fs-2)]">
          {project.websiteUrl && !isThisSite && (
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-btn ds-btn--md ds-btn--primary"
            >
              {t("liveDemo")}
            </Link>
          )}
          {project.repositoryUrl && (
            <Link
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
              style={{ color: "var(--text-p-1)" }}
            >
              {t("sourceCode")}
            </Link>
          )}
          {isThisSite && (
            <span style={{ color: "var(--text-p-2)" }}>{t("youAreOnIt")}</span>
          )}
        </div>
      </div>

      <dl
        className="m-0 lg:pl-8 lg:border-l"
        style={{ borderColor: "var(--portfolio-line-2)" }}
      >
        {statusLabel && (
          <SidebarRow
            label={t("detailStatus")}
            value={
              <span style={{ color: statusColor ?? undefined }}>
                {statusLabel}
              </span>
            }
          />
        )}
        {project.year && (
          <SidebarRow label={t("detailYear")} value={project.year} />
        )}
        {project.role && (
          <SidebarRow label={t("detailRole")} value={project.role} />
        )}
        {project.timeline && (
          <SidebarRow label={t("detailTimeline")} value={project.timeline} />
        )}
        {project.version && (
          <SidebarRow label={t("detailVersion")} value={project.version} />
        )}
        {project.tags && project.tags.length > 0 && (
          <SidebarRow
            label={t("detailStack")}
            value={project.tags.join(", ")}
          />
        )}
      </dl>
    </section>
  );
}
