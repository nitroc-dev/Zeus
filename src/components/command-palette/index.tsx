"use client";

import { useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "@/i18n/navigation";
import type { CommandPaletteProps } from "./props";

export const OPEN_PALETTE_EVENT = "zeus:open-palette";

export function CommandPalette({ items }: CommandPaletteProps) {
  const t = useTranslations("palette");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q),
    );
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const go = (href: string) => {
    close();
    router.push(href);
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      go(results[active].href);
    }
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: click-outside to dismiss; Escape closes from the keyboard
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh]"
      style={{ background: "var(--scrim)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("label")}
        className="w-full max-w-[520px] overflow-hidden rounded-[var(--radius-lg)]"
        style={{
          background: "var(--surface-overlay)",
          border: "1px solid var(--line-strong)",
          boxShadow: "var(--shadow-pop)",
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onInputKey}
          placeholder={t("placeholder")}
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={
            results[active] ? `${listId}-${results[active].id}` : undefined
          }
          className="w-full h-12 px-4 bg-transparent outline-none text-[length:var(--fs-3)]"
          style={{
            color: "var(--text-1)",
            borderBottom: "1px solid var(--line)",
            boxShadow: "none",
          }}
        />
        <div
          id={listId}
          role="listbox"
          className="p-1.5 max-h-[50vh] overflow-y-auto"
        >
          {results.length === 0 && (
            <div
              className="px-3 py-3 text-[length:var(--fs-2)]"
              style={{ color: "var(--text-3)" }}
            >
              {t("empty")}
            </div>
          )}
          {results.map((item, i) => (
            <div
              key={item.id}
              tabIndex={-1}
              id={`${listId}-${item.id}`}
              role="option"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => {
                e.preventDefault();
                go(item.href);
              }}
              className="flex items-center justify-between gap-4 px-3 h-10 rounded-[var(--radius-ctl)] cursor-pointer"
              style={{
                background: i === active ? "var(--hover)" : "transparent",
              }}
            >
              <span
                className="text-[length:var(--fs-3)]"
                style={{ color: "var(--text-1)" }}
              >
                {item.label}
              </span>
              <span
                className="text-[length:var(--fs-1)]"
                style={{ color: "var(--text-3)" }}
              >
                {item.hint}
              </span>
            </div>
          ))}
        </div>
        <div
          className="flex gap-4 px-4 h-9 items-center text-[length:var(--fs-1)]"
          style={{ color: "var(--text-3)", borderTop: "1px solid var(--line)" }}
        >
          <span>
            <kbd className="font-mono">↑↓</kbd> {t("navigate")}
          </span>
          <span>
            <kbd className="font-mono">↵</kbd> {t("open")}
          </span>
          <span>
            <kbd className="font-mono">esc</kbd> {t("close")}
          </span>
        </div>
      </div>
    </div>
  );
}
