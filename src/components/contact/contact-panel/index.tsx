import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function ContactPanel() {
  const t = await getTranslations("contact");

  const metaItems = [
    {
      href: "mailto:contact@nitroc.xyz",
      icon: <Mail className="size-4" />,
      label: "contact@nitroc.xyz",
      sub: t("metaEmailSub"),
    },
    {
      href: null,
      icon: <MapPin className="size-4" />,
      label: t("metaLocationLabel"),
      sub: t("metaLocationSub"),
    },
    {
      href: "https://github.com/nitroc-dev",
      icon: <Github className="size-4" />,
      label: "github.com/nitroc-dev",
      sub: t("metaGithubSub"),
    },
    {
      href: "https://www.linkedin.com/in/corentin-d-02472724b",
      icon: <Linkedin className="size-4" />,
      label: "linkedin.com/in/corentin-d",
      sub: t("metaLinkedinSub"),
    },
  ];

  return (
    <main className="relative overflow-hidden page-bg">
      <section className="px-6 sm:px-8 pt-[60px] pb-24 max-w-[720px] mx-auto">
        <div
          className="flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] uppercase mb-3.5"
          style={{ color: "var(--portfolio-accent)" }}
        >
          <span
            className="w-6 h-px"
            style={{ background: "var(--portfolio-accent)" }}
          />
          {t("eyebrow")}
        </div>
        <h1
          className="font-semibold tracking-tight mb-5"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "1.05",
            color: "var(--text-p-0)",
          }}
        >
          {t("title")}
        </h1>
        <p
          className="text-[17px] mb-10 max-w-[520px] leading-relaxed"
          style={{ color: "var(--text-p-1)" }}
        >
          {t("description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metaItems.map(({ href, icon, label, sub }) => {
            const inner = (
              <>
                <span
                  className="size-8 rounded-lg grid place-items-center shrink-0"
                  style={{
                    background: "var(--portfolio-accent-soft)",
                    color: "var(--portfolio-accent)",
                  }}
                >
                  {icon}
                </span>
                <div className="min-w-0">
                  <b
                    className="block text-sm font-medium truncate"
                    style={{ color: "var(--text-p-0)" }}
                  >
                    {label}
                  </b>
                  <small
                    className="font-mono text-xs"
                    style={{ color: "var(--text-p-2)" }}
                  >
                    {sub}
                  </small>
                </div>
              </>
            );
            const cls =
              "flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors text-sm border";
            const baseStyle = { background: "var(--navy-1)" };
            return href ? (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`${cls} border-[var(--portfolio-line)] hover:border-[var(--portfolio-accent)]`}
                style={baseStyle}
              >
                {inner}
              </Link>
            ) : (
              <div
                key={label}
                className={`${cls} border-[var(--portfolio-line)]`}
                style={baseStyle}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
