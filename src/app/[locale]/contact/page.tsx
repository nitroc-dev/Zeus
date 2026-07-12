import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates, siteUrl } from "@/lib/seo";
import { ContactForm } from "@/components/contact/contact-form";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
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
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4].map((i) => ({
      "@type": "Question",
      name: t(`faq${i}Q`),
      acceptedAnswer: { "@type": "Answer", text: t(`faq${i}A`) },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // react-doctor-disable-next-line react-doctor/no-danger
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static trusted JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactForm />
    </>
  );
}
