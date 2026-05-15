import { Box, Code, Database } from "lucide-react";
import { getLocale } from "next-intl/server";
import { getSkillsData } from "@/lib/data";
import { createTranslator } from "@/utils/translate";

const CATEGORY_COLORS = [
  {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: "bg-blue-500/20 text-blue-400",
  },
  {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    icon: "bg-green-500/20 text-green-400",
  },
  {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: "bg-orange-500/20 text-orange-400",
  },
];

const CATEGORY_ICONS = [
  <Code key="code" className="w-4 h-4" />,
  <Box key="box" className="w-4 h-4" />,
  <Database key="db" className="w-4 h-4" />,
];

export async function SkillsGrid() {
  const locale = await getLocale();
  const tr = createTranslator(locale);
  const skillsData = await getSkillsData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillsData.map((category, index) => {
        const colors = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
        return (
          <div
            key={category.id}
            className={`rounded-xl border p-6 ${colors.bg} ${colors.border}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${colors.icon}`}
              >
                {CATEGORY_ICONS[index % CATEGORY_ICONS.length]}
              </div>
              <h3 className="font-semibold text-white">
                {tr(category, "label") ?? category.labelEn}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {category.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 rounded-lg bg-gray-900/50 px-3 py-2 border border-gray-700/40"
                >
                  <span className="text-xs text-gray-300 truncate">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
