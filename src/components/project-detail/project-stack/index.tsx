import { Section } from "@/components/project-detail/section";
import type { ProjectStackProps } from "./props";

export function ProjectStack({ stackItems, locale, t }: ProjectStackProps) {
  if (stackItems.length === 0) return null;
  return (
    <Section title={t("buildTitle")}>
      <dl className="m-0 space-y-5">
        {stackItems.map((item) => {
          const reason =
            (locale === "fr" ? item.reasonFr : item.reasonEn) || null;
          return (
            <div
              key={item.name}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-x-8 gap-y-1"
            >
              <dt
                className="text-[15px] font-medium"
                style={{ color: "var(--text-p-0)" }}
              >
                {item.name}
              </dt>
              {reason && (
                <dd
                  className="m-0 text-[15px] leading-[1.6] max-w-[64ch]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {reason}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
