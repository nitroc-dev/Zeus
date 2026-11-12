import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nitroc.xyz"),
  title: "Corentin D'haeyere – Software Engineer in Brussels",
  description:
    "Software engineer in Brussels building web and mobile products end to end with TypeScript, React, Next.js, React Native and .NET.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
