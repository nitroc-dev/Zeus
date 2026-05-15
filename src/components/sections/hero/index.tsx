import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = await getLocale();

  return (
    <section className="px-6 py-20 w-full max-w-[1180px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-15 items-center">
        {/* Left: copy */}
        <div>
          {/* Heading */}
          <h1
            className="text-[clamp(48px,6vw,80px)] leading-[1.02] font-semibold tracking-tight mb-6"
            style={{ color: "var(--text-p-0)" }}
          >
            {t("greeting")}{" "}
            <span style={{ color: "var(--portfolio-accent)" }}>
              {t("name")}
            </span>{" "}
            <br />
            {t("headline")}
          </h1>

          {/* Tagline */}
          <p
            className="text-[19px] leading-[1.55] mb-8 max-w-[540px]"
            style={{ color: "var(--text-p-1)" }}
          >
            {t("tagline")}
          </p>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
              style={{
                background: "var(--portfolio-accent)",
                color: "oklch(0.18 0.02 252)",
                boxShadow:
                  "0 4px 16px var(--portfolio-accent-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              {t("seeWork")}
            </a>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)] text-[var(--text-p-0)]"
            >
              {t("about")}
            </Link>
            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all hover:bg-[var(--navy-2)]"
              style={{ color: "var(--text-p-1)" }}
            >
              <Download className="w-3.5 h-3.5" />
              {t("downloadCV")}
            </Link>
          </div>
        </div>

        {/* Right: terminal ID card */}
        <div
          className="hidden lg:block rounded-[14px] overflow-hidden font-mono text-[13px] relative"
          style={{
            background: "linear-gradient(180deg, var(--navy-2), var(--navy-1))",
            border: "1px solid var(--portfolio-line-2)",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.04) inset",
          }}
        >
          {/* Radial glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(500px 200px at 100% 0%, var(--portfolio-accent-soft), transparent 60%)",
            }}
          />

          {/* Title bar */}
          <div
            className="flex items-center gap-1.5 px-3.5 py-2.5 relative"
            style={{
              background: "var(--navy-3)",
              borderBottom: "1px solid var(--portfolio-line)",
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span
              className="ml-3 text-[11px] tracking-wider"
              style={{ color: "var(--text-p-2)" }}
            >
              ~/corentin - whoami.json
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="px-[22px] py-[22px] leading-[1.85] relative"
            style={{ color: "var(--text-p-0)" }}
          >
            <span style={{ color: "var(--portfolio-accent)" }}>$</span>{" "}
            <span>cat whoami.json</span>
            <br />
            <span style={{ color: "var(--text-p-2)" }}>{"{"}</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"name"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>"Corentin"</span>
            <span style={{ color: "var(--text-p-2)" }}>,</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"role"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>
              "Full-stack dev"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>,</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"location"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>
              "Brussels, BE"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>,</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"company"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>"Eachstapp"</span>
            <span style={{ color: "var(--text-p-2)" }}>,</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"since"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: </span>
            <span style={{ color: "oklch(0.78 0.16 75)" }}>2024</span>
            <span style={{ color: "var(--text-p-2)" }}>,</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"stack"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: [</span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>"TS"</span>
            <span style={{ color: "var(--text-p-2)" }}>, </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>"React"</span>
            <span style={{ color: "var(--text-p-2)" }}>, </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>".NET"</span>
            <span style={{ color: "var(--text-p-2)" }}>],</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"speaks"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: [</span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>"FR"</span>
            <span style={{ color: "var(--text-p-2)" }}>, </span>
            <span style={{ color: "oklch(0.78 0.16 145)" }}>"EN"</span>
            <span style={{ color: "var(--text-p-2)" }}>],</span>
            <br />
            <span
              style={{
                color:
                  "color-mix(in oklch, var(--portfolio-accent) 75%, white)",
              }}
            >
              &nbsp;&nbsp;"available"
            </span>
            <span style={{ color: "var(--text-p-2)" }}>: </span>
            <span style={{ color: "var(--portfolio-ok)" }}>true</span>
            <br />
            <span style={{ color: "var(--text-p-2)" }}>{"}"}</span>
            <br />
            <span style={{ color: "var(--portfolio-accent)" }}>$</span>{" "}
            <span
              className="inline-block w-[7px] h-[14px] align-[-2px] ml-0.5"
              style={{
                background: "var(--portfolio-accent)",
                animation: "cursor-blink 1s steps(2) infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
