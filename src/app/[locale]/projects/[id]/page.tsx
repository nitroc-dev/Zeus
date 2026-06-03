import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BrowserMockup } from "@/components/project-detail/browser-mockup";
import { LighthouseCard } from "@/components/project-detail/lighthouse-card";
import { MarkdownContent } from "@/components/project-detail/markdown-content";
import { Pillar } from "@/components/project-detail/pillar";
import { ProjectFeatures } from "@/components/project-detail/project-features";
import { ProjectHero } from "@/components/project-detail/project-hero";
import { ProjectNextNav } from "@/components/project-detail/project-next-nav";
import { ProjectStack } from "@/components/project-detail/project-stack";
import { Section } from "@/components/project-detail/section";
import { getProjectById, getProjectIds, getProjectsData } from "@/lib/data";
import { buildAlternates, siteUrl } from "@/lib/seo";
import { createTranslator } from "@/utils/translate";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

const STATUS_COLORS: Record<string, string> = {
  live: "var(--portfolio-ok, oklch(0.74 0.16 145))",
  in_progress: "oklch(0.78 0.16 75)",
  archived: "var(--text-p-3)",
};

const lhLabels = ["Performance", "Accessibility", "Best practices", "SEO"];

export async function generateStaticParams() {
  const ids = await getProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const project = await getProjectById(id);
  if (!project) return {};
  const tr = createTranslator(locale);
  const name = tr(project, "name") ?? project.nameEn;
  const description = tr(project, "description") ?? project.descriptionEn;
  const title = project.seoTitle ?? `${name} - Corentin`;
  const desc = project.seoDescription ?? description;
  const images = project.imageUrl
    ? [{ url: project.imageUrl.startsWith("http") ? project.imageUrl : `https://nitroc.xyz${project.imageUrl}`, width: 1200, height: 630 }]
    : [{ url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 }];
  return {
    title,
    description: desc,
    alternates: buildAlternates(locale, `/projects/${id}`),
    openGraph: { title, description: desc, url: siteUrl(locale, `/projects/${id}`), images },
    robots: project.status === "in_progress" ? { index: false, follow: false } : undefined,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const [{ locale, id }, t] = await Promise.all([params, getTranslations("projects")]);
  // react-doctor-disable-next-line react-doctor/server-sequential-independent-await
  const [project, allProjects] = await Promise.all([getProjectById(id), getProjectsData()]);

  if (!project) notFound();

  const tr = createTranslator(locale);
  const name = tr(project, "name") ?? project.nameEn;
  const description = tr(project, "description") ?? project.descriptionEn;
  const longDescription = tr(project, "longDescription") ?? project.longDescriptionEn;
  const content = tr(project, "content");

  const statusColor = project.status ? STATUS_COLORS[project.status] : null;
  const statusLabels: Record<string, string> = {
    live: t("statusLive"),
    in_progress: t("statusInProgress"),
    archived: t("statusArchived"),
  };
  const statusLabel = project.status ? statusLabels[project.status] : null;

  const lhScores = project.lighthouseScore
    ? project.lighthouseScore.split(/[·|·]/).map((s) => parseInt(s.trim(), 10)).filter((n) => !Number.isNaN(n))
    : [];

  const featured = allProjects.filter((p) => p.isFeatured);
  const currentIdx = featured.findIndex((p) => p.id === id);
  const nextRaw = featured.length > 1 ? featured[(currentIdx + 1) % featured.length] : null;

  const stackItems = project.techStack ?? project.tags?.map((n) => ({ name: n, reasonEn: "", reasonFr: "" })) ?? [];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: project.websiteUrl ?? siteUrl("en", `/projects/${id}`),
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    ...(project.year && { dateCreated: project.year }),
    ...(project.tags && project.tags.length > 0 && { keywords: project.tags.join(", ") }),
    author: { "@type": "Person", name: "Corentin", url: "https://nitroc.xyz" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD
        // react-doctor-disable-next-line react-doctor/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <main className="relative overflow-hidden page-bg">
        <div className="px-8 max-w-[1180px] mx-auto">
          <div className="pt-6 pb-0 font-mono text-xs" style={{ color: "var(--text-p-3)" }}>
            <Link href="/" className="transition-colors hover:opacity-80" style={{ color: "var(--text-p-2)" }}>
              ← {t("breadcrumbHome")}
            </Link>
            <span className="mx-2">/</span>
            <span>{name}</span>
          </div>

          <ProjectHero project={project} name={name} description={description} statusColor={statusColor} statusLabel={statusLabel} locale={locale} t={t} />

          <div
            className="mb-15 rounded-[16px] overflow-hidden relative"
            style={{ aspectRatio: "16/8", border: "1px solid var(--portfolio-line-2)", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}
          >
            {project.imageUrl ? (
              <Image src={project.imageUrl} alt={name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
            ) : (
              <BrowserMockup url={project.websiteUrl ?? "nitroc.xyz"} />
            )}
          </div>

          {(longDescription ?? description) && (
            <Section eyebrow={t("contextEyebrow")} title={t("contextTitle")}>
              <p className="leading-[1.7] mb-6 max-w-[720px]" style={{ fontSize: "16px", color: "var(--text-p-1)" }}>
                {longDescription ?? description}
              </p>
              {project.highlights && project.highlights.length >= 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                  <Pillar label={t("problemLabel")} value={project.highlights[0]} />
                  <Pillar label={t("goalLabel")} value={project.highlights[1]} />
                </div>
              )}
            </Section>
          )}

          {project.role && (
            <Section eyebrow={t("roleEyebrow")} title={t("roleTitle")}>
              <p className="leading-[1.7] mb-4 max-w-[720px]" style={{ fontSize: "16px", color: "var(--text-p-1)" }}>
                {project.role}
              </p>
              {project.highlights && project.highlights.length > 2 && (
                <ul className="space-y-2 mt-4 pl-5" style={{ listStyleType: "disc" }}>
                  {project.highlights.slice(2).map((h) => (
                    <li key={h} className="text-[16px] leading-[1.7]" style={{ color: "var(--text-p-1)" }}>{h}</li>
                  ))}
                </ul>
              )}
            </Section>
          )}

          <ProjectStack stackItems={stackItems} locale={locale} t={t} />

          {lhScores.length > 0 && (
            <Section eyebrow={t("perfEyebrow")} title={t("perfTitle")}>
              <div className="grid gap-4 mt-2" style={{ gridTemplateColumns: `repeat(${Math.min(lhScores.length, 4)}, 1fr)` }}>
                {lhScores.slice(0, 4).map((score, i) => (
                  <LighthouseCard key={lhLabels[i] ?? i} score={score} label={lhLabels[i] ?? ""} />
                ))}
              </div>
            </Section>
          )}

          {content && (
            <Section eyebrow={t("caseStudyEyebrow")} title={t("caseStudyTitle")}>
              <MarkdownContent content={content} />
            </Section>
          )}

          {!content && project.highlights && project.highlights.length > 0 && (
            <ProjectFeatures highlights={project.highlights} t={t} />
          )}

          <ProjectNextNav nextRaw={nextRaw} tr={tr} t={t} />
        </div>
      </main>
    </>
  );
}
