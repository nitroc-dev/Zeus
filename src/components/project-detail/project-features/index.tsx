import { Section } from "@/components/project-detail/section";
import type { ProjectFeaturesProps } from "./props";

export function ProjectFeatures({ highlights, t }: ProjectFeaturesProps) {
  return (
    <Section eyebrow={t("featuresEyebrow")} title={t("featuresTitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {highlights.map((item, i) => (
          <div
            key={item}
            className="rounded-[16px] overflow-hidden"
            style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line)" }}
          >
            <div
              className="aspect-video border-b"
              style={{
                borderColor: "var(--portfolio-line)",
                background: "var(--navy-2)",
                backgroundImage: "repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(255,255,255,0.02) 14px, rgba(255,255,255,0.02) 28px)",
              }}
            />
            <div className="px-6 py-5">
              <span
                className="block font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5"
                style={{ color: "var(--portfolio-accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-p-1)" }}>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
