import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { localePath } from "@/lib/seo";

export async function Hero() {
  const [t, locale] = await Promise.all([getTranslations("hero"), getLocale()]);

  const facts = [
    { label: t("factRole"), value: t("factRoleValue") },
    { label: t("factBased"), value: t("factBasedValue") },
    { label: t("factAt"), value: "Eachstapp, 2024" },
    { label: t("factStack"), value: "TypeScript, React, React Native, .NET" },
    { label: t("factSpeaks"), value: t("factSpeaksValue") },
    { label: t("factBuilding"), value: "Helios, Selene" },
  ];

  return (
    <section className="px-6 pt-24 pb-20 w-full max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-end">
        <div>
          <h1
            className="text-[clamp(56px,8vw,104px)] leading-[0.95] font-semibold tracking-[-0.03em] mb-8"
            style={{ color: "var(--text-p-0)" }}
          >
            {t("name")}
          </h1>

          <p
            className="text-[20px] leading-[1.5] mb-9 max-w-[34ch]"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("tagline")}
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center px-4 py-2.5 rounded-md text-sm font-medium transition-colors hover:brightness-110"
              style={{
                background: "var(--portfolio-accent)",
                color: "var(--portfolio-accent-ink)",
              }}
            >
              {t("seeWork")}
            </a>
            <Link
              href={localePath(locale, "/about")}
              className="inline-flex items-center px-4 py-2.5 rounded-md text-sm font-medium transition-colors border border-[var(--portfolio-line-2)] text-[var(--text-p-0)] hover:bg-[var(--navy-2)]"
            >
              {t("about")}
            </Link>
          </div>
        </div>

        <dl
          className="hidden lg:grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-[13px] leading-[1.5] pl-6"
          style={{ borderLeft: "1px solid var(--portfolio-line-2)" }}
        >
          {facts.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt style={{ color: "var(--text-p-2)" }}>{label}</dt>
              <dd style={{ color: "var(--text-p-0)" }}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
