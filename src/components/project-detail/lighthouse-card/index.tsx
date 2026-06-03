import type { LighthouseCardProps } from "./props";

export function LighthouseCard({ score, label }: LighthouseCardProps) {
  const pct = Math.min(score, 100);
  return (
    <div
      className="rounded-xl p-6 text-center"
      style={{
        background: "var(--navy-1)",
        border: "1px solid var(--portfolio-line)",
      }}
    >
      <div
        className="size-20 rounded-full mx-auto mb-3 grid place-items-center relative"
        style={{
          background: `conic-gradient(var(--portfolio-ok, oklch(0.74 0.16 145)) ${pct}%, rgba(255,255,255,0.08) 0)`,
        }}
      >
        <div
          className="absolute inset-1.5 rounded-full grid place-items-center"
          style={{ background: "var(--navy-1)" }}
        >
          <span
            className="text-xl font-semibold"
            style={{ color: "var(--text-p-0)" }}
          >
            {score}
          </span>
        </div>
      </div>
      <h5
        className="font-mono text-[11px] uppercase tracking-[0.1em] mb-1 font-medium"
        style={{ color: "var(--text-p-2)" }}
      >
        {label}
      </h5>
    </div>
  );
}
