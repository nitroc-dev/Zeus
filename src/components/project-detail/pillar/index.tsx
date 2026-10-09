import type { PillarProps } from "./props";

export function Pillar({ label, value }: PillarProps) {
  return (
    <div>
      <h3
        className="text-sm font-medium mb-1.5"
        style={{ color: "var(--text-p-2)" }}
      >
        {label}
      </h3>
      <p
        className="text-[15px] leading-[1.6] m-0"
        style={{ color: "var(--text-p-1)" }}
      >
        {value}
      </p>
    </div>
  );
}
