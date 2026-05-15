import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { BrowserMockup } from "@/components/project-detail/browser-mockup";
import { LighthouseCard } from "@/components/project-detail/lighthouse-card";
import { MarkdownContent } from "@/components/project-detail/markdown-content";
import { Pillar } from "@/components/project-detail/pillar";
import { Section } from "@/components/project-detail/section";
import { SidebarRow } from "@/components/project-detail/sidebar-row";
import { getProjectById, getProjectIds, getProjectsData } from "@/lib/data";
import { createTranslator } from "@/utils/translate";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

const STATUS_COLORS: Record<string, string> = {
  live: "var(--portfolio-ok, oklch(0.74 0.16 145))",
  in_progress: "oklch(0.78 0.16 75)",
  archived: "var(--text-p-3)",
};

export async function generateStaticParams() {
  const ids = await getProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const project = await getProjectById(id);
  if (!project) return {};
  const tr = createTranslator(locale);
  const name = tr(project, "name") ?? project.nameEn;
  const description = tr(project, "description") ?? project.descriptionEn;
  const title = project.seoTitle ?? `${name} - Corentin`;
  const desc = project.seoDescription ?? description;
  const images = project.imageUrl
    ? [
        {
          url: project.imageUrl.startsWith("http")
            ? project.imageUrl
            : `https://nitroc.xyz${project.imageUrl}`,
          width: 1200,
          height: 630,
        },
      ]
    : [{ url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 }];
  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://nitroc.xyz/${locale}/projects/${id}`,
      languages: {
        en: `https://nitroc.xyz/en/projects/${id}`,
        fr: `https://nitroc.xyz/fr/projects/${id}`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `https://nitroc.xyz/${locale}/projects/${id}`,
      images,
    },
    robots:
      project.status === "in_progress"
        ? { index: false, follow: false }
        : undefined,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, id } = await params;
  const t = await getTranslations("projects");
  const project = await getProjectById(id);

  if (!project) notFound();

  const tr = createTranslator(locale);
  const name = tr(project, "name") ?? project.nameEn;
  const description = tr(project, "description") ?? project.descriptionEn;
  const longDescription =
    tr(project, "longDescription") ?? project.longDescriptionEn;
  const content = tr(project, "content");

  const statusColor = project.status ? STATUS_COLORS[project.status] : null;
  const statusLabels: Record<string, string> = {
    live: t("statusLive"),
    in_progress: t("statusInProgress"),
    archived: t("statusArchived"),
  };
  const statusLabel = project.status ? statusLabels[project.status] : null;

  const lhScores = project.lighthouseScore
    ? project.lighthouseScore
        .split(/[·|·]/)
        .map((s) => parseInt(s.trim(), 10))
        .filter((n) => !Number.isNaN(n))
    : [];
  const lhLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

  const allProjects = await getProjectsData();
  const featured = allProjects.filter((p) => p.isFeatured);
  const currentIdx = featured.findIndex((p) => p.id === id);
  const nextRaw =
    featured.length > 1 ? featured[(currentIdx + 1) % featured.length] : null;

  const stackItems =
    project.techStack ??
    project.tags?.map((name) => ({ name, reasonEn: "", reasonFr: "" })) ??
    [];

  return (
    <main className="relative overflow-hidden page-bg">
      <div className="px-8 max-w-[1180px] mx-auto">
        {/* Breadcrumb */}
        <div
          className="pt-6 pb-0 font-mono text-xs"
          style={{ color: "var(--text-p-3)" }}
        >
          <Link
            href={`/${locale}`}
            className="transition-colors hover:opacity-80"
            style={{ color: "var(--text-p-2)" }}
          >
            ← {t("breadcrumbHome")}
          </Link>
          <span className="mx-2">/</span>
          <span>{name}</span>
        </div>

        {/* ── Hero ── */}
        <section
          className="pt-8 pb-12 grid gap-15 items-start"
          style={{ gridTemplateColumns: "1.4fr 1fr" }}
        >
          {/* Left */}
          <div>
            {/* Chips row */}
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
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {statusLabel}
                </span>
              )}
              {project.version && (
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--portfolio-line)",
                    color: "var(--text-p-1)",
                  }}
                >
                  {project.version}
                </span>
              )}
              {project.category && (
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono capitalize"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--portfolio-line)",
                    color: "var(--text-p-1)",
                  }}
                >
                  {project.category}
                </span>
              )}
            </div>

            <h1
              className="font-semibold tracking-tight mb-4"
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                lineHeight: "1",
                color: "var(--text-p-0)",
              }}
            >
              {name}
            </h1>

            <p
              className="text-[19px] leading-[1.5] mb-6 max-w-[560px]"
              style={{ color: "var(--text-p-1)" }}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {project.websiteUrl && (
                <Link
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
                  style={{
                    background: "var(--portfolio-accent)",
                    color: "oklch(0.18 0.02 252)",
                    boxShadow:
                      "0 4px 16px var(--portfolio-accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t("liveDemo")}
                </Link>
              )}
              {project.repositoryUrl && (
                <Link
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all border hover:-translate-y-px"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--portfolio-line-2)",
                    color: "var(--text-p-0)",
                  }}
                >
                  <Github className="w-3.5 h-3.5" />
                  {t("sourceCode")}
                </Link>
              )}
            </div>
          </div>

          {/* Right - sticky sidebar */}
          <aside
            className="rounded-[16px] p-6"
            style={{
              position: "sticky",
              top: "88px",
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
            }}
          >
            {project.year && (
              <SidebarRow label={t("detailYear")} value={project.year} />
            )}
            {project.role && (
              <SidebarRow label={t("detailRole")} value={project.role} />
            )}
            {project.timeline && (
              <SidebarRow
                label={t("detailTimeline")}
                value={project.timeline}
              />
            )}
            {project.lighthouseScore && (
              <SidebarRow
                label={t("detailLighthouse")}
                value={
                  <span
                    className="font-mono"
                    style={{
                      color: "var(--portfolio-ok, oklch(0.74 0.16 145))",
                    }}
                  >
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
              </div>
            )}
          </aside>
        </section>

        {/* ── Hero screenshot ── */}
        <div
          className="mb-15 rounded-[16px] overflow-hidden relative"
          style={{
            aspectRatio: "16/8",
            border: "1px solid var(--portfolio-line-2)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          }}
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <BrowserMockup url={project.websiteUrl ?? "nitroc.xyz"} />
          )}
        </div>

        {/* ── Context ── */}
        {(longDescription ?? description) && (
          <Section eyebrow={t("contextEyebrow")} title={t("contextTitle")}>
            <p
              className="leading-[1.7] mb-6 max-w-[720px]"
              style={{ fontSize: "16px", color: "var(--text-p-1)" }}
            >
              {longDescription ?? description}
            </p>
            {project.highlights && project.highlights.length >= 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                <Pillar
                  label={t("problemLabel")}
                  value={project.highlights[0]}
                />
                <Pillar label={t("goalLabel")} value={project.highlights[1]} />
              </div>
            )}
          </Section>
        )}

        {/* ── My role ── */}
        {project.role && (
          <Section eyebrow={t("roleEyebrow")} title={t("roleTitle")}>
            <p
              className="leading-[1.7] mb-4 max-w-[720px]"
              style={{ fontSize: "16px", color: "var(--text-p-1)" }}
            >
              {project.role}
            </p>
            {project.highlights && project.highlights.length > 2 && (
              <ul
                className="space-y-2 mt-4 pl-5"
                style={{ listStyleType: "disc" }}
              >
                {project.highlights.slice(2).map((h) => (
                  <li
                    key={h}
                    className="text-[16px] leading-[1.7]"
                    style={{ color: "var(--text-p-1)" }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </Section>
        )}

        {/* ── Stack & why ── */}
        {stackItems.length > 0 && (
          <Section eyebrow={t("buildEyebrow")} title={t("buildTitle")}>
            <p
              className="leading-[1.7] mb-6 max-w-[720px]"
              style={{ fontSize: "16px", color: "var(--text-p-1)" }}
            >
              {t("buildIntro")}
            </p>
            <div className="flex flex-col gap-3">
              {stackItems.map((item) => {
                const reason =
                  (locale === "fr" ? item.reasonFr : item.reasonEn) || null;
                return (
                  <div
                    key={item.name}
                    className="grid gap-6 px-6 py-5 rounded-xl"
                    style={{
                      gridTemplateColumns: "200px 1fr",
                      background: "var(--navy-1)",
                      border: "1px solid var(--portfolio-line)",
                    }}
                  >
                    <div>
                      <p
                        className="font-semibold text-base"
                        style={{ color: "var(--text-p-0)" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="font-mono text-[11px] uppercase tracking-[0.08em] mt-1"
                        style={{ color: "var(--text-p-3)" }}
                      >
                        {t("techLabel")}
                      </p>
                    </div>
                    {reason && (
                      <p
                        className="text-sm leading-[1.6] self-center"
                        style={{ color: "var(--text-p-1)" }}
                      >
                        {reason}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* ── Lighthouse ── */}
        {lhScores.length > 0 && (
          <Section eyebrow={t("perfEyebrow")} title={t("perfTitle")}>
            <div
              className="grid gap-4 mt-2"
              style={{
                gridTemplateColumns: `repeat(${Math.min(lhScores.length, 4)}, 1fr)`,
              }}
            >
              {lhScores.slice(0, 4).map((score, i) => (
                <LighthouseCard
                  key={lhLabels[i] ?? i}
                  score={score}
                  label={lhLabels[i] ?? ""}
                />
              ))}
            </div>
          </Section>
        )}

        {/* ── Case study content (Markdown) ── */}
        {content && (
          <Section eyebrow={t("caseStudyEyebrow")} title={t("caseStudyTitle")}>
            <MarkdownContent content={content} />
          </Section>
        )}

        {/* ── Key features (if no content, show highlights as feature cards) ── */}
        {!content && project.highlights && project.highlights.length > 0 && (
          <Section eyebrow={t("featuresEyebrow")} title={t("featuresTitle")}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.highlights.map((item, i) => (
                <div
                  key={item}
                  className="rounded-[16px] overflow-hidden"
                  style={{
                    background: "var(--navy-1)",
                    border: "1px solid var(--portfolio-line)",
                  }}
                >
                  <div
                    className="aspect-video border-b"
                    style={{
                      borderColor: "var(--portfolio-line)",
                      background: "var(--navy-2)",
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(255,255,255,0.02) 14px, rgba(255,255,255,0.02) 28px)",
                    }}
                  />
                  <div className="px-6 py-5">
                    <span
                      className="block font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5"
                      style={{ color: "var(--portfolio-accent)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-p-1)" }}
                    >
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ── Next project ── */}
        {nextRaw ? (
          <Link
            href={`/${locale}/projects/${nextRaw.id}`}
            className="block mb-20 mt-10 px-10 py-10 rounded-[16px] transition-all group"
            style={{
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2"
                  style={{ color: "var(--text-p-3)" }}
                >
                  {t("nextProjectLabel")} →
                </p>
                <h3
                  className="text-3xl font-semibold tracking-tight"
                  style={{ color: "var(--text-p-0)" }}
                >
                  {tr(nextRaw, "name") ?? nextRaw.nameEn}
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {tr(nextRaw, "description") ?? nextRaw.descriptionEn}
                </p>
              </div>
              <span
                className="text-3xl shrink-0 transition-transform group-hover:translate-x-2"
                style={{ color: "var(--portfolio-accent)" }}
              >
                →
              </span>
            </div>
          </Link>
        ) : (
          <div className="mb-20 mt-10">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: "var(--text-p-2)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backToHome")}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
