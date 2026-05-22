import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nitroc.xyz"),
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
