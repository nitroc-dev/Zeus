import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Currently } from "@/components/sections/working-on";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("metadata");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://nitroc.xyz/${locale}`,
      languages: {
        en: "https://nitroc.xyz/en",
        fr: "https://nitroc.xyz/fr",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://nitroc.xyz/${locale}`,
      images: [
        { url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 },
      ],
    },
  };
}

export default function Home() {
  return (
    <main
      className="relative overflow-hidden flex flex-col items-center"
      style={{
        background:
          "radial-gradient(1100px 600px at 80% -10%, color-mix(in oklch, var(--portfolio-accent) 8%, transparent), transparent 60%), radial-gradient(900px 500px at -10% 120%, color-mix(in oklch, var(--portfolio-accent) 6%, transparent), transparent 60%), var(--navy-0)",
      }}
    >
      <Hero />
      <Projects />
      <Currently />
      <CTA />
    </main>
  );
}
