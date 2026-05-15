export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl font-semibold tracking-tight mb-4"
      style={{ color: "var(--text-p-0)" }}
    >
      {children}
    </h2>
  );
}
