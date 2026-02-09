"use client";
import { getLocalizedSkills } from "@/data/hardcoded-data";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("skills");
  const skills = getLocalizedSkills(useTranslations("skillCategories"));

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((skillCategory, index) => (
            <div key={skillCategory.id} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    index === 0
                      ? "bg-blue-500/20 text-blue-400"
                      : index === 1
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {skillCategory.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {skillCategory.label}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {skillCategory.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 hover:-translate-y-1 ${
                      index === 0
                        ? "bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50"
                        : index === 1
                          ? "bg-green-500/10 text-green-300 border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50"
                          : "bg-orange-500/10 text-orange-300 border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-400/50"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
