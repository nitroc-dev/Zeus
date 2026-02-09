import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

export const metadata: Metadata = {
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [{ url: "/profile.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nitroc.xyz",
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
      "Full Stack Developer passionate with creating modern web applications with React, Next.js, and .NET.",
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

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
