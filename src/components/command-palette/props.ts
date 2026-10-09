export interface PaletteItem {
  id: string;
  label: string;
  hint: string;
  href: string;
}

export interface CommandPaletteProps {
  items: PaletteItem[];
}
