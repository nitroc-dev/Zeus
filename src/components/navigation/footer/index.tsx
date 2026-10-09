import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { localePath } from "@/lib/seo";

export async function Footer() {
  const [locale, tFooter] = await Promise.all([
    getLocale(),
    getTranslations("footer"),
  ]);

  const links = [
    { label: "GitHub", href: "https://github.com/nitroc-dev" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/corentin-d-02472724b",
    },
    { label: "Email", href: "mailto:contact@nitroc.xyz" },
    { label: tFooter("privacyPolicy"), href: localePath(locale, "/privacy") },
  ];

  return (
    <footer
      className="mt-auto"
      style={{ borderTop: "1px solid var(--portfolio-line)" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
        <p className="m-0" style={{ color: "var(--text-p-2)" }}>
          &copy; {new Date().getFullYear()} Corentin. {tFooter("tagline")}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 m-0 p-0 list-none">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="transition-colors text-[var(--text-p-1)] hover:text-[var(--text-p-0)]"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
