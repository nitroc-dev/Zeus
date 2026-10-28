import type { GodId } from "@/types";

// One line mark per god, drawn on a shared 24px grid so they read as a set.
export const GOD_PATHS: Record<GodId, string[]> = {
  // Zeus: the thunderbolt
  zeus: ["M13.5 2.5 5 13.5h6l-1.5 8L19 9.5h-6.5l1-7Z"],
  // Helios: the sun, long rays on the axes and short ones on the diagonals
  helios: [
    "M12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 1 0 0-8.5Z",
    "M18.6 12H22M16.67 16.67l1.55 1.55M12 18.6V22M7.33 16.67l-1.55 1.55M5.4 12H2M7.33 7.33 5.78 5.78M12 5.4V2M16.67 7.33l1.55-1.55",
  ],
  // Selene: the crescent moon
  selene: ["M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.6 6.6 0 0 0 10.7 10.7Z"],
};
