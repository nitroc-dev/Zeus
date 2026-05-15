import { BookOpen, Building2, MapPin, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LocalTime } from "./local-time";

export async function Currently() {
  const t = await getTranslations("currently");

  return (
    <section className="px-6 py-[60px] w-full max-w-[1180px] mx-auto">
      <div
        className="rounded-[16px] px-10 py-9 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, var(--navy-2), var(--navy-1))",
          border: "1px solid var(--portfolio-line-2)",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 300px at 100% 0%, var(--portfolio-accent-soft), transparent 60%)",
          }}
        />

        {/* Header */}
        <div className="flex justify-between items-start mb-8 relative">
          <div>
            <div
              className="flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] uppercase mb-2"
              style={{ color: "var(--portfolio-accent)" }}
            >
              <span
                className="w-6 h-px"
                style={{ background: "var(--portfolio-accent)" }}
              />
              {t("eyebrow")}
            </div>
            <h2
              className="text-[28px] font-semibold tracking-tight"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("title")}
            </h2>
          </div>

          {/* Availability */}
          <div className="hidden sm:flex flex-col items-end gap-1.5">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{
                background:
                  "color-mix(in oklch, var(--portfolio-ok) 12%, transparent)",
                color: "var(--portfolio-ok)",
                border:
                  "1px solid color-mix(in oklch, var(--portfolio-ok) 25%, transparent)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--portfolio-ok)" }}
              />
              {t("statusValue")}
            </div>
            <div className="text-[11px]" style={{ color: "var(--text-p-3)" }}>
              {t("statusSublabel")}
            </div>
          </div>
        </div>

        {/* Featured: Working On */}
        <div className="relative mb-6">
          {/* Accent left bar */}
          <div
            className="absolute inset-y-0 left-0 w-[2px] rounded-full"
            style={{ background: "var(--portfolio-accent)" }}
          />
          {/* Accent background wash */}
          <div
            className="absolute inset-0 pointer-events-none rounded-r-xl"
            style={{
              background:
                "linear-gradient(90deg, var(--portfolio-accent-soft), transparent 55%)",
            }}
          />
          <div className="pl-6 py-5 relative">
            <div className="flex items-center gap-2.5 mb-3">
              <Building2
                className="w-3.5 h-3.5"
                style={{ color: "var(--portfolio-accent)" }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: "var(--portfolio-accent)" }}
              >
                {t("workingOnLabel")}
              </span>
              <span
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider"
                style={{
                  background:
                    "color-mix(in oklch, var(--portfolio-accent) 12%, transparent)",
                  color: "var(--portfolio-accent)",
                  border:
                    "1px solid color-mix(in oklch, var(--portfolio-accent) 25%, transparent)",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full animate-pulse"
                  style={{ background: "var(--portfolio-accent)" }}
                />
                active
              </span>
            </div>
            <div
              className="text-[24px] font-semibold tracking-tight mb-1.5"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("workingOnValue")}
            </div>
            <div className="text-[13px]" style={{ color: "var(--text-p-2)" }}>
              {t("workingSince")}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: "1px", background: "var(--portfolio-line)" }}
        />

        {/* Three-item status row */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {/* Location */}
          <div
            className="flex flex-col gap-1.5 pb-6 sm:pb-0 sm:pr-8 border-b sm:border-b-0 sm:border-r"
            style={{ borderColor: "var(--portfolio-line)" }}
          >
            <div className="flex items-center gap-2 mb-0.5">
              <MapPin
                className="w-3.5 h-3.5"
                style={{ color: "var(--text-p-3)" }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: "var(--text-p-3)" }}
              >
                {t("locationLabel")}
              </span>
            </div>
            <div
              className="text-[15px] font-medium"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("locationValue")}
            </div>
            <div
              className="text-[12px] font-mono"
              style={{ color: "var(--text-p-2)" }}
            >
              <LocalTime />
            </div>
          </div>

          {/* Reading */}
          <div
            className="flex flex-col gap-1.5 pt-6 sm:pt-0 pb-6 sm:pb-0 sm:px-8 border-b sm:border-b-0 sm:border-r"
            style={{ borderColor: "var(--portfolio-line)" }}
          >
            <div className="flex items-center gap-2 mb-0.5">
              <BookOpen
                className="w-3.5 h-3.5"
                style={{ color: "var(--text-p-3)" }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: "var(--text-p-3)" }}
              >
                {t("readingLabel")}
              </span>
            </div>
            <div
              className="text-[15px] font-medium"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("readingValue")}
            </div>
            <div className="text-[12px]" style={{ color: "var(--text-p-2)" }}>
              {t("readingSublabel")}
            </div>
          </div>

          {/* Learning */}
          <div className="flex flex-col gap-1.5 pt-6 sm:pt-0 sm:pl-8">
            <div className="flex items-center gap-2 mb-0.5">
              <Sparkles
                className="w-3.5 h-3.5"
                style={{ color: "var(--text-p-3)" }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em]"
                style={{ color: "var(--text-p-3)" }}
              >
                {t("learningLabel")}
              </span>
            </div>
            <div
              className="text-[15px] font-medium"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("learningValue")}
            </div>
            <div className="text-[12px]" style={{ color: "var(--text-p-2)" }}>
              {t("learningSublabel")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
