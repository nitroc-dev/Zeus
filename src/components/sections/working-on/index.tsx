import { Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getLocalizedWorkingOn } from "@/data/hardcoded-data";
import WorkingCard from "@/components/cards/working-on";

export async function WorkingOn() {
  const t = await getTranslations("workingOn");
  const items = getLocalizedWorkingOn(t);

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <WorkingCard key={item.id} item={item} />
          ))}
          <div className="border border-dashed border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[160px]">
            <Clock className="w-6 h-6 text-gray-600" />
            <p className="text-sm text-gray-600">{t("moreSoon")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
