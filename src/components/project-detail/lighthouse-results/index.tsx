import { Section } from "@/components/project-detail/section";
import type { LighthouseRun } from "@/types";
import type { LighthouseResultsProps } from "./props";

type ScoreKey = "performance" | "accessibility" | "bestPractices" | "seo";
type MetricKey = "fcp" | "lcp" | "tbt" | "cls" | "si";

const SCORES: { key: ScoreKey; label: string }[] = [
  { key: "performance", label: "perfScorePerformance" },
  { key: "accessibility", label: "perfScoreAccessibility" },
  { key: "bestPractices", label: "perfScoreBestPractices" },
  { key: "seo", label: "perfScoreSeo" },
];

// Lighthouse's own "good" thresholds; a value above it is flagged.
const METRICS: { key: MetricKey; label: string; good: number }[] = [
  { key: "fcp", label: "perfFcp", good: 1.8 },
  { key: "lcp", label: "perfLcp", good: 2.5 },
  { key: "tbt", label: "perfTbt", good: 200 },
  { key: "cls", label: "perfCls", good: 0.1 },
  { key: "si", label: "perfSi", good: 3.4 },
];

function scoreColor(score: number) {
  if (score >= 90) return "var(--ok)";
  if (score >= 50) return "var(--warn)";
  return "var(--bad)";
}

export function LighthouseResults({
  report,
  locale,
  t,
}: LighthouseResultsProps) {
  const date = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(report.date));
  const seconds = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const plain = new Intl.NumberFormat(locale, { maximumFractionDigits: 3 });

  const formatMetric = (key: MetricKey, value: number) => {
    if (key === "tbt") return `${plain.format(value)} ms`;
    if (key === "cls") return plain.format(value);
    return `${seconds.format(value)} s`;
  };

  const runs: { label: string; run: LighthouseRun }[] = [
    { label: t("perfMobile"), run: report.mobile },
    { label: t("perfDesktop"), run: report.desktop },
  ];

  return (
    <Section title={t("perfTitle")}>
      <p
        className="m-0 mb-6 text-[length:var(--fs-3)] leading-[1.6] max-w-[68ch]"
        style={{ color: "var(--text-p-1)" }}
      >
        {t("perfLead", { version: report.version, date })}
      </p>

      <div className="grid gap-6">
        {runs.map(({ label, run }) => (
          <div key={label}>
            <h3
              className="m-0 mb-3 text-[length:var(--fs-2)] font-medium"
              style={{ color: "var(--text-p-2)" }}
            >
              {label}
            </h3>
            <dl className="m-0 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
              {SCORES.map(({ key, label: scoreLabel }) => (
                <div key={key} className="flex flex-col-reverse gap-1">
                  <dt
                    className="text-[length:var(--fs-2)]"
                    style={{ color: "var(--text-p-2)" }}
                  >
                    {t(scoreLabel)}
                  </dt>
                  <dd
                    className="m-0 flex items-center gap-2 text-[length:var(--fs-6)] font-semibold leading-none tabular-nums"
                    style={{ color: "var(--text-p-0)" }}
                  >
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full shrink-0"
                      style={{ background: scoreColor(run[key]) }}
                    />
                    {run[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-[length:var(--fs-2)] tabular-nums">
          <thead>
            <tr style={{ color: "var(--text-p-2)" }}>
              <th className="text-left font-normal py-2 pr-4">
                {t("perfMetric")}
              </th>
              <th className="text-right font-normal py-2 px-4">
                {t("perfMobile")}
              </th>
              <th className="text-right font-normal py-2 pl-4">
                {t("perfDesktop")}
              </th>
            </tr>
          </thead>
          <tbody>
            {METRICS.map(({ key, label, good }) => (
              <tr
                key={key}
                className="border-t"
                style={{ borderColor: "var(--line)" }}
              >
                <td
                  className="py-2.5 pr-4"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {t(label)}
                </td>
                {[report.mobile[key], report.desktop[key]].map((value, i) => (
                  <td
                    // biome-ignore lint/suspicious/noArrayIndexKey: fixed two-column row (mobile, desktop)
                    key={i}
                    className={`py-2.5 text-right font-mono ${i === 0 ? "px-4" : "pl-4"}`}
                    style={{
                      color: value > good ? "var(--warn)" : "var(--text-p-0)",
                    }}
                  >
                    {formatMetric(key, value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p
        className="m-0 mt-4 text-[length:var(--fs-2)]"
        style={{ color: "var(--text-p-2)" }}
      >
        {t("perfMobileNote")}{" "}
        <a
          href={report.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
          style={{ color: "var(--text-p-1)" }}
        >
          {t("perfReport")} ↗
        </a>
      </p>
    </Section>
  );
}
