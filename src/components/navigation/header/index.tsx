"use client";

import { Download, Menu, Search, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { OPEN_PALETTE_EVENT } from "@/components/command-palette";
import { Link, usePathname } from "@/i18n/navigation";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();
  const resumeHref = `/cv/corentin-cv-${locale}.pdf`;
  const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
  const [isOpen, setIsOpen] = useState(false);
  const [modKey, setModKey] = useState("Ctrl");

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setModKey("⌘");
  }, []);

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("uses"), href: "/uses" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)]"
      style={{
        background: "var(--navy-0)",
        borderBottom: "1px solid var(--portfolio-line)",
      }}
    >
      <div
        className="flex items-center justify-between px-6 max-w-[680px] mx-auto"
        style={{ height: "60px" }}
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold no-underline"
          style={{ color: "var(--text-p-0)" }}
          onClick={() => setIsOpen(false)}
        >
          Corentin
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1 text-[length:var(--fs-2)] ml-auto">
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

        <div className="hidden md:flex items-center gap-2 ml-3">
          <button
            type="button"
            onClick={openPalette}
            aria-label={t("jump")}
            className="flex items-center gap-2 h-[var(--control-h-md)] pl-2.5 pr-1.5 min-w-[168px] whitespace-nowrap rounded-[var(--radius-ctl)] cursor-pointer text-[length:var(--fs-2)] transition-colors hover:border-[var(--line-strong)]"
            style={{
              background: "var(--surface-1)",
              border: "1px solid var(--line)",
              color: "var(--text-3)",
            }}
          >
            <Search className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="flex-1 text-left pr-2">{t("search")}</span>
            <kbd
              className="font-mono text-[length:var(--fs-1)] px-1.5 rounded"
              style={{
                border: "1px solid var(--line)",
                color: "var(--text-2)",
              }}
            >
              {modKey} K
            </kbd>
          </button>
          <a
            href={resumeHref}
            download
            className="ds-btn ds-btn--md ds-btn--secondary"
          >
            <Download className="size-3.5" aria-hidden="true" />
            {t("resume")}
          </a>
        </div>

        {/* Mobile search */}
        <button
          type="button"
          className="md:hidden ml-auto p-2 rounded-lg"
          style={{ color: "var(--text-p-2)" }}
          onClick={openPalette}
          aria-label={t("jump")}
        >
          <Search className="size-5" />
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--text-p-2)" }}
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
                  className="px-3 py-2.5 rounded-lg text-[length:var(--fs-2)] font-medium transition-colors"
                  style={{
                    background: isActive ? "var(--navy-2)" : "transparent",
                    color: isActive ? "var(--text-p-0)" : "var(--text-p-1)",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href={resumeHref}
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[length:var(--fs-2)] font-medium"
              style={{ color: "var(--text-p-1)" }}
            >
              <Download className="size-4" aria-hidden="true" />
              {t("resume")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
