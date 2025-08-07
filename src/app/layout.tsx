import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Nitroc - Full-Stack Developer",
  description:
    "Explore my portfolio, I'm a passionate full-stack developer specializing in modern web technologies. Discover projects, skills, and professional background.",
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
      </body>
    </html>
  );
}
