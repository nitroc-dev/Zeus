import { Section } from "@/components/project-detail/section";
import type { ProjectStackProps } from "./props";

export function ProjectStack({ stackItems, locale, t }: ProjectStackProps) {
  if (stackItems.length === 0) return null;
  return (
    <Section eyebrow={t("buildEyebrow")} title={t("buildTitle")}>
      <p className="leading-[1.7] mb-6 max-w-[720px]" style={{ fontSize: "16px", color: "var(--text-p-1)" }}>
        {t("buildIntro")}
      </p>
      <div className="flex flex-col gap-3">
        {stackItems.map((item) => {
          const reason = (locale === "fr" ? item.reasonFr : item.reasonEn) || null;
          return (
            <div
              key={item.name}
              className="grid gap-6 px-6 py-5 rounded-xl"
              style={{ gridTemplateColumns: "200px 1fr", background: "var(--navy-1)", border: "1px solid var(--portfolio-line)" }}
            >
              <div>
                <p className="font-semibold text-base" style={{ color: "var(--text-p-0)" }}>{item.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] mt-1" style={{ color: "var(--text-p-3)" }}>
                  {t("techLabel")}
                </p>
              </div>
              {reason && (
                <p className="text-sm leading-[1.6] self-center" style={{ color: "var(--text-p-1)" }}>{reason}</p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
