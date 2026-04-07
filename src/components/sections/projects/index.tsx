import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/github";
import { ProjectsGrid } from "./projects-grid";

export async function Projects() {
  const t = await getTranslations("projects");
  const locale = await getLocale();

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

        <ProjectsGrid locale={locale} featuredOnly />

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
              <GithubIcon className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
