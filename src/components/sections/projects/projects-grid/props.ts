import type { ReactNode } from "react";

export interface ProjectsGridProps {
  locale: string;
  featuredOnly?: boolean;
  statusFilter?: string;
  children?: ReactNode;
}
