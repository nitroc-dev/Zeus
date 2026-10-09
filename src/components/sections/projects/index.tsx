import { getLocale, getTranslations } from "next-intl/server";
import { ProjectsList } from "./projects-list";

export async function Projects() {
  const [t, locale] = await Promise.all([
    getTranslations("projects"),
    getLocale(),
  ]);

  return (
    <section id="projects" className="px-6 py-16 w-full max-w-[1180px] mx-auto">
      <h2
        className="text-[length:var(--fs-5)] font-semibold tracking-[var(--tracking-title)] mb-6"
        style={{ color: "var(--text-p-0)" }}
      >
        {t("title")}
      </h2>

      <ProjectsList locale={locale} featuredOnly />
    </section>
  );
}
