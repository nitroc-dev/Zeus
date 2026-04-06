import { getTranslations } from "next-intl/server";
import { ExperienceCard } from "@/components/cards/experience";
import { getLocalizedExperiences } from "@/data/hardcoded-data";

export async function Experience() {
  const t = await getTranslations("experience");
  const experiences = getLocalizedExperiences(
    await getTranslations("experiencesData"),
  );

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-600" />

          <div className="space-y-8">
            {experiences
              ?.sort(
                (a, b) =>
                  new Date(b.startDate).getTime() -
                  new Date(a.startDate).getTime(),
              )
              ?.map((exp) => (
                <div key={exp.id} className="relative pl-14">
                  <div className="absolute left-5 top-6 z-10 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-gray-950 -translate-x-1/2" />
                  <ExperienceCard experience={exp} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
