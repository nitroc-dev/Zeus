import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getUsesData } from "@/lib/data";
import { buildAlternates } from "@/lib/seo";
import { createTranslator } from "@/utils/translate";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Uses - Corentin",
    description:
      "An honest list of the hardware, software, and small tools I reach for daily.",
    alternates: buildAlternates(locale, "/uses"),
  };
}

export default async function UsesPage({ params }: PageProps) {
  const { locale } = await params;
  const [tr, t] = await Promise.all([
    Promise.resolve(createTranslator(locale)),
    getTranslations("uses"),
  ]);
  const usesData = await getUsesData();

  return (
    <main className="relative overflow-hidden page-bg">
      <div className="px-6 max-w-[680px] mx-auto pb-20">
        <section className="pt-16 pb-8">
          <h1
            className="text-[clamp(48px,6vw,72px)] leading-[1] font-semibold tracking-[var(--tracking-metric)] mb-5"
            style={{ color: "var(--text-p-0)" }}
          >
            {t("title")}
          </h1>
          <p
            className="max-w-[60ch] text-[length:var(--fs-4)] leading-[1.65] m-0"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("pageDesc1")}{" "}
            <a
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
            >
              uses.tech
            </a>
            {t("pageDesc2")}
          </p>
        </section>

        {usesData.map((section) => {
          const title = tr(section, "title") ?? section.titleEn;
          return (
            <section
              key={section.id}
              className="grid grid-cols-1 gap-y-4 py-8 border-t"
              style={{ borderColor: "var(--portfolio-line)" }}
            >
              <h2
                className="text-[length:var(--fs-4)] font-semibold tracking-[var(--tracking-title)] m-0"
                style={{ color: "var(--text-p-0)" }}
              >
                {title}
              </h2>
              <dl className="m-0">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-8 gap-y-1 py-3 first:pt-0"
                  >
                    <dt>
                      <span
                        className="block text-[length:var(--fs-3)] font-medium"
                        style={{ color: "var(--text-p-0)" }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="block text-[length:var(--fs-2)]"
                        style={{ color: "var(--text-p-2)" }}
                      >
                        {item.sub}
                      </span>
                    </dt>
                    <dd
                      className="m-0 text-[length:var(--fs-3)] leading-[1.6] max-w-[60ch]"
                      style={{ color: "var(--text-p-1)" }}
                    >
                      {tr(item, "why") ?? item.whyEn}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>
    </main>
  );
}
