import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildAlternates, siteUrl } from "@/lib/seo";
import { ContactForm } from "@/components/contact/contact-form";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const [{ locale }, t] = await Promise.all([params, getTranslations("contact")]);
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

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  return <ContactForm locale={locale} />;
}
