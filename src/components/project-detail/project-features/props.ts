import type { getTranslations } from "next-intl/server";

export interface ProjectFeaturesProps {
  highlights: string[];
  t: Awaited<ReturnType<typeof getTranslations>>;
}
