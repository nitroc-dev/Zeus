import { getTranslations } from "next-intl/server";
import { SkillsGrid } from "./skills-grid";

export async function Skills() {
  const t = await getTranslations("skills");

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

        <SkillsGrid />
      </div>
    </section>
  );
}
