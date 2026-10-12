import { Section } from "@/components/project-detail/section";
import { createTranslator } from "@/utils/translate";
import type { ProjectNameProps } from "./props";

export function ProjectName({ god, name, locale, t }: ProjectNameProps) {
  const tr = createTranslator(locale);
  const rows = [
    {
      label: t("nameGod"),
      value: (
        <>
          <span lang="grc">{god.greek}</span>
          <span style={{ color: "var(--text-3)" }}> · {name}</span>
        </>
      ),
    },
    { label: t("nameDomain"), value: tr(god, "domain") ?? god.domainEn },
    { label: t("nameWhy"), value: tr(god, "why") ?? god.whyEn },
  ];

  return (
    <Section title={t("nameTitle")}>
      <dl className="m-0 max-w-[68ch]">
        {rows.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-x-4 gap-y-1 py-2"
          >
            <dt
              className="text-[length:var(--fs-2)] sm:pt-0.5"
              style={{ color: "var(--text-p-2)" }}
            >
              {label}
            </dt>
            <dd
              className="m-0 text-[length:var(--fs-3)] leading-[1.6]"
              style={{ color: "var(--text-p-1)" }}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
