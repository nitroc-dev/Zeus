export const createTranslator =
  (locale: string) =>
  // biome-ignore lint/suspicious/noExplicitAny: runtime field access on typed data objects
  (obj: any, fieldName: string): string | null => {
    if (!obj) return null;

    const properlyCasedLocale =
      locale.charAt(0).toUpperCase() + locale.slice(1).toLowerCase();
    const localizedField = `${fieldName}${properlyCasedLocale}`;

    return localizedField in obj ? obj[localizedField] : null;
  };
