"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("projects"), href: `/${locale}/projects` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <header className="bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
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
  );
}
