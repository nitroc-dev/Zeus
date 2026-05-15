import type { SidebarRowProps } from "./props";

export function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div
      className="py-3 border-b last:border-0"
      style={{ borderColor: "var(--portfolio-line)" }}
    >
      <h5
        className="font-mono text-[10px] uppercase tracking-[0.1em] font-medium mb-1.5"
        style={{ color: "var(--text-p-3)" }}
      >
        {label}
      </h5>
      <div
        className="text-sm leading-[1.5]"
        style={{ color: "var(--text-p-0)" }}
      >
        {value}
      </div>
    </div>
  );
}
