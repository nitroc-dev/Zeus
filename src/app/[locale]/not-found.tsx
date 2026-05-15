import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      className="min-h-[80vh] flex items-center justify-center px-6"
      style={{ background: "var(--navy-0)" }}
    >
      <div className="text-center space-y-6 max-w-md">
        <p
          className="text-8xl font-black"
          style={{ color: "var(--portfolio-accent)" }}
        >
          404
        </p>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-p-0)" }}>
          Page not found
        </h1>
        <p className="leading-relaxed" style={{ color: "var(--text-p-2)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
