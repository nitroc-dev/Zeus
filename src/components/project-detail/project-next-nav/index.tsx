import { Link } from "@/i18n/navigation";
import type { ProjectNextNavProps } from "./props";

export function ProjectNextNav({ nextRaw, tr, t }: ProjectNextNavProps) {
  return (
    <nav
      className="mt-6 mb-20 pt-8 border-t flex flex-wrap items-baseline justify-between gap-4"
      style={{ borderColor: "var(--portfolio-line)" }}
    >
      <Link
        href="/"
        className="text-[length:var(--fs-2)] underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
        style={{ color: "var(--text-p-1)" }}
      >
        {t("backToHome")}
      </Link>
      {nextRaw && (
        <Link
          href={`/projects/${nextRaw.id}`}
          className="group text-right no-underline"
          style={{ color: "inherit" }}
        >
          <span
            className="block text-[length:var(--fs-2)]"
            style={{ color: "var(--text-p-2)" }}
          >
            {t("nextProjectLabel")}
          </span>
          <span
            className="text-[length:var(--fs-5)] font-semibold tracking-[var(--tracking-title)] underline-offset-4 decoration-1 group-hover:underline"
            style={{ color: "var(--text-p-0)" }}
          >
            {tr(nextRaw, "name") ?? nextRaw.nameEn}
          </span>
        </Link>
      )}
    </nav>
  );
}
