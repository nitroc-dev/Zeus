import { format, parseISO } from "date-fns";
import { enUS, fr } from "date-fns/locale";

function getLocaleObj(locale: string) {
  return locale === "fr" ? fr : enUS;
}

export function formatWhen(
  exp: { startDate: string; endDate?: string },
  locale: string,
  presentLabel: string,
): string {
  const dateLocale = getLocaleObj(locale);
  const fmt = (d: string) =>
    format(parseISO(d), "MMM yyyy", { locale: dateLocale });
  const end = exp.endDate ? fmt(exp.endDate) : presentLabel;
  return `${fmt(exp.startDate)} - ${end}`;
}

export function formatExperience(experience: {
  startDate: string;
  endDate?: string;
}): string {
  const fmt = (d: string) => format(parseISO(d), "MMMM yyyy", { locale: enUS });
  const start = fmt(experience.startDate);
  if (!experience.endDate) return start;
  return `${start} - ${fmt(experience.endDate)}`;
}
