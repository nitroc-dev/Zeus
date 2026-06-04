import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export async function Footer() {
  const [locale, tNav, tFooter] = await Promise.all([
    getLocale(),
    getTranslations("nav"),
    getTranslations("footer"),
  ]);

  const navLinks = [
    { label: tNav("home"), href: `/${locale}` },
    { label: tNav("about"), href: `/${locale}/about` },
    { label: tNav("uses"), href: `/${locale}/uses` },
    { label: tNav("contact"), href: `/${locale}/contact` },
  ];

  const legalLinks = [{ label: tFooter("privacyPolicy"), href: `/${locale}/privacy` }];

  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: "1px solid var(--portfolio-line)",
        background: "var(--navy-1)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8 pt-14 pb-6 grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2.5 font-semibold tracking-tight no-underline mb-3"
            style={{ color: "var(--text-p-0)" }}
          >
            <span
              className="size-7 rounded-lg grid place-items-center font-mono text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--portfolio-accent), color-mix(in oklch, var(--portfolio-accent) 50%, #6b21a8))",
                boxShadow: "0 0 0 1px var(--portfolio-line-2)",
              }}
            >
              C
            </span>
            Corentin
          </Link>
          <p className="text-sm" style={{ color: "var(--text-p-3)" }}>
            {tFooter("tagline")}
          </p>
        </div>

        {/* Nav */}
        <div>
          <h5
            className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
            style={{ color: "var(--text-p-3)" }}
          >
            {tFooter("navigation")}
          </h5>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:[color:var(--portfolio-accent)]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5
            className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
            style={{ color: "var(--text-p-3)" }}
          >
            {tFooter("social")}
          </h5>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: "GitHub", href: "https://github.com/nitroc-dev" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/corentin-d-02472724b",
              },
              { label: "Email", href: "mailto:contact@nitroc.xyz" },
              { label: tFooter("cvResume"), href: "/cv.pdf" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={
                    link.href.startsWith("http") || link.href.endsWith(".pdf")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm transition-colors hover:[color:var(--portfolio-accent)]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5
            className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
            style={{ color: "var(--text-p-3)" }}
          >
            {tFooter("legal")}
          </h5>
          <ul className="flex flex-col gap-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:[color:var(--portfolio-accent)]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1180px] mx-auto px-8 py-5 flex justify-between items-center font-mono text-xs"
        style={{
          borderTop: "1px solid var(--portfolio-line)",
          color: "var(--text-p-3)",
        }}
      >
        <span suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Corentin. {tFooter("allRightsReserved")}
        </span>
        <div className="flex gap-3">
          {[
            {
              href: "https://github.com/nitroc-dev",
              label: "GitHub",
              Icon: Github,
            },
            {
              href: "https://www.linkedin.com/in/corentin-d-02472724b",
              label: "LinkedIn",
              Icon: Linkedin,
            },
            {
              href: "mailto:contact@nitroc.xyz",
              label: "Email",
              Icon: Mail,
            },
          ].map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="size-8 grid place-items-center rounded-lg transition-all hover:[border-color:var(--portfolio-accent)] hover:[color:var(--portfolio-accent)]"
              style={{
                background: "var(--navy-2)",
                border: "1px solid var(--portfolio-line)",
                color: "var(--text-p-1)",
              }}
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
