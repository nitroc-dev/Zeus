import { BookOpen, BriefcaseBusiness, Clock, Download, ExternalLink, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DEVICON_MAP } from "@/data/devicon-map";
import { getLocalizedExperiences, getLocalizedSkills } from "@/data/hardcoded-data";
import { formatExperience } from "@/utils/date";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  const title = `${t("name")} — ${t("role")}`;
  const description = t("bio");
  return {
    title,
    description,
    alternates: {
      canonical: "https://nitroc.xyz/en/about",
      languages: {
        en: "https://nitroc.xyz/en/about",
        fr: "https://nitroc.xyz/fr/about",
      },
    },
    openGraph: {
      title,
      description,
      url: "https://nitroc.xyz/about",
      images: [{ url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const locale = await getLocale();
  const experiences = getLocalizedExperiences(await getTranslations("experiencesData"));
  const skills = getLocalizedSkills(await getTranslations("skillCategories"));

  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

      <section className="relative px-6 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <Image
              src="/profile.png"
              alt="Corentin"
              width={120}
              height={120}
              className="rounded-full border-2 border-blue-600 shrink-0"
            />
            <div className="space-y-4 text-center sm:text-left">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("name")}</h1>
                <p className="text-xl text-blue-400 font-medium mt-1">{t("role")}</p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {t("location")}
                </span>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href={`/${locale}/contact`}>
                    <Mail className="w-4 h-4 mr-2" />
                    {t("contactMe")}
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Link href="https://github.com/nitroc-dev" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Link href="https://www.linkedin.com/in/corentin-d-02472724b" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    {t("downloadCV")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4">
              <Clock className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-sm text-gray-300">{t("yearsExp")}</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4">
              <BriefcaseBusiness className="w-5 h-5 text-green-400 shrink-0" />
              <span className="text-sm text-gray-300">{t("status")}</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4">
              <Globe className="w-5 h-5 text-purple-400 shrink-0" />
              <span className="text-sm text-gray-300">{t("french")} · {t("english")}</span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">{t("bioTitle")}</h2>
            <p className="text-gray-300 leading-relaxed">{t("bio")}</p>
          </div>

          {/* Currently learning */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">{t("learningTitle")}</h2>
            <div className="flex items-start gap-3 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4">
              <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">{t("learningDescription")}</p>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">{t("languagesTitle")}</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4">
                <p className="font-medium text-white">{t("french")}</p>
                <p className="text-sm text-gray-400 mt-0.5">{t("frenchLevel")}</p>
              </div>
              <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4">
                <p className="font-medium text-white">{t("english")}</p>
                <p className="text-sm text-gray-400 mt-0.5">{t("englishLevel")}</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{t("skillsTitle")}</h2>
            <div className="space-y-5">
              {skills.map((category) => (
                <div key={category.id}>
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-800 border border-gray-700 text-sm text-gray-300"
                      >
                        {DEVICON_MAP[tech] && (
                          <i className={`${DEVICON_MAP[tech]} text-base`} />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{t("experienceTitle")}</h2>
            <div className="space-y-3">
              {experiences
                .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
                .map((exp) => (
                  <Card key={exp.id} className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <h3 className="font-semibold text-white">{exp.name}</h3>
                          {exp.websiteUrl ? (
                            <Link
                              href={exp.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 text-sm inline-flex items-center gap-1 hover:text-blue-300 transition-colors"
                            >
                              {exp.companyName}
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          ) : (
                            <p className="text-blue-400 text-sm">{exp.companyName}</p>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 shrink-0">
                          {formatExperience(exp)}
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
