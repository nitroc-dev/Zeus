import { Clock, Mic, Server } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function WorkingOn() {
  const t = await getTranslations("workingOn");

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
          {/* NestJS API */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                <Server className="w-5 h-5 text-red-400" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                {t("nestApi.status")}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">{t("nestApi.title")}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{t("nestApi.description")}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {["NestJS", "TypeScript", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs bg-gray-700/60 text-gray-400 border border-gray-600/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Voice Assistant */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                <Mic className="w-5 h-5 text-purple-400" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                {t("voiceAssistant.status")}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">{t("voiceAssistant.title")}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{t("voiceAssistant.description")}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {["Python", "NestJS", "TypeScript"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs bg-gray-700/60 text-gray-400 border border-gray-600/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* More coming soon */}
          <div className="border border-dashed border-gray-700/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center min-h-[160px]">
            <Clock className="w-6 h-6 text-gray-600" />
            <p className="text-sm text-gray-600">{t("moreSoon")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
