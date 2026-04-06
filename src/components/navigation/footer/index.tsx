import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { MailIcon } from "@/components/icons/mail";

export async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("nav");

  const navLinks = [
    { label: t("home"), href: `/${locale}` },
    { label: t("about"), href: `/${locale}/about` },
    { label: t("projects"), href: `/${locale}/projects` },
    { label: t("contact"), href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: `/${locale}/privacy` },
  ];

  return (
    <footer className="px-6 pt-12 pb-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href={`/${locale}`} className="text-xl font-bold text-white">
              Corentin<span className="text-blue-600">.</span>
            </Link>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Full Stack Developer based in Brussels.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/nitroc-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/corentin-d-02472724b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@nitroc.xyz"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </Link>
              </li>
                <li>
                  <Link
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    CV
                  </Link>
                </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Corentin. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/nitroc-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/corentin-d-02472724b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:contact@nitroc.xyz"
              aria-label="Email"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
