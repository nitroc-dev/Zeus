import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { CommandPalette } from "@/components/command-palette";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { routing } from "@/i18n/routing";
import { getProjectsData } from "@/lib/data";
import { buildAlternates, ogLocale, siteUrl } from "@/lib/seo";
import { createTranslator } from "@/utils/translate";
import "../globals.css";

const inter = Inter({
  // Greek subsets are only fetched where the god names (Ζεύς, Ἥλιος…) appear.
  subsets: ["latin", "latin-ext", "greek", "greek-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    // Localized defaults; pages override them. The 404 page inherits these.
    title: t("title"),
    description: t("description"),
    keywords: [
      "React Native Developer",
      "React Developer",
      "Next.js Developer",
      ".NET Developer",
      "TypeScript",
      "Web Development",
      "Software Engineer",
      "Brussels Developer",
      "Portfolio",
    ],
    authors: [{ name: "Corentin D'haeyere", url: "https://nitroc.xyz" }],
    creator: "Corentin D'haeyere",
    publisher: "Corentin D'haeyere",
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    alternates: buildAlternates(locale, ""),
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      url: siteUrl(locale, ""),
      title: t("title"),
      description: t("description"),
      siteName: "Corentin D'haeyere",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://nitroc.xyz/#person",
  name: "Corentin D'haeyere",
  givenName: "Corentin",
  familyName: "D'haeyere",
  alternateName: "Corentin",
  url: "https://nitroc.xyz",
  image: "https://nitroc.xyz/avatar-c.webp",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Eachstapp",
    url: "https://eachstapp.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Haute École Léonard de Vinci",
    url: "https://www.vinci.be",
  },
  sameAs: [
    "https://github.com/nitroc-dev",
    "https://www.linkedin.com/in/corentin-d-02472724b",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    ".NET",
    "SQL Server",
  ],
  knowsLanguage: ["fr", "en", "nl"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussels",
    addressCountry: "BE",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nitroc.xyz/#website",
  name: "Corentin D'haeyere",
  alternateName: "nitroc.xyz",
  url: "https://nitroc.xyz",
  inLanguage: ["en", "fr"],
  author: { "@id": "https://nitroc.xyz/#person" },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const [messages, tNav, tPalette, projects] = await Promise.all([
    getMessages(),
    getTranslations("nav"),
    getTranslations("palette"),
    getProjectsData(),
  ]);
  const tr = createTranslator(locale);
  const paletteItems = [
    { id: "home", label: tNav("home"), hint: tPalette("page"), href: "/" },
    {
      id: "about",
      label: tNav("about"),
      hint: tPalette("page"),
      href: "/about",
    },
    { id: "uses", label: tNav("uses"), hint: tPalette("page"), href: "/uses" },
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      label: tr(p, "name") ?? p.nameEn,
      hint: tPalette("project"),
      href: `/projects/${p.id}`,
      god: p.god?.id,
    })),
  ];

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static trusted JSON-LD
          // react-doctor-disable-next-line react-doctor/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static trusted JSON-LD
          // react-doctor-disable-next-line react-doctor/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="ds min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <CommandPalette items={paletteItems} />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
