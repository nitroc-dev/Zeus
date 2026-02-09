"use client";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            {t("badge")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🏡
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("basedInBelgium")}
            </h3>
            <p className="text-sm text-gray-400">{t("basedDescription")}</p>
          </div>

          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              💻
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("fullStackFocus")}
            </h3>
            <p className="text-sm text-gray-400">{t("fullStackDescription")}</p>
          </div>

          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("innovationDriven")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("innovationDescription")}
            </p>
          </div>

          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              📚
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("alwaysLearning")}
            </h3>
            <p className="text-sm text-gray-400">{t("learningDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
