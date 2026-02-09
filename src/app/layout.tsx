import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corentin - Full Stack Developer",
  description:
    "Full Stack Developer passionate about creating modern web applications with React, Next.js, and .NET. Explore my portfolio, projects, and professional journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
