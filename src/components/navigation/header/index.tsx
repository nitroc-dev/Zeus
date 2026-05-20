"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("uses"), href: `/${locale}/uses` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)]"
      style={{
        background: "color-mix(in oklch, var(--navy-0) 85%, transparent)",
        borderBottom: "1px solid var(--portfolio-line)",
      }}
    >
      <div
        className="flex items-center justify-between px-8 max-w-[1180px] mx-auto"
        style={{ height: "60px" }}
      >
        {/* Brand */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 font-semibold tracking-tight no-underline"
          style={{ color: "var(--text-p-0)" }}
          onClick={() => setIsOpen(false)}
        >
          <span
            className="w-7 h-7 rounded-lg grid place-items-center font-mono text-sm font-bold text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--portfolio-accent), color-mix(in oklch, var(--portfolio-accent) 50%, #6b21a8))",
              boxShadow:
                "0 0 0 1px var(--portfolio-line-2), 0 4px 12px var(--portfolio-accent-glow)",
            }}
          >
            C
          </span>
          Corentin
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1 text-sm">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 rounded-lg transition-colors duration-120 relative"
                style={{
                  color: isActive ? "var(--text-p-0)" : "var(--text-p-2)",
                }}
              >
                {item.name}
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-px rounded-full"
                    style={{ background: "var(--portfolio-accent)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--text-p-2)" }}
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div
          className="md:hidden px-4 py-3"
          style={{ borderTop: "1px solid var(--portfolio-line)" }}
        >
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: isActive ? "var(--navy-2)" : "transparent",
                    color: isActive ? "var(--text-p-0)" : "var(--text-p-1)",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
