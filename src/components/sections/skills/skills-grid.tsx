"use client";

import { useSkillsControllerFindAllCategoriesV1 } from "@/api/generated/skills/skills";
import type { SkillCategoryDto } from "@/api/generated/nestJSAPI.schemas";

const CATEGORY_COLORS = [
  { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: "bg-blue-500/20 text-blue-400" },
  { bg: "bg-green-500/10", border: "border-green-500/20", icon: "bg-green-500/20 text-green-400" },
  { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "bg-orange-500/20 text-orange-400" },
];

interface SkillsGridProps {
  locale: string;
}

export function SkillsGrid({ locale }: SkillsGridProps) {
  const { data, isLoading, isError } = useSkillsControllerFindAllCategoriesV1();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-xl bg-gray-800/50 border border-gray-700/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) return null;

  const categories = ((data as any)?.data as SkillCategoryDto[] | undefined) ?? [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category, index) => {
        const colors = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
        return (
          <div
            key={category.categoryId}
            className={`rounded-xl border p-6 ${colors.bg} ${colors.border}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${colors.icon}`}>
                <i className={`${category.icon} text-base`} />
              </div>
              <h3 className="font-semibold text-white">{category.label}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.skillId}
                  className="flex items-center gap-2 rounded-lg bg-gray-900/50 px-3 py-2 border border-gray-700/40"
                >
                  {skill.icon && (
                    <i className={`${skill.icon} text-base shrink-0`} />
                  )}
                  <span className="text-xs text-gray-300 truncate">
                    {locale === "fr" ? skill.nameFr : skill.nameEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
