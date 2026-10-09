import type { SidebarRowProps } from "./props";

export function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-2">
      <dt className="text-sm" style={{ color: "var(--text-p-2)" }}>
        {label}
      </dt>
      <dd className="m-0 text-sm" style={{ color: "var(--text-p-0)" }}>
        {value}
      </dd>
    </div>
  );
}
