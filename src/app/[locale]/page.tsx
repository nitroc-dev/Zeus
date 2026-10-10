import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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
  const [{ locale }, t] = await Promise.all([
    params,
    getTranslations("metadata"),
  ]);
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, ""),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: siteUrl(locale, ""),
      images: [
        { url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 },
      ],
    },
  };
}

export default function Home() {
  return (
    <main className="relative overflow-hidden flex flex-col items-center page-bg">
      <Hero />
      <Projects />
      <Currently />
    </main>
  );
}
