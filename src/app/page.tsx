import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { CTA } from "@/components/sections/cta";

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

export default function Home() {
  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CTA />
    </main>
  );
}
