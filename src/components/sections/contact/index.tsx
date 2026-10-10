import { getTranslations } from "next-intl/server";
import { CopyEmail } from "@/components/sections/contact/copy-email";

const EMAIL = "contact@nitroc.xyz";

export async function Contact() {
  const t = await getTranslations("contact");

  const rows = [
    {
      label: t("labelEmail"),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
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
  ];

  return (
    <section
      id="contact"
      className="px-6 pt-10 pb-16 w-full max-w-[680px] mx-auto scroll-mt-16"
    >
      <h2
        className="text-[length:var(--fs-5)] font-semibold tracking-[var(--tracking-title)] mb-2"
        style={{ color: "var(--text-p-0)" }}
      >
        {t("title")}
      </h2>
      <p
        className="text-[length:var(--fs-3)] leading-[1.5] mb-4"
        style={{ color: "var(--text-p-2)" }}
      >
        {t("description")}
      </p>
      <dl
        className="m-0"
        style={{ borderTop: "1px solid var(--portfolio-line)" }}
      >
        {rows.map(({ label, value, href, note, copy }) => {
          const external = href.startsWith("http");
          return (
            <div
              key={label}
              className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-6 gap-y-1 py-4 border-b items-baseline"
              style={{ borderColor: "var(--portfolio-line)" }}
            >
              <dt
                className="text-[length:var(--fs-2)]"
                style={{ color: "var(--text-p-2)" }}
              >
                {label}
              </dt>
              <dd className="m-0 text-[length:var(--fs-4)]">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="font-medium underline underline-offset-4 decoration-[var(--portfolio-line-2)] hover:decoration-[var(--text-p-1)]"
                  style={{ color: "var(--text-p-0)" }}
                >
                  {value}
                </a>
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
  );
}
