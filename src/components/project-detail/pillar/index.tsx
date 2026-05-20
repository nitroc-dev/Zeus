import type { PillarProps } from "./props";

export function Pillar({ label, value }: PillarProps) {
  return (
    <div
      className="rounded-[16px] p-7"
      style={{
        background: "var(--navy-1)",
        border: "1px solid var(--portfolio-line)",
      }}
    >
      <h4
        className="font-mono text-[11px] uppercase tracking-[0.1em] mb-3.5 font-medium"
        style={{ color: "var(--portfolio-accent)" }}
      >
        {label}
      </h4>
      <p
        className="text-[15px] leading-[1.6]"
        style={{ color: "var(--text-p-2)" }}
      >
        {value}
      </p>
    </div>
  );
}
