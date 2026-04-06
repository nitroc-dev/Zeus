"use client";

import { Github, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import ProjectCard from "@/components/cards/project";
import { Button } from "@/components/ui/button";
import { getLocalizedProjects } from "@/data/hardcoded-data";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tData = useTranslations("projectsData");
  const locale = useLocale();
  const projects = getLocalizedProjects(tData);

  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />

      <section className="relative min-h-[95vh] px-6 py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("pageTitle.my")}{" "}
              <span className="text-blue-600">{t("pageTitle.projects")}</span>
            </h1>
            <p className="text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {t("pageDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} locale={locale} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">{t("callToAction")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href={`/${locale}/contact`}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t("getInTouched")}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link href="https://github.com/nitroc-dev" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  {t("viewGithub")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
