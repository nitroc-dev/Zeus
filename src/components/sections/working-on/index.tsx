import { Clock } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { ProjectsControllerFindAllV1StatusItem } from "@/api/generated/nestJSAPI.schemas";
import { ProjectsGrid } from "@/components/sections/projects/projects-grid";

export async function WorkingOn() {
  const t = await getTranslations("workingOn");
  const locale = await getLocale();

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400">{t("description")}</p>
        </div>

        <ProjectsGrid
          locale={locale}
          status={[ProjectsControllerFindAllV1StatusItem.in_progress]}
        >
          <div className="border border-dashed border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[160px]">
            <Clock className="w-6 h-6 text-gray-600" />
            <p className="text-sm text-gray-600">{t("moreSoon")}</p>
          </div>
        </ProjectsGrid>
      </div>
    </section>
  );
}
