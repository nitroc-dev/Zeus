import { getLocale, getTranslations } from "next-intl/server";
import { ProjectsList } from "./projects-list";

export async function Projects() {
  const [t, locale] = await Promise.all([
    getTranslations("projects"),
    getLocale(),
  ]);

  return (
    <section id="projects" className="px-6 py-10 w-full max-w-[680px] mx-auto">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h2
          className="m-0 text-[length:var(--fs-5)] font-semibold tracking-[var(--tracking-title)]"
          style={{ color: "var(--text-1)" }}
        >
          {t("title")}
        </h2>
        <p
          className="m-0 text-[length:var(--fs-2)]"
          style={{ color: "var(--text-3)" }}
        >
          {t("namingNote")}
        </p>
      </div>

      <ProjectsList locale={locale} featuredOnly />
    </section>
  );
}
