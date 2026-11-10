import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // The URL alone decides the language: / is English, /fr is French. No
  // redirects based on the browser language or a cookie, which Google advises
  // against and which broke switching back to English. Visitors switch with
  // the language link in the footer.
  localeDetection: false,
  localeCookie: false,
});
