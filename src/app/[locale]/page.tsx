import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { WorkingOn } from "@/components/sections/working-on";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "https://nitroc.xyz/en",
      languages: {
        en: "https://nitroc.xyz/en",
        fr: "https://nitroc.xyz/fr",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://nitroc.xyz",
      images: [{ url: "https://nitroc.xyz/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function Home() {
  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      <Hero />
      <Projects />
      <WorkingOn />
      <CTA />
    </main>
  );
}
