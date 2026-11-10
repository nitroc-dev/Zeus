"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";

// A plain link to the same page in the other language, at its canonical URL
// (English has no prefix). Besides helping visitors, it is the only crawlable
// path from the English pages to the French ones: hreflang and the sitemap
// alone are weak signals for Google. A full page load on purpose, so the
// whole page switches language at once.
export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const target = locale === "fr" ? "en" : "fr";
  const path = pathname === "/" ? "" : pathname;
  const href = target === "fr" ? `/fr${path}` : path || "/";

  return (
    <a
      href={href}
      hrefLang={target}
      lang={target}
      className="transition-colors text-[var(--text-p-1)] hover:text-[var(--text-p-0)]"
    >
      {target === "fr" ? "Français" : "English"}
    </a>
  );
}
