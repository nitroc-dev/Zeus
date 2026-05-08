import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { projectsControllerFindAllV1, projectsControllerFindOneV1 } from "@/api/generated/projects/projects";
import type { ProjectDto } from "@/api/generated/nestJSAPI.schemas";

const STATUS_STYLES: Record<string, { label: string; bg: string; border: string; color: string }> = {
  live: {
    label: "Live",
    bg: "color-mix(in oklch, var(--portfolio-ok) 12%, transparent)",
    border: "color-mix(in oklch, var(--portfolio-ok) 35%, transparent)",
    color: "var(--portfolio-ok)",
  },
  in_progress: {
    label: "In Progress",
    bg: "color-mix(in oklch, oklch(0.8 0.16 80) 12%, transparent)",
    border: "color-mix(in oklch, oklch(0.8 0.16 80) 35%, transparent)",
    color: "oklch(0.8 0.16 80)",
  },
  archived: {
    label: "Archived",
    bg: "color-mix(in oklch, var(--text-p-3) 12%, transparent)",
    border: "color-mix(in oklch, var(--text-p-3) 35%, transparent)",
    color: "var(--text-p-3)",
  },
};

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

async function fetchProject(id: string): Promise<ProjectDto | null> {
  try {
    const response = await projectsControllerFindOneV1(id);
    return (response as any)?.data as ProjectDto ?? null;
  } catch {
    return null;
  }
}

