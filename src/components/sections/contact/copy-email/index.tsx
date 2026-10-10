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
      className="ds-btn ds-btn--md ds-btn--ghost"
      aria-live="polite"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
