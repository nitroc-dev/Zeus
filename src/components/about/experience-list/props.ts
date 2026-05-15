import type { ExperienceData } from "@/types";

export interface ExperienceListProps {
  experiences: ExperienceData[];
  locale: string;
  presentLabel: string;
}
