import type { LighthouseCardProps } from "./props";

export function LighthouseCard({ score, label }: LighthouseCardProps) {
  return (
    <div>
      <p
        className="text-[32px] font-semibold tabular-nums leading-none mb-1.5 m-0"
        style={{ color: "var(--text-p-0)" }}
      >
        {score}
      </p>
      <p className="text-sm m-0" style={{ color: "var(--text-p-2)" }}>
        {label}
      </p>
    </div>
  );
}
