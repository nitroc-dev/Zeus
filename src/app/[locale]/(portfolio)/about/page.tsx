import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import type { SkillCategoryDto } from "@/api/generated/nestJSAPI.schemas";
import { skillsControllerFindAllCategoriesV1 } from "@/api/generated/skills/skills";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { getLocalizedExperiences } from "@/data/hardcoded-data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  const title = `${t("name")} — ${t("role")}`;
  return {
    title,
    description: t("bio"),
    alternates: {
      canonical: "https://nitroc.xyz/en/about",
      languages: {
        en: "https://nitroc.xyz/en/about",
        fr: "https://nitroc.xyz/fr/about",
      },
    },
    openGraph: {
      title,
      description: t("bio"),
      url: "https://nitroc.xyz/about",
      images: [
        { url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 },
      ],
    },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl font-semibold tracking-tight mb-4"
      style={{ color: "var(--text-p-0)" }}
    >
      {children}
    </h2>
  );
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const locale = await getLocale();
  const experiences = getLocalizedExperiences(
    await getTranslations("experiencesData"),
  );
  let skillCategories: SkillCategoryDto[] = [];
  try {
    const response = await skillsControllerFindAllCategoriesV1();
    skillCategories = ((response as any)?.data as SkillCategoryDto[]) ?? [];
  } catch {
    skillCategories = [];
  }

  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  function formatWhen(exp: { startDate: string; endDate?: string }): string {
    const fmt = (d: string) =>
      new Date(d).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
        month: "short",
        year: "numeric",
      });
    const end = exp.endDate ? fmt(exp.endDate) : t("present");
    return `${fmt(exp.startDate)} — ${end}`;
  }

  return (
    <main
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 600px at 80% -10%, color-mix(in oklch, var(--portfolio-accent) 8%, transparent), transparent 60%), radial-gradient(900px 500px at -10% 120%, color-mix(in oklch, var(--portfolio-accent) 6%, transparent), transparent 60%), var(--navy-0)",
      }}
    >
      <div className="px-8 max-w-[1180px] mx-auto">
        {/* Hero */}
        <section
          className="pt-[60px] pb-10 grid gap-10 items-center"
          style={{ gridTemplateColumns: "200px 1fr" }}
        >
          <Image
            src="/profile.png"
            alt="Corentin"
            width={180}
            height={180}
            className="object-cover shrink-0"
            style={{
              borderRadius: "24px",
              boxShadow:
                "0 0 0 1px var(--portfolio-line-2), 0 20px 60px var(--portfolio-accent-glow)",
            }}
          />
          <div>
            <h1
              className="font-semibold tracking-tight mb-2"
              style={{
                fontSize: "clamp(40px, 5vw, 60px)",
                color: "var(--text-p-0)",
              }}
            >
              {t("name")}
            </h1>
            <p
              className="text-[17px] mb-4"
              style={{ color: "var(--text-p-2)" }}
            >
              {t("role")} · Brussels, Belgium 🇧🇪
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
                style={{
                  background: "var(--portfolio-accent)",
                  color: "oklch(0.18 0.02 252)",
                  boxShadow:
                    "0 4px 16px var(--portfolio-accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                {t("contactMe")}
              </Link>
              <Link
                href="https://github.com/nitroc-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
                style={{ color: "var(--text-p-0)" }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/corentin-d-02472724b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
                style={{ color: "var(--text-p-0)" }}
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* Stat badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { label: t("yearsExp"), sub: "since 2022", mono: "3+" },
            { label: t("status"), sub: "freelance · contract", mono: "●" },
            { label: t("french"), sub: t("englishLevel"), mono: "FR" },
          ].map(({ label, sub, mono }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
              style={{
                background: "var(--navy-1)",
                border: "1px solid var(--portfolio-line)",
              }}
            >
              <span
                className="w-7 h-7 rounded-lg grid place-items-center font-mono text-sm font-semibold shrink-0"
                style={{
                  background: "var(--portfolio-accent-soft)",
                  color: "var(--portfolio-accent)",
                }}
              >
                {mono}
              </span>
              <div>
                <p
                  className="text-sm font-medium leading-none"
                  style={{ color: "var(--text-p-0)" }}
                >
                  {label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* About me */}
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
            Outside of work I tinker on side projects, read about distributed
            systems, and drink too much coffee. I care about readable code, fast
            feedback loops, and shipping things that actually get used.
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
              className="w-7 h-7 rounded-lg grid place-items-center shrink-0 text-base"
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
                Expo &amp; React Native
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[600px]">
            {[
              { lang: t("french"), level: t("frenchLevel"), flag: "🇫🇷" },
              { lang: t("english"), level: t("englishLevel"), flag: "🇬🇧" },
            ].map(({ lang, level, flag }) => (
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
                <div key={category.categoryId}>
                  <h4
                    className="font-mono text-[11px] uppercase tracking-[0.1em] font-medium mb-3"
                    style={{ color: "var(--text-p-3)" }}
                  >
                    {category.label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.skillId}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs"
                        style={{
                          background: "var(--navy-2)",
                          border: "1px solid var(--portfolio-line)",
                          color: "var(--text-p-1)",
                        }}
                      >
                        {skill.icon && (
                          <i className={`${skill.icon} text-sm`} />
                        )}
                        {locale === "fr" ? skill.nameFr : skill.nameEn}
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
          <div className="flex flex-col gap-4">
            {sortedExperiences.map((exp) => (
              <div
                key={exp.id}
                className="rounded-xl px-6 py-6"
                style={{
                  background: "var(--navy-1)",
                  border: "1px solid var(--portfolio-line)",
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--text-p-0)" }}
                  >
                    {exp.name}
                    {exp.websiteUrl ? (
                      <>
                        {" · "}
                        <Link
                          href={exp.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-80 inline-flex items-center gap-1"
                          style={{ color: "var(--portfolio-accent)" }}
                        >
                          {exp.companyName}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </>
                    ) : (
                      <span style={{ color: "var(--portfolio-accent)" }}>
                        {" "}
                        · {exp.companyName}
                      </span>
                    )}
                  </h3>
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "var(--text-p-3)" }}
                  >
                    {formatWhen(exp)}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick timeline */}
        <section
          className="py-8 border-t"
          style={{ borderColor: "var(--portfolio-line)" }}
        >
          <SectionTitle>Quick timeline</SectionTitle>
          <div className="flex flex-col">
            {[
              {
                year: "2026",
                text: (
                  <>
                    Shipped{" "}
                    <strong style={{ color: "var(--text-p-0)" }}>Zeus</strong> ·
                    this very portfolio · learning React Native
                  </>
                ),
              },
              {
                year: "2024",
                text: (
                  <>
                    Joined{" "}
                    <strong style={{ color: "var(--text-p-0)" }}>
                      Eachstapp
                    </strong>{" "}
                    full-time · graduated from Vinci
                  </>
                ),
              },
              {
                year: "2023",
                text: (
                  <>
                    Built{" "}
                    <strong style={{ color: "var(--text-p-0)" }}>Atlas</strong>,
                    my CS capstone · first internship at Eachstapp
                  </>
                ),
              },
              {
                year: "2021",
                text: (
                  <>
                    Started Computer Science at{" "}
                    <strong style={{ color: "var(--text-p-0)" }}>
                      Haute École Léonard de Vinci
                    </strong>
                  </>
                ),
              },
            ].map(({ year, text }) => (
              <div
                key={year}
                className="grid gap-5 py-3.5 border-b text-sm last:border-b-0"
                style={{
                  gridTemplateColumns: "100px 1fr",
                  borderColor: "var(--portfolio-line)",
                }}
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--text-p-3)" }}
                >
                  {year}
                </span>
                <span style={{ color: "var(--text-p-1)" }}>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="pb-20" />
      </div>
    </main>
  );
}
