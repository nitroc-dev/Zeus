"use client";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("basedInBelgium")}
            </h3>
            <p className="text-sm text-gray-400">{t("basedDescription")}</p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("fullStackFocus")}
            </h3>
            <p className="text-sm text-gray-400">{t("fullStackDescription")}</p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t("innovationDriven")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("innovationDescription")}
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
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
