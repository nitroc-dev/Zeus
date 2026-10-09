import { getTranslations } from "next-intl/server";
import { LocalTime } from "./local-time";

export async function Currently() {
  const t = await getTranslations("currently");

  const rows = [
    {
      label: t("workingOnLabel"),
      value: t("workingOnValue"),
      sub: t("workingSince"),
    },
    {
      label: t("learningLabel"),
      value: t("learningValue"),
      sub: t("learningSublabel"),
    },
    {
      label: t("readingLabel"),
      value: t("readingValue"),
      sub: t("readingSublabel"),
    },
    {
      label: t("locationLabel"),
      value: t("locationValue"),
      sub: <LocalTime />,
    },
  ];

  return (
    <section className="px-6 py-16 w-full max-w-[1180px] mx-auto">
      <h2
        className="text-[28px] font-semibold tracking-tight mb-6"
        style={{ color: "var(--text-p-0)" }}
      >
        {t("title")}
      </h2>
      <dl style={{ borderTop: "1px solid var(--portfolio-line)" }}>
        {rows.map(({ label, value, sub }) => (
          <div
            key={label}
            className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-10 gap-y-1 py-4 border-b"
            style={{ borderColor: "var(--portfolio-line)" }}
          >
            <dt className="text-sm pt-0.5" style={{ color: "var(--text-p-2)" }}>
              {label}
            </dt>
            <dd className="m-0">
              <span
                className="text-[17px] font-medium"
                style={{ color: "var(--text-p-0)" }}
              >
                {value}
              </span>
              <span
                className="text-sm ml-3"
                style={{ color: "var(--text-p-2)" }}
              >
                {sub}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
