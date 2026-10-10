"use client";

import { useEffect, useState } from "react";
import type { CopyEmailProps } from "./props";

export function CopyEmail({ email, copyLabel, copiedLabel }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="ml-3 cursor-pointer bg-transparent border-0 p-0 font-mono text-[length:var(--fs-1)] underline underline-offset-4 decoration-[var(--portfolio-line-2)] text-[var(--text-p-2)] hover:text-[var(--text-p-0)] transition-colors"
      aria-live="polite"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
