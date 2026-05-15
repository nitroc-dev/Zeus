import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/contact/contact-form";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("contact");
  return {
    title: `Contact — Corentin`,
    description: t("description"),
    alternates: {
      canonical: `https://nitroc.xyz/${locale}/contact`,
      languages: {
        en: "https://nitroc.xyz/en/contact",
        fr: "https://nitroc.xyz/fr/contact",
      },
    },
    openGraph: {
      title: `Contact — Corentin`,
      description: t("description"),
      url: `https://nitroc.xyz/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  return <ContactForm locale={locale} />;
}
