import { getTranslations } from "next-intl/server";

export default async function PrivacyPolicy() {
  const t = await getTranslations("privacy");

  return (
    <main className="relative overflow-hidden" style={{ background: "var(--navy-0)" }}>
      <section className="relative px-6 py-20">
        <div className="w-full max-w-[720px] mx-auto">

          <div className="mb-12">
            <div
              className="flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] uppercase mb-3.5"
              style={{ color: "var(--portfolio-accent)" }}
            >
              <span className="w-6 h-px" style={{ background: "var(--portfolio-accent)" }} />
              Legal
            </div>
            <h1 className="text-4xl font-semibold tracking-tight" style={{ color: "var(--text-p-0)" }}>
              {t("title")}
            </h1>
            <p className="mt-2 text-sm font-mono" style={{ color: "var(--text-p-3)" }}>
              {t("lastUpdated")}
            </p>
          </div>

          <div className="space-y-10" style={{ color: "var(--text-p-1)" }}>
            <section className="space-y-3">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-p-0)" }}>
                {t("informationCollected")}
              </h2>
              <p className="leading-relaxed">{t("collectDescription")}</p>
              <ul className="space-y-1.5 ml-4 list-disc list-inside" style={{ color: "var(--text-p-2)" }}>
                <li>{t("name")}</li>
                <li>{t("emailAddress")}</li>
                <li>{t("messageContent")}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-p-0)" }}>
                {t("howWeUse")}
              </h2>
              <p className="leading-relaxed">{t("useDescription")}</p>
              <ul className="space-y-1.5 ml-4 list-disc list-inside" style={{ color: "var(--text-p-2)" }}>
                <li>{t("respondInquiries")}</li>
                <li>{t("provideServices")}</li>
                <li>{t("communicateProjects")}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-p-0)" }}>
                Data Protection
              </h2>
              <p className="leading-relaxed">
                Your personal information is never shared with third parties without your consent,
                stored securely using industry-standard practices, and retained only as long as
                necessary to fulfill the stated purpose.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-p-0)" }}>
                Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal
                data, and to withdraw consent at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-p-0)" }}>
                Contact
              </h2>
              <p className="leading-relaxed">
                Questions about this policy? Reach out through the{" "}
                <span style={{ color: "var(--portfolio-accent)" }}>contact form</span> on the site.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
