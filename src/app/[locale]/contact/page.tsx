import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPanel } from "@/components/contact/contact-panel";
import { buildAlternates, siteUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const [{ locale }, t] = await Promise.all([
    params,
    getTranslations("contact"),
  ]);
  return {
    title: `Contact - Corentin`,
    description: t("description"),
    alternates: buildAlternates(locale, "/contact"),
    openGraph: {
      title: "Contact - Corentin",
      description: t("description"),
      url: siteUrl(locale, "/contact"),
    },
  };
}

export default function ContactPage() {
  return <ContactPanel />;
}
