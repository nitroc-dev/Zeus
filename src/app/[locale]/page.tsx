import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Currently } from "@/components/sections/working-on";
import { buildAlternates, siteUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, ""),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: siteUrl(locale, ""),
      type: "website",
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="relative overflow-hidden flex flex-col items-center page-bg">
      <Hero />
      <Projects />
      <Currently />
    </main>
  );
}
