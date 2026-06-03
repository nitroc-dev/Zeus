import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildAlternates, siteUrl } from "@/lib/seo";
import { ExperienceList } from "@/components/about/experience-list";
import { ProfileHero } from "@/components/about/profile-hero";
import { SectionTitle } from "@/components/ui/section-title";
import { TechIcon } from "@/components/ui/tech-icon";
import { getExperiencesData, getSkillsData } from "@/lib/data";
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

  const languageCards = [
    { lang: t("french"), level: t("frenchLevel"), flag: "🇫🇷" },
    { lang: t("english"), level: t("englishLevel"), flag: "🇬🇧" },
    { lang: t("dutch"), level: t("dutchLevel"), flag: "🇳🇱" },
  ];

  return (
    <main className="relative overflow-hidden page-bg">
      <div className="px-8 max-w-[1180px] mx-auto">
        {/* Profile: photo, name, role, social links */}
        <ProfileHero
          name={t("name")}
          role={t("role")}
          locale={locale}
          contactLabel={t("contactMe")}
        />

        {/* Bio */}
        <section
          className="py-8 border-t"
          style={{ borderColor: "var(--portfolio-line)" }}
        >
          <SectionTitle>{t("bioTitle")}</SectionTitle>
          <p
            className="text-base leading-relaxed max-w-[760px]"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("bio")}
          </p>
          <p
            className="text-base leading-relaxed max-w-[760px] mt-4"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("bio2")}
          </p>
        </section>

        {/* Currently learning */}
        <section
          className="py-8 border-t"
          style={{ borderColor: "var(--portfolio-line)" }}
        >
          <SectionTitle>{t("learningTitle")}</SectionTitle>
          <div
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl max-w-[600px]"
            style={{
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
            }}
          >
            <span
              className="size-7 rounded-lg grid place-items-center shrink-0 text-base"
              style={{
                background: "var(--portfolio-accent-soft)",
                color: "var(--portfolio-accent)",
              }}
            >
              📱
            </span>
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-p-0)" }}
              >
                {t("learningTech")}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--text-p-2)" }}
              >
                {t("learningDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section
          className="py-8 border-t"
          style={{ borderColor: "var(--portfolio-line)" }}
        >
          <SectionTitle>{t("languagesTitle")}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[700px]">
            {languageCards.map(({ lang, level, flag }) => (
              <div
                key={lang}
                className="flex items-center justify-between px-5 py-4 rounded-xl"
                style={{
                  background: "var(--navy-1)",
                  border: "1px solid var(--portfolio-line)",
                }}
              >
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-p-0)" }}
                  >
                    {lang}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-p-2)" }}>
                    {level}
                  </p>
                </div>
                <span className="text-3xl">{flag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        {skillCategories.length > 0 && (
          <section
            className="py-8 border-t"
            style={{ borderColor: "var(--portfolio-line)" }}
          >
            <SectionTitle>{t("skillsTitle")}</SectionTitle>
            <div className="space-y-5">
              {skillCategories.map((category) => (
                <div key={category.id}>
                  <h4
                    className="font-mono text-[11px] uppercase tracking-[0.1em] font-medium mb-3"
                    style={{ color: "var(--text-p-3)" }}
                  >
                    {tr(category, "label") ?? category.labelEn}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs"
                        style={{
                          background: "var(--navy-2)",
                          border: "1px solid var(--portfolio-line)",
                          color: "var(--text-p-1)",
                        }}
                      >
                        <TechIcon name={tech} size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        <section
          className="py-8 border-t"
          style={{ borderColor: "var(--portfolio-line)" }}
        >
          <SectionTitle>{t("experienceTitle")}</SectionTitle>
          <ExperienceList
            experiences={sortedExperiences}
            locale={locale}
            presentLabel={t("present")}
          />
        </section>

        <div className="pb-20" />
      </div>
    </main>
  );
}
