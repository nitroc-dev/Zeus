import type { getTranslations } from "next-intl/server";
import type { Project } from "@/types";

export interface ProjectHeroProps {
  project: Project;
  name: string;
  description: string;
  statusColor: string | null;
  statusLabel: string | null;
  locale: string;
  t: Awaited<ReturnType<typeof getTranslations>>;
}
