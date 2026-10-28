import type { GodId } from "@/types";

export interface PaletteItem {
  id: string;
  label: string;
  hint: string;
  href: string;
  god?: GodId;
}

export interface CommandPaletteProps {
  items: PaletteItem[];
}
