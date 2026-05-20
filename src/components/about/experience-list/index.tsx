import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { formatWhen } from "@/utils/date";
import { createTranslator } from "@/utils/translate";
import type { ExperienceListProps } from "./props";

export function ExperienceList({
  experiences,
  locale,
  presentLabel,
}: ExperienceListProps) {
  const tr = createTranslator(locale);
  return (
    <div className="flex flex-col gap-4">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="rounded-xl px-6 py-6"
          style={{
            background: "var(--navy-1)",
            border: "1px solid var(--portfolio-line)",
          }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
            <h3
              className="font-semibold text-lg"
              style={{ color: "var(--text-p-0)" }}
            >
              {tr(exp, "name") ?? exp.nameEn}
              {exp.websiteUrl ? (
                <>
                  {" · "}
                  <Link
                    href={exp.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80 inline-flex items-center gap-1"
                    style={{ color: "var(--portfolio-accent)" }}
                  >
                    {exp.companyName}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </>
              ) : (
                <span style={{ color: "var(--portfolio-accent)" }}>
                  {" "}
                  · {exp.companyName}
                </span>
              )}
            </h3>
            <span
              className="font-mono text-xs shrink-0"
              style={{ color: "var(--text-p-3)" }}
            >
              {formatWhen(exp, locale, presentLabel)}
            </span>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-p-2)" }}
          >
            {tr(exp, "description") ?? exp.descriptionEn}
          </p>
        </div>
      ))}
    </div>
  );
}
