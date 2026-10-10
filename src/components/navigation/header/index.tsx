"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { OPEN_PALETTE_EVENT } from "@/components/command-palette";
import { Link, usePathname } from "@/i18n/navigation";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
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

        <div className="hidden md:flex items-center ml-4">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            className="ds-tag ds-tag--clickable cursor-pointer"
            aria-label={t("jump")}
          >
            <kbd className="font-mono">{modKey}</kbd>
            <kbd className="font-mono">K</kbd>
          </button>
        </div>

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
          </nav>
        </div>
      )}
    </header>
  );
}
