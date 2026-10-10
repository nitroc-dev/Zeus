import { getTranslations } from "next-intl/server";
import { CopyEmail } from "@/components/contact/copy-email";

export async function ContactPanel() {
  const t = await getTranslations("contact");

  const rows = [
    {
      label: t("labelEmail"),
      value: "contact@nitroc.xyz",
      href: "mailto:contact@nitroc.xyz",
      note: t("metaEmailSub"),
      copy: true,
    },
    {
      label: "GitHub",
      value: "github.com/nitroc-dev",
      href: "https://github.com/nitroc-dev",
      note: t("metaGithubSub"),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/corentin-d",
      href: "https://www.linkedin.com/in/corentin-d-02472724b",
      note: null,
    },
    {
      label: t("labelLocation"),
      value: t("metaLocationLabel"),
      href: null,
      note: t("metaLocationSub"),
    },
  ];

  return (
    <main className="relative overflow-hidden page-bg flex items-center min-h-[calc(100svh-60px)]">
      <section className="w-full px-6 py-16 max-w-[680px] mx-auto">
        <h1
          className="text-[clamp(48px,6vw,72px)] leading-[1] font-semibold tracking-[var(--tracking-metric)] mb-5"
          style={{ color: "var(--text-p-0)" }}
        >
          {t("title")}
        </h1>
        <p
          className="text-[length:var(--fs-4)] leading-[1.5] mb-12 max-w-[48ch]"
          style={{ color: "var(--text-p-1)" }}
        >
          {t("description")}
        </p>
        <dl
          className="m-0 max-w-[760px]"
          style={{ borderTop: "1px solid var(--portfolio-line)" }}
        >
          {rows.map(({ label, value, href, note, copy }) => {
            const external = href?.startsWith("http");
            return (
              <div
                key={label}
                className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-8 gap-y-1 py-4 border-b items-baseline"
                style={{ borderColor: "var(--portfolio-line)" }}
              >
                <dt
                  className="text-[length:var(--fs-2)]"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {label}
                </dt>
                <dd className="m-0 text-[length:var(--fs-4)]">
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
                      style={{ color: "var(--text-p-0)" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-p-0)" }}>{value}</span>
                  )}
                  {copy && (
                    <span className="ml-2 align-middle">
                      <CopyEmail
                        email={value}
                        copyLabel={t("copy")}
                        copiedLabel={t("copied")}
                      />
                    </span>
                  )}
                </dd>
                {note && (
                  <dd
                    className="m-0 text-[length:var(--fs-2)] sm:col-start-2"
                    style={{ color: "var(--text-p-2)" }}
                  >
                    {note}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </section>
    </main>
  );
}
