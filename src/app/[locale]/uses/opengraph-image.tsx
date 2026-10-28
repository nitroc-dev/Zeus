import { getTranslations } from "next-intl/server";
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Corentin D'haeyere, software engineer in Brussels";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return renderOg({
    title: t("usesOgTitle"),
    subtitle: t("usesOgSubtitle"),
    footer: "nitroc.xyz · Corentin D'haeyere",
  });
}
