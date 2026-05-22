const BASE = "https://nitroc.xyz";
const DEFAULT_LOCALE = "en";

export function siteUrl(locale: string, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${BASE}${prefix}${path}`;
}

export function buildAlternates(locale: string, path: string) {
  return {
    canonical: siteUrl(locale, path),
    languages: {
      "x-default": siteUrl(DEFAULT_LOCALE, path),
      en: siteUrl("en", path),
      fr: siteUrl("fr", path),
    },
  };
}

export function ogLocale(locale: string): string {
  return locale === "fr" ? "fr_FR" : "en_US";
}
