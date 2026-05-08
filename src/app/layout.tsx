import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { QueryProvider } from "@/components/providers/query-provider";
import messages from "../../messages/en.json";

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
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      <QueryProvider>{children}</QueryProvider>
    </NextIntlClientProvider>
  );
}
