"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ContactSuccessProps } from "./props";

export function ContactSuccess({ onReset }: ContactSuccessProps) {
  const t = useTranslations("contact");
  return (
    <div className="text-center space-y-4 py-10">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
        style={{
          background:
            "color-mix(in oklch, var(--portfolio-ok) 15%, transparent)",
          border:
            "1px solid color-mix(in oklch, var(--portfolio-ok) 40%, transparent)",
        }}
      >
        <Check className="w-7 h-7" style={{ color: "var(--portfolio-ok)" }} />
      </div>
      <h3
        className="text-xl font-semibold"
        style={{ color: "var(--text-p-0)" }}
      >
        {t("successTitle")}
      </h3>
      <p className="text-sm" style={{ color: "var(--text-p-2)" }}>
        {t("successDesc")}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
        style={{ color: "var(--text-p-1)" }}
      >
        {t("successSend")}
      </button>
    </div>
  );
}
