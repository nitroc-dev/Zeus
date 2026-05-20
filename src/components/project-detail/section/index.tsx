import type { SectionProps } from "./props";

export function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section
      className="py-[50px] border-t"
      style={{ borderColor: "var(--portfolio-line)" }}
    >
      <div
        className="font-mono text-xs uppercase tracking-[0.1em] mb-3.5 flex items-center gap-2.5"
        style={{ color: "var(--portfolio-accent)" }}
      >
        <span
          className="w-6 h-px"
          style={{ background: "var(--portfolio-accent)" }}
        />
        {eyebrow}
      </div>
      <h2
        className="text-3xl font-semibold tracking-tight mb-6"
        style={{ color: "var(--text-p-0)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
