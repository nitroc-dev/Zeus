import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExperienceList } from "@/components/about/experience-list";
import { ProfileHero } from "@/components/about/profile-hero";
import { getExperiencesData, getSkillsData } from "@/lib/data";
import { buildAlternates, siteUrl } from "@/lib/seo";
import { createTranslator } from "@/utils/translate";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const [{ locale }, t] = await Promise.all([params, getTranslations("about")]);
  const title = `${t("name")} - ${t("role")}`;
  return {
    title,
    description: t("bio"),
    alternates: buildAlternates(locale, "/about"),
    openGraph: {
      title,
      description: t("bio"),
      url: siteUrl(locale, "/about"),
      images: [
        { url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 },
      ],
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const [{ locale }, t, experiences, skillCategories] = await Promise.all([
    params,
    getTranslations("about"),
    getExperiencesData(),
    getSkillsData(),
  ]);
  const tr = createTranslator(locale);

  const sortedExperiences = experiences.toSorted(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  const languages = [
    { lang: t("french"), level: t("frenchLevel") },
    { lang: t("english"), level: t("englishLevel") },
    { lang: t("dutch"), level: t("dutchLevel") },
  ];

  const sectionCls = "grid grid-cols-1 gap-y-4 py-8 border-t";
  const sectionStyle = { borderColor: "var(--portfolio-line)" };
  const labelCls =
    "text-[length:var(--fs-4)] font-semibold tracking-[var(--tracking-title)] m-0";

  return (
    <main className="relative overflow-hidden page-bg">
      <div className="px-6 max-w-[680px] mx-auto pb-20">
        <ProfileHero
          name={t("name")}
          role={t("roleLine")}
          locale={locale}
          contactLabel={t("contactMe")}
        />

        <section className="pb-8">
          <p
            className="text-[length:var(--fs-4)] leading-[1.65] mt-0 mb-4"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("bio")}
          </p>
          <p
            className="text-[length:var(--fs-4)] leading-[1.65] m-0"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("bio2")}
          </p>
        </section>

        <section className={sectionCls} style={sectionStyle}>
          <h2 className={labelCls} style={{ color: "var(--text-p-0)" }}>
            {t("experienceTitle")}
          </h2>
          <ExperienceList
            experiences={sortedExperiences}
            locale={locale}
            presentLabel={t("present")}
          />
        </section>

        {skillCategories.length > 0 && (
          <section className={sectionCls} style={sectionStyle}>
            <h2 className={labelCls} style={{ color: "var(--text-p-0)" }}>
              {t("skillsTitle")}
            </h2>
            <dl className="m-0 space-y-3">
              {skillCategories.map((category) => (
                <div
                  key={category.id}
                  className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6"
                >
                  <dt
                    className="text-[length:var(--fs-2)] pt-0.5"
                    style={{ color: "var(--text-p-2)" }}
                  >
                    {tr(category, "label") ?? category.labelEn}
                  </dt>
                  <dd
                    className="m-0 text-[length:var(--fs-3)]"
                    style={{ color: "var(--text-p-1)" }}
                  >
                    {category.technologies.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className={sectionCls} style={sectionStyle}>
          <h2 className={labelCls} style={{ color: "var(--text-p-0)" }}>
            {t("languagesTitle")}
          </h2>
          <dl className="m-0 space-y-3">
            {languages.map(({ lang, level }) => (
              <div
                key={lang}
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6"
              >
                <dt
                  className="text-[length:var(--fs-3)]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {lang}
                </dt>
                <dd
                  className="m-0 text-[length:var(--fs-2)] pt-0.5"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {level}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  );
}
