import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { localePath } from "@/lib/seo";
import { CopyEmail } from "./copy-email";

const EMAIL = "contact@nitroc.xyz";

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
    <section className="px-6 pt-16 pb-10 w-full max-w-[680px] mx-auto">
      <div>
        <div>
          <div className="flex items-center gap-5 sm:gap-6 mb-8">
            <Image
              src="/avatar-c.webp"
              alt=""
              width={96}
              height={96}
              priority
              className="size-16 sm:size-24 rounded-full shrink-0"
              style={{ boxShadow: "0 0 0 1px var(--line-strong)" }}
            />
            <div>
              <h1
                className="m-0 text-[clamp(44px,6vw,72px)] leading-[1] font-semibold tracking-[var(--tracking-metric)]"
                style={{ color: "var(--text-1)" }}
              >
                {t("name")}
              </h1>
              <p
                className="m-0 mt-2 text-[length:var(--fs-4)]"
                style={{ color: "var(--text-3)" }}
              >
                {t("roleLine")}
              </p>
            </div>
          </div>

          <p
            className="text-[length:var(--fs-4)] leading-[1.5] mb-8 max-w-[56ch]"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("tagline")}
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="ds-btn ds-btn--lg ds-btn--primary">
              {t("seeWork")}
            </a>
            <Link
              href={localePath(locale, "/about")}
              className="ds-btn ds-btn--lg ds-btn--secondary"
            >
              {t("about")}
            </Link>
          </div>
        </div>

        <dl
          className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mt-10 pt-6 font-mono text-[length:var(--fs-2)] leading-[1.5]"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          {facts.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt style={{ color: "var(--text-p-2)" }}>{label}</dt>
              <dd style={{ color: "var(--text-p-0)" }}>{value}</dd>
            </div>
          ))}
          <dt style={{ color: "var(--text-p-2)" }}>{t("factEmail")}</dt>
          <dd style={{ color: "var(--text-p-0)" }}>
            <a
              href={`mailto:${EMAIL}`}
              className="underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
              style={{ color: "var(--text-p-0)" }}
            >
              {EMAIL}
            </a>
            <CopyEmail
              email={EMAIL}
              copyLabel={t("copy")}
              copiedLabel={t("copied")}
            />
          </dd>
        </dl>
      </div>
    </section>
  );
}
