import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProfileHeroProps } from "./props";

export function ProfileHero({
  name,
  role,
  locale,
  contactLabel,
}: ProfileHeroProps) {
  return (
    <section
      className="pt-[60px] pb-10 grid gap-10 items-center"
      style={{ gridTemplateColumns: "200px 1fr" }}
    >
      <Image
        src="/profile.png"
        alt={name}
        width={180}
        height={180}
        className="object-cover shrink-0"
        style={{
          borderRadius: "24px",
          boxShadow:
            "0 0 0 1px var(--portfolio-line-2), 0 20px 60px var(--portfolio-accent-glow)",
        }}
      />
      <div>
        <h1
          className="font-semibold tracking-tight mb-2"
          style={{
            fontSize: "clamp(40px, 5vw, 60px)",
            color: "var(--text-p-0)",
          }}
        >
          {name}
        </h1>
        <p className="text-[17px] mb-4" style={{ color: "var(--text-p-2)" }}>
          {role} · Brussels, Belgium 🇧🇪
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
            style={{
              background: "var(--portfolio-accent)",
              color: "oklch(0.18 0.02 252)",
              boxShadow:
                "0 4px 16px var(--portfolio-accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            {contactLabel}
          </Link>
          <Link
            href="https://github.com/nitroc-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
            style={{ color: "var(--text-p-0)" }}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/corentin-d-02472724b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
            style={{ color: "var(--text-p-0)" }}
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
