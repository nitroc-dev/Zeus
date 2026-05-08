import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export async function CTA() {
  const t = await getTranslations("cta");
  const locale = await getLocale();

  return (
    <section className="px-6 pb-20 pt-0 w-full max-w-[1180px] mx-auto">
      <div
        className="relative rounded-[24px] px-12 py-16 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 0%, var(--portfolio-accent-soft), transparent 70%), linear-gradient(180deg, var(--navy-1), var(--navy-0))",
          border: "1px solid var(--portfolio-line-2)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--portfolio-accent), transparent)",
          }}
        />

        <h2
          className="text-[clamp(32px,4vw,48px)] font-semibold tracking-tight mb-4"
          style={{ color: "var(--text-p-0)" }}
        >
          {t("title")}
        </h2>
        <p
          className="max-w-[540px] mx-auto mb-7 text-[17px] leading-relaxed"
          style={{ color: "var(--text-p-1)" }}
        >
          {t("description")}
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
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
            <MessageSquare className="w-3.5 h-3.5" />
            {t("startConversation")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)] text-[var(--text-p-0)]"
          >
            {t("moreAbout")}
          </Link>
        </div>
      </div>
    </section>
  );
}
