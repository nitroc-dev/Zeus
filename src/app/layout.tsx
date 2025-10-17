"use client";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { MailIcon } from "@/components/icons/mail";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <header className="bg-gray-950 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/profile.png"
                  alt="Corentin"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-blue-600"
                />
                <span className="text-2xl font-bold text-white">
                  Corentin<span className="text-blue-600">.</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                        isActive
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="px-6 py-8 bg-gray-950 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Nitroc. All rights reserved.
            </p>

            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link
                href="https://github.com/nitroc-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/corentin-d-02472724b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:contact@nitroc.xyz"
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MailIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </footer>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1f2937",
              color: "#fff",
              border: "1px solid #374151",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
