import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corentin - Full Stack Developer",
  description:
    "Full Stack Developer passionate about creating modern web applications with React, Next.js, and .NET. Explore my portfolio, projects, and professional journey.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
        <ToasterProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