async function fetchAllProjects(): Promise<ProjectDto[]> {
  try {
    const response = await projectsControllerFindAllV1();
    return ((response as any)?.data as ProjectDto[]) ?? [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const project = await fetchProject(id);
  if (!project) return {};
  const name = locale === "fr" ? project.nameFr : project.nameEn;
  const description = locale === "fr" ? project.descriptionFr : project.descriptionEn;
  const imageUrl = project.imageUrl as string | undefined;
  const title = `${name} — Corentin`;
  const images = imageUrl
    ? [{ url: `https://nitroc.xyz${imageUrl}`, width: 1200, height: 630 }]
    : [{ url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 }];
  return {
    title,
    description,
    alternates: {
      canonical: `https://nitroc.xyz/en/projects/${id}`,
      languages: { en: `https://nitroc.xyz/en/projects/${id}`, fr: `https://nitroc.xyz/fr/projects/${id}` },
    },
    openGraph: { title, description, url: `https://nitroc.xyz/projects/${id}`, images },
    robots: project.status === "in_progress" ? { index: false, follow: false } : undefined,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, id } = await params;
  const t = await getTranslations("projects");
  const [project, allProjects] = await Promise.all([fetchProject(id), fetchAllProjects()]);

  if (!project) notFound();

  const name = locale === "fr" ? project.nameFr : project.nameEn;
  const description = locale === "fr" ? project.descriptionFr : project.descriptionEn;
  const longDescription = locale === "fr"
    ? (project.longDescriptionFr as string | undefined)
    : (project.longDescriptionEn as string | undefined);
  const imageUrl = project.imageUrl as string | undefined;
  const repositoryUrl = project.repositoryUrl as string | undefined;
  const websiteUrl = project.websiteUrl as string | undefined;
  const year = project.year as string | undefined;
  const role = project.role as string | undefined;
  const statusStyle = project.status ? STATUS_STYLES[project.status] : null;

  // Next project (next featured project, wrapping around)
  const featured = allProjects.filter((p) => p.isFeatured);
  const currentIdx = featured.findIndex((p) => p.projectId === id);
  const nextProject = featured.length > 1
    ? featured[(currentIdx + 1) % featured.length]
    : null;

  return (
    <main
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 600px at 80% -10%, color-mix(in oklch, var(--portfolio-accent) 8%, transparent), transparent 60%), radial-gradient(900px 500px at -10% 120%, color-mix(in oklch, var(--portfolio-accent) 6%, transparent), transparent 60%), var(--navy-0)",
      }}
    >
      <div className="px-8 max-w-[1180px] mx-auto">

        {/* Breadcrumb */}
        <div className="pt-6 pb-0 font-mono text-xs" style={{ color: "var(--text-p-3)" }}>
          <Link
            href={`/${locale}`}
            className="transition-colors hover:opacity-80"
            style={{ color: "var(--text-p-2)" }}
          >
            ← Home
          </Link>
          <span className="mx-2">/</span>
          <span>{name}</span>
        </div>

        {/* Hero grid: content left + sticky sidebar right */}
        <section className="pt-8 pb-12 grid gap-15 items-start" style={{ gridTemplateColumns: "1.4fr 1fr" }}>

          {/* Left: title + actions */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              {statusStyle && (
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{ background: statusStyle.bg, border: `1px solid ${statusStyle.border}`, color: statusStyle.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {statusStyle.label}
                </span>
              )}
              {year && (
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line)", color: "var(--text-p-1)" }}
                >
                  {year}
                </span>
              )}
              {role && (
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line)", color: "var(--text-p-1)" }}
                >
                  {role}
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
              {websiteUrl && (
                <Link
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
                  style={{
                    background: "var(--portfolio-accent)",
                    color: "oklch(0.18 0.02 252)",
                    boxShadow: "0 4px 16px var(--portfolio-accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live demo
                </Link>
              )}
              {repositoryUrl && (
                <Link
                  href={repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
                  style={{ color: "var(--text-p-0)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.6 18.4.5 12 .5z" />
                  </svg>
                  Source code
                </Link>
              )}
            </div>
          </div>

          {/* Right: sticky sidebar */}
          <aside
            className="rounded-[16px] p-6"
            style={{
              position: "sticky",
              top: "88px",
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
            }}
          >
            {[
              year && { label: "Year", value: year, extra: null },
              role && { label: "Role", value: role, extra: null },
              project.status && statusStyle && {
                label: "Status",
                value: <span style={{ color: statusStyle.color }}>{statusStyle.label}</span>,
                extra: null,
              },
            ]
              .filter(Boolean)
              .map((row: any) => (
                <div
                  key={row.label}
                  className="py-3 border-b"
                  style={{ borderColor: "var(--portfolio-line)" }}
                >
                  <h5
                    className="font-mono text-[10px] uppercase tracking-[0.1em] font-medium mb-1.5"
                    style={{ color: "var(--text-p-3)" }}
                  >
                    {row.label}
                  </h5>
                  <div className="text-sm" style={{ color: "var(--text-p-0)" }}>
                    {row.value}
                  </div>
                </div>
              ))}

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

        {/* Hero screenshot */}
        <div
          className="mb-15 rounded-[16px] overflow-hidden relative"
          style={{
            aspectRatio: "16/8",
            border: "1px solid var(--portfolio-line-2)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          }}
        >
          {imageUrl ? (
            <Image src={imageUrl} alt={name} fill className="object-cover" />
          ) : (
            <div
              className="absolute inset-0 grid place-items-center"
              style={{
                background: "var(--navy-2)",
                backgroundImage: "linear-gradient(135deg, color-mix(in oklch, var(--portfolio-accent) 10%, transparent), transparent 50%), repeating-linear-gradient(45deg, transparent 0, transparent 18px, rgba(255,255,255,0.025) 18px, rgba(255,255,255,0.025) 36px)",
              }}
            >
              {/* Browser mockup */}
              <div
                className="w-[88%] h-[78%] flex flex-col rounded-[10px] overflow-hidden"
                style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line-2)" }}
              >
                <div
                  className="h-8 flex items-center gap-1.5 px-3 shrink-0"
                  style={{ background: "var(--navy-2)", borderBottom: "1px solid var(--portfolio-line)" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <div
                    className="ml-4 flex-1 h-4.5 rounded flex items-center px-2 font-mono text-[10px]"
                    style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line)", color: "var(--text-p-2)" }}
                  >
                    nitroc.xyz
                  </div>
                </div>
                <div
                  className="flex-1 p-3.5 grid gap-2"
                  style={{
                    background: "radial-gradient(400px 200px at 70% 30%, var(--portfolio-accent-soft), transparent 60%), var(--navy-1)",
                    gridTemplateRows: "auto 1fr",
                  }}
                >
                  <div className="h-4 rounded" style={{ background: "var(--navy-3)" }} />
                  <div className="grid gap-2.5" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
                    <div className="flex flex-col gap-1.5 pt-5">
                      <div className="h-4 w-[70%] rounded" style={{ background: "var(--text-p-1)" }} />
                      <div className="h-2 w-[90%] rounded" style={{ background: "var(--navy-3)" }} />
                      <div className="h-2 w-[80%] rounded" style={{ background: "var(--navy-3)" }} />
                      <div className="h-3.5 w-20 rounded mt-1.5" style={{ background: "var(--portfolio-accent)" }} />
                    </div>
                    <div className="rounded-md" style={{ background: "var(--navy-2)", border: "1px solid var(--portfolio-line)" }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* About / Context */}
        {(longDescription ?? description) && (
          <section className="py-[50px] border-t" style={{ borderColor: "var(--portfolio-line)" }}>
            <div
              className="font-mono text-xs uppercase tracking-[0.1em] mb-3.5 flex items-center gap-2.5"
              style={{ color: "var(--portfolio-accent)" }}
            >
              <span className="w-6 h-px" style={{ background: "var(--portfolio-accent)" }} />
              Context
            </div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-p-0)" }}>
              {t("detailAbout")}
            </h2>
            <p
              className="leading-[1.7] whitespace-pre-line max-w-[720px]"
              style={{ fontSize: "16px", color: "var(--text-p-1)" }}
            >
              {longDescription ?? description}
            </p>
          </section>
        )}

        {/* Highlights / Key features */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="py-[50px] border-t" style={{ borderColor: "var(--portfolio-line)" }}>
            <div
              className="font-mono text-xs uppercase tracking-[0.1em] mb-3.5 flex items-center gap-2.5"
              style={{ color: "var(--portfolio-accent)" }}
            >
              <span className="w-6 h-px" style={{ background: "var(--portfolio-accent)" }} />
              What it does
            </div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-p-0)" }}>
              {t("detailHighlights")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.highlights.map((item, i) => (
                <div
                  key={item}
                  className="rounded-[16px] overflow-hidden"
                  style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line)" }}
                >
                  <div
                    className="aspect-video border-b"
                    style={{
                      borderColor: "var(--portfolio-line)",
                      background: "var(--navy-2)",
                      backgroundImage: "repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(255,255,255,0.02) 14px, rgba(255,255,255,0.02) 28px)",
                    }}
                  />
                  <div className="px-6 py-5">
                    <span
                      className="block font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5"
                      style={{ color: "var(--portfolio-accent)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-p-1)" }}>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stack */}
        {project.tags && project.tags.length > 0 && (
          <section className="py-[50px] border-t" style={{ borderColor: "var(--portfolio-line)" }}>
            <div
              className="font-mono text-xs uppercase tracking-[0.1em] mb-3.5 flex items-center gap-2.5"
              style={{ color: "var(--portfolio-accent)" }}
            >
              <span className="w-6 h-px" style={{ background: "var(--portfolio-accent)" }} />
              The build
            </div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-p-0)" }}>
              {t("detailStack")}
            </h2>
            <div className="flex flex-col gap-3">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="grid gap-6 px-6 py-5 rounded-xl items-center"
                  style={{
                    gridTemplateColumns: "200px 1fr",
                    background: "var(--navy-1)",
                    border: "1px solid var(--portfolio-line)",
                  }}
                >
                  <div>
                    <p className="font-semibold text-base" style={{ color: "var(--text-p-0)" }}>{tag}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] mt-1" style={{ color: "var(--text-p-3)" }}>
                      Tech
                    </p>
                  </div>
                  <p className="text-sm leading-[1.6]" style={{ color: "var(--text-p-1)" }}>
                    Part of the stack for this project.
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        {nextProject ? (
          <Link
            href={`/${locale}/projects/${nextProject.projectId}`}
            className="block mb-20 mt-10 px-10 py-10 rounded-[16px] transition-all group"
            style={{
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
              textDecoration: "none",
              color: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--portfolio-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--portfolio-line)")}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: "var(--text-p-3)" }}>
                  Next project →
                </p>
                <h3 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--text-p-0)" }}>
                  {locale === "fr" ? nextProject.nameFr : nextProject.nameEn}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-p-2)" }}>
                  {locale === "fr" ? nextProject.descriptionFr : nextProject.descriptionEn}
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
              Back to home
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
