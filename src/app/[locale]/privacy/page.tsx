import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const [{ locale }, t] = await Promise.all([
    params,
    getTranslations("privacy"),
  ]);
  return {
    title: `${t("title")} - Corentin`,
    description: t("summary"),
    alternates: buildAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPolicy() {
  const t = await getTranslations("privacy");

  return (
    <main
      className="relative overflow-hidden"
      style={{ background: "var(--navy-0)" }}
    >
      <section className="relative px-6 py-20">
        <div className="w-full max-w-[720px] mx-auto">
          <div className="mb-12">
            <h1
              className="text-4xl font-semibold tracking-[var(--tracking-title)]"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("title")}
            </h1>
            <p
              className="mt-2 text-[length:var(--fs-2)]"
              style={{ color: "var(--text-p-3)" }}
            >
              {t("lastUpdated")}
            </p>
          </div>

          <div className="space-y-10" style={{ color: "var(--text-p-1)" }}>
            <p className="leading-relaxed">{t("summary")}</p>
            {(
              [
                ["analyticsTitle", "analyticsBody"],
                ["hostingTitle", "hostingBody"],
              ] as const
            ).map(([title, body]) => (
              <section key={title} className="space-y-3">
                <h2
                  className="text-[length:var(--fs-4)] font-semibold"
                  style={{ color: "var(--text-p-0)" }}
                >
                  {t(title)}
                </h2>
                <p className="leading-relaxed">{t(body)}</p>
              </section>
            ))}
            <section className="space-y-3">
              <h2
                className="text-[length:var(--fs-4)] font-semibold"
                style={{ color: "var(--text-p-0)" }}
              >
                {t("contactTitle")}
              </h2>
              <p className="leading-relaxed">
                {t("contactBody")}{" "}
                <a
                  href="mailto:contact@nitroc.xyz"
                  className="underline transition-opacity hover:opacity-80"
                  style={{ color: "var(--portfolio-accent)" }}
                >
                  contact@nitroc.xyz
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
