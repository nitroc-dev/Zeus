import type { getTranslations } from "next-intl/server";
import type { Project } from "@/types";
import type { createTranslator } from "@/utils/translate";

export interface ProjectNextNavProps {
  nextRaw: Project | null;
  tr: ReturnType<typeof createTranslator>;
  t: Awaited<ReturnType<typeof getTranslations>>;
}
