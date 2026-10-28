import { Section } from "@/components/project-detail/section";
import type { ProjectFeaturesProps } from "./props";

export function ProjectFeatures({ highlights, t }: ProjectFeaturesProps) {
  return (
    <Section title={t("featuresTitle")}>
      <ul
        className="m-0 pl-5 space-y-2 max-w-[68ch]"
        style={{ listStyleType: "disc" }}
      >
        {highlights.map((item) => (
          <li
            key={item}
            className="text-[length:var(--fs-3)] leading-[1.6] marker:text-[var(--text-p-2)]"
            style={{ color: "var(--text-p-1)" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
