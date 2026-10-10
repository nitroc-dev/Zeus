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
    <ol className="m-0 p-0 list-none">
      {experiences.map((exp) => (
        <li
          key={exp.id}
          className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-8 gap-y-1 py-5 border-b first:pt-0 last:border-b-0 last:pb-0"
          style={{ borderColor: "var(--portfolio-line)" }}
        >
          <p
            className="text-[length:var(--fs-2)] m-0 pt-0.5 tabular-nums"
            style={{ color: "var(--text-p-2)" }}
          >
            {formatWhen(exp, locale, presentLabel)}
          </p>
          <div>
            <h3
              className="font-semibold text-[length:var(--fs-4)] mb-1.5"
              style={{ color: "var(--text-p-0)" }}
            >
              {tr(exp, "name") ?? exp.nameEn},{" "}
              {exp.websiteUrl ? (
                <Link
                  href={exp.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {exp.companyName}
                </Link>
              ) : (
                <span
                  className="font-normal"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {exp.companyName}
                </span>
              )}
            </h3>
            <p
              className="text-[length:var(--fs-3)] leading-relaxed m-0 max-w-[70ch]"
              style={{ color: "var(--text-p-2)" }}
            >
              {tr(exp, "description") ?? exp.descriptionEn}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
