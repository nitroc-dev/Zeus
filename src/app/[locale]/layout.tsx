import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { buildAlternates, ogLocale, siteUrl } from "@/lib/seo";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export const viewport: Viewport = {
  themeColor: "#07090f",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      ".NET Developer",
      "TypeScript",
      "Web Development",
      "Software Engineer",
      "Brussels Developer",
      "Portfolio",
    ],
    authors: [{ name: "Corentin" }],
    creator: "Corentin",
    publisher: "Corentin",
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [{ url: "/profile.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: buildAlternates(locale, ""),
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      url: siteUrl(locale, ""),
      title: "Corentin - Full Stack Developer",
      description:
        "Full Stack Developer passionate about creating modern web applications with React, Next.js, and .NET.",
      siteName: "Corentin Portfolio",
      images: [
        {
          url: "https://nitroc.xyz/og-image.png",
          width: 1200,
          height: 630,
          alt: "Corentin - Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Corentin - Full Stack Developer",
      description:
        "Full Stack Developer passionate about creating modern web applications with React, Next.js, and .NET.",
      images: ["https://nitroc.xyz/og-image.png"],
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
  name: "Corentin",
  url: "https://nitroc.xyz",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com/nitroc-dev",
    "https://www.linkedin.com/in/corentin-d-02472724b",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    ".NET",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussels",
    addressCountry: "BE",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Corentin - Full Stack Developer",
  url: "https://nitroc.xyz",
  description:
    "Full Stack Developer specializing in React, Next.js, and .NET. Based in Brussels.",
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
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" href="/profile.png" as="image" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static trusted JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static trusted JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
