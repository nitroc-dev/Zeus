import type { Metadata } from "next";
import { getUsesData } from "@/lib/data";
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
    alternates: {
      canonical: `https://nitroc.xyz/${locale}/uses`,
      languages: {
        en: "https://nitroc.xyz/en/uses",
        fr: "https://nitroc.xyz/fr/uses",
      },
    },
  };
}

export default async function UsesPage({ params }: PageProps) {
  const { locale } = await params;
  const tr = createTranslator(locale);
  const usesData = await getUsesData();

  return (
    <main className="relative overflow-hidden page-bg">
      <div className="px-8 max-w-[1180px] mx-auto">
        {/* Hero */}
        <section className="pt-[60px] pb-8">
          <h1
            className="font-semibold tracking-tight mb-3.5"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              color: "var(--text-p-0)",
            }}
          >
            What I <span style={{ color: "var(--portfolio-accent)" }}>use</span>
          </h1>
          <p
            className="max-w-[680px] text-[17px] leading-relaxed"
            style={{ color: "var(--text-p-1)" }}
          >
            An honest list of the hardware, software, and small tools I reach
            for daily. Inspired by{" "}
            <code
              className="font-mono px-1.5 py-0.5 rounded text-sm"
              style={{ background: "var(--navy-2)" }}
            >
              uses.tech
            </code>
            . Updated whenever I actually change something.
          </p>
        </section>

        {/* Sections grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
          {usesData.map((section) => {
            const title = tr(section, "title") ?? section.titleEn;
            return (
              <section key={section.id} className="py-2">
                <h2
                  className="flex items-center gap-2.5 text-[22px] font-semibold tracking-tight mb-4"
                  style={{ color: "var(--text-p-0)" }}
                >
                  <span
                    className="w-7 h-7 rounded-lg grid place-items-center font-mono text-sm font-semibold shrink-0"
                    style={{
                      background: "var(--portfolio-accent-soft)",
                      color: "var(--portfolio-accent)",
                    }}
                  >
                    {section.icon}
                  </span>
                  {title}
                </h2>
                <div className="flex flex-col">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid gap-6 py-4 border-b text-[15px] last:border-b-0"
                      style={{
                        gridTemplateColumns: "200px 1fr",
                        borderColor: "var(--portfolio-line)",
                      }}
                    >
                      <div>
                        <p
                          className="font-medium"
                          style={{ color: "var(--text-p-0)" }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="font-mono text-[11px] uppercase tracking-[0.08em] mt-1"
                          style={{ color: "var(--text-p-3)" }}
                        >
                          {item.sub}
                        </p>
                      </div>
                      <p
                        className="leading-[1.55]"
                        style={{ color: "var(--text-p-2)" }}
                      >
                        {tr(item, "why") ?? item.whyEn}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
