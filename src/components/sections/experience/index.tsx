"use client";
import { getLocalizedExperiences } from "@/data/hardcoded-data";
import { ExperienceCard } from "@/components/cards/experience";
import { useTranslations } from "next-intl";

export function Experience() {
  const t = useTranslations("experience");
  const experiences = getLocalizedExperiences(useTranslations("experiencesData"));

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

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-600"></div>

          <div className="space-y-16">
            {experiences
              ?.sort(
                (a, b) =>
                  new Date(b.startDate).getTime() -
                  new Date(a.startDate).getTime(),
              )
              ?.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={exp.id} className="relative">
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 border-4 border-gray-900 shadow-lg"></div>

                    <div className="md:hidden pl-12">
                      <ExperienceCard experience={exp} />
                    </div>

                    <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                      {isLeft ? (
                        <>
                          <div className="pr-4">
                            <ExperienceCard experience={exp} />
                          </div>
                          <div></div>
                        </>
                      ) : (
                        <>
                          <div></div>
                          <div className="pl-4">
                            <ExperienceCard experience={exp} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
