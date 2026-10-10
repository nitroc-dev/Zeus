import { getTranslations } from "next-intl/server";

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
      label: t("homelabLabel"),
      value: t("homelabValue"),
      sub: t("homelabSub"),
    },
    {
      label: t("locationLabel"),
      value: t("locationValue"),
      sub: null,
    },
  ];

  return (
    <section className="px-6 py-10 w-full max-w-[680px] mx-auto">
      <h2
        className="text-[length:var(--fs-5)] font-semibold tracking-[var(--tracking-title)] mb-4"
        style={{ color: "var(--text-p-0)" }}
      >
        {t("title")}
      </h2>
      <dl style={{ borderTop: "1px solid var(--portfolio-line)" }}>
        {rows.map(({ label, value, sub }) => (
          <div
            key={label}
            className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-6 gap-y-1 py-4 border-b"
            style={{ borderColor: "var(--portfolio-line)" }}
          >
            <dt
              className="text-[length:var(--fs-2)] pt-0.5"
              style={{ color: "var(--text-p-2)" }}
            >
              {label}
            </dt>
            <dd className="m-0">
              <span
                className="text-[length:var(--fs-4)] font-medium"
                style={{ color: "var(--text-p-0)" }}
              >
                {value}
              </span>
              {sub && (
                <span
                  className="block mt-0.5 text-[length:var(--fs-2)]"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {sub}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
