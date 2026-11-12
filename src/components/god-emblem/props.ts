import type { GodId } from "@/types";

export interface GodEmblemProps {
  god: GodId;
  /** Rendered size in px. The stroke stays 1.5px at every size. */
  size?: number;
  className?: string;
}
