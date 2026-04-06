import { ArrowLeft, CheckCircle2, ExternalLink, Github, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { getLocalizedProjects } from "@/data/hardcoded-data";

const DEVICON_MAP: Record<string, string> = {
  HTML5: "devicon-html5-plain colored",
  CSS3: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  C: "devicon-c-plain colored",
  "C#": "devicon-csharp-plain colored",
  Java: "devicon-java-plain colored",
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-plain",
  NestJS: "devicon-nestjs-plain colored",
  ".NET": "devicon-dot-net-plain colored",
  "Express.js": "devicon-express-original",
  "Spring Boot": "devicon-spring-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",
  "next-intl": "devicon-nextjs-plain",
  MySQL: "devicon-mysql-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  Docker: "devicon-docker-plain colored",
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  "GitHub Actions": "devicon-githubactions-plain colored",
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  live: { label: "Live", color: "text-green-400 bg-green-400/10 border-green-400/30" },
  "in-progress": { label: "In Progress", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" },
  archived: { label: "Archived", color: "text-gray-400 bg-gray-400/10 border-gray-400/30" },
};

export function generateStaticParams() {
  const locales = ["en", "fr"];
  const projectIds = ["zeus", "placeholder-1", "placeholder-2"];
  return locales.flatMap((locale) =>
    projectIds.map((id) => ({ locale, id })),
  );
}

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const locale = await getLocale();
  const t = await getTranslations("projects");
  const projects = getLocalizedProjects(await getTranslations("projectsData"));
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const status = project.status ? STATUS_LABELS[project.status] : null;

  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

      <section className="relative px-6 py-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">

          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToProjects")}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* ── Main content ── */}
            <div className="space-y-10 min-w-0">

              {/* Title + buttons */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white">
                    {project.name}
                  </h1>
                  {status && (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.color}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {status.label}
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Screenshot */}
              {project.imageUrl ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-700/50">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-blue-900/20 via-gray-800/40 to-purple-900/20 border border-gray-700/50 flex items-center justify-center">
                  <span className="text-8xl font-black text-white/5 select-none uppercase">
                    {project.name.slice(0, 2)}
                  </span>
                </div>
              )}

              {/* Long description */}
              {(project.longDescription ?? project.description) && (
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">{t("detailAbout")}</h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {project.longDescription ?? project.description}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">{t("detailHighlights")}</h2>
                  <ul className="space-y-2.5">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-6">

              {/* Links */}
              <div className="space-y-2">
                {project.websiteUrl && (
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.repositoryUrl && (
                  <Button asChild variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                    <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>

              {/* Meta */}
              <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 divide-y divide-gray-700/50">
                {project.year && (
                  <div className="px-4 py-3">
                    <p className="text-xs text-gray-500 mb-0.5">{t("detailYear")}</p>
                    <p className="text-sm text-gray-200">{project.year}</p>
                  </div>
                )}
                {project.role && (
                  <div className="px-4 py-3">
                    <p className="text-xs text-gray-500 mb-0.5">{t("detailRole")}</p>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <p className="text-sm text-gray-200">{project.role}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tech stack */}
              {project.tags && project.tags.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t("detailStack")}</p>
                  <div className="flex flex-col gap-1.5">
                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700/40"
                      >
                        {DEVICON_MAP[tag] && (
                          <i className={`${DEVICON_MAP[tag]} text-base shrink-0`} />
                        )}
                        <span className="text-sm text-gray-300">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </aside>
          </div>

        </div>
      </section>
    </main>
  );
}
