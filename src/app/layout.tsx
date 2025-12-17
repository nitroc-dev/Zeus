import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { Analytics } from "@vercel/analytics/next";

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
      </body>
    </html>
  );
}
