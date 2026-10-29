import type { getTranslations } from "next-intl/server";
import type { LighthouseReport } from "@/types";

export interface LighthouseResultsProps {
  report: LighthouseReport;
  locale: string;
  t: Awaited<ReturnType<typeof getTranslations>>;
}
