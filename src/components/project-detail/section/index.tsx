import type { SectionProps } from "./props";

export function Section({ title, children }: SectionProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-10 gap-y-4 py-10 border-t"
      style={{ borderColor: "var(--portfolio-line)" }}
    >
      <h2
        className="text-[17px] font-semibold tracking-tight m-0"
        style={{ color: "var(--text-p-0)" }}
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
