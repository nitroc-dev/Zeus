import { Github } from "lucide-react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import ProjectCard from "@/components/cards/project";
import { Button } from "@/components/ui/button";
import { getLocalizedProjects } from "@/data/hardcoded-data";

export async function Projects() {
  const t = await getTranslations("projects");
  const locale = await getLocale();
  const projects = getLocalizedProjects(await getTranslations("projectsData"));
  const featured = projects.filter((p) => p.isFeatured);

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              {t("description")}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:flex shrink-0 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Link href={`/${locale}/projects`}>{t("viewAll")}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:hidden">
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Link href={`/${locale}/projects`}>{t("viewAll")}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Link href="https://github.com/nitroc-dev" target="_blank">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
