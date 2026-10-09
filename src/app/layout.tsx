import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nitroc.xyz"),
  title: "Corentin - Software Engineer",
  description:
    "Software engineer building web and mobile products end to end with TypeScript, React, Next.js, React Native and .NET. Explore my portfolio, projects, and professional journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
