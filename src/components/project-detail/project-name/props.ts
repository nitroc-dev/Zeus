import type { getTranslations } from "next-intl/server";
import type { ProjectGod } from "@/types";

export interface ProjectNameProps {
  god: ProjectGod;
  name: string;
  locale: string;
  t: Awaited<ReturnType<typeof getTranslations>>;
}
