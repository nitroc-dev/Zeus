import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-bg min-h-[70vh] flex items-center px-6">
      <div className="w-full max-w-[680px] mx-auto">
        <p
          className="m-0 mb-2 font-mono text-[length:var(--fs-2)]"
          style={{ color: "var(--text-3)" }}
        >
          404
        </p>
        <h1
          className="m-0 mb-3 font-semibold text-[length:var(--fs-6)] tracking-[var(--tracking-title)]"
          style={{ color: "var(--text-1)" }}
        >
          Page not found
        </h1>
        <p
          className="m-0 mb-8 text-[length:var(--fs-3)]"
          style={{ color: "var(--text-2)" }}
        >
          This page doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="ds-btn ds-btn--md ds-btn--primary">
          Back to home
        </Link>
      </div>
    </main>
  );
}
