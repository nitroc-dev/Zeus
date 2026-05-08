import { getLocale, getTranslations } from "next-intl/server";
import { ProjectsList } from "./projects-list";

export async function Projects() {
  const t = await getTranslations("projects");
  const locale = await getLocale();

  return (
    <section
      id="projects"
      className="px-6 py-[60px] w-full max-w-[1180px] mx-auto"
    >
      {/* Section header */}
      <div className="flex justify-between items-end mb-8 gap-6">
        <div>
          <div
            className="flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] uppercase mb-3.5"
            style={{ color: "var(--portfolio-accent)" }}
          >
            <span
              className="w-6 h-px"
              style={{ background: "var(--portfolio-accent)" }}
            />
            {t("badge")}
          </div>
          <h2
            className="text-[clamp(28px,3vw,36px)] font-semibold tracking-tight mb-2"
            style={{ color: "var(--text-p-0)" }}
          >
            {t("title")}
          </h2>
          <p
            className="text-sm leading-relaxed max-w-[520px] m-0"
            style={{ color: "var(--text-p-2)" }}
          >
            {t("description")}
          </p>
        </div>
      </div>

      <ProjectsList locale={locale} featuredOnly />
    </section>
  );
}
