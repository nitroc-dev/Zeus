import Link from "next/link";
import { localePath } from "@/lib/seo";
import type { ProfileHeroProps } from "./props";

export function ProfileHero({
  name,
  role,
  locale,
  contactLabel,
}: ProfileHeroProps) {
  const linkCls =
    "text-[var(--text-p-1)] underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)] transition-colors";
  return (
    <section className="pt-24 pb-12">
      <h1
        className="text-[clamp(48px,6vw,72px)] leading-[1] font-semibold tracking-[-0.03em] mb-5"
        style={{ color: "var(--text-p-0)" }}
      >
        {name}
      </h1>
      <p className="text-[19px] mb-7" style={{ color: "var(--text-p-1)" }}>
        {role}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link
          href={localePath(locale, "/contact")}
          className="inline-flex items-center px-4 py-2.5 rounded-md font-medium transition-colors hover:brightness-110"
          style={{
            background: "var(--portfolio-accent)",
            color: "var(--portfolio-accent-ink)",
          }}
        >
          {contactLabel}
        </Link>
        <Link
          href="https://github.com/nitroc-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/corentin-d-02472724b"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
