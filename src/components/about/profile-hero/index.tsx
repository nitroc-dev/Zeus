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
    <section className="pt-16 pb-8">
      <h1
        className="text-[clamp(48px,6vw,72px)] leading-[1] font-semibold tracking-[var(--tracking-metric)] mb-5"
        style={{ color: "var(--text-p-0)" }}
      >
        {name}
      </h1>
      <p
        className="text-[length:var(--fs-4)] mb-7"
        style={{ color: "var(--text-p-1)" }}
      >
        {role}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[length:var(--fs-2)]">
        <Link
          href={`${localePath(locale, "/")}#contact`}
          className="ds-btn ds-btn--md ds-btn--primary"
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
