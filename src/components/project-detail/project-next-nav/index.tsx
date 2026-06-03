import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { ProjectNextNavProps } from "./props";

export function ProjectNextNav({ nextRaw, tr, t }: ProjectNextNavProps) {
  if (nextRaw) {
    return (
      <Link
        href={`/projects/${nextRaw.id}`}
        className="block mb-20 mt-10 p-10 rounded-[16px] transition-all group"
        style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line)", textDecoration: "none", color: "inherit" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: "var(--text-p-3)" }}>
              {t("nextProjectLabel")} →
            </p>
            <h3 className="text-3xl font-semibold tracking-tight" style={{ color: "var(--text-p-0)" }}>
              {tr(nextRaw, "name") ?? nextRaw.nameEn}
            </h3>
            <p className="mt-1 text-sm" style={{ color: "var(--text-p-2)" }}>
              {tr(nextRaw, "description") ?? nextRaw.descriptionEn}
            </p>
          </div>
          <span className="text-3xl shrink-0 transition-transform group-hover:translate-x-2" style={{ color: "var(--portfolio-accent)" }}>
            →
          </span>
        </div>
      </Link>
    );
  }
  return (
    <div className="mb-20 mt-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
        style={{ color: "var(--text-p-2)" }}
      >
        <ArrowLeft className="size-4" />
        {t("backToHome")}
      </Link>
    </div>
  );
}
