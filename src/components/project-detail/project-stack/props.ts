import type { getTranslations } from "next-intl/server";
import type { TechStackItem } from "@/types";

export interface ProjectStackProps {
  stackItems: TechStackItem[];
  locale: string;
  t: Awaited<ReturnType<typeof getTranslations>>;
}
