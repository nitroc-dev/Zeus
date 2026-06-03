import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !["en", "fr"].includes(locale)) {
    locale = "en";
  }

  const loaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
    en: () => import("../../messages/en.json"),
    fr: () => import("../../messages/fr.json"),
  };

  return {
    locale,
    messages: (await loaders[locale]()).default,
  };
});
