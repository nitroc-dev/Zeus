import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { localePath } from "@/lib/seo";

export default async function NotFound() {
  const [t, locale] = await Promise.all([
    getTranslations("notFound"),
    getLocale(),
  ]);
  return (
    <main className="page-bg min-h-[70vh] flex items-center px-6">
      <div className="w-full max-w-[680px] mx-auto">
        <p
          className="m-0 mb-2 font-mono text-[length:var(--fs-2)]"
          style={{ color: "var(--text-3)" }}
        >
          404
        </p>
        <h1
          className="m-0 mb-3 font-semibold text-[length:var(--fs-6)] tracking-[var(--tracking-title)]"
          style={{ color: "var(--text-1)" }}
        >
          {t("title")}
        </h1>
        <p
          className="m-0 mb-8 text-[length:var(--fs-3)]"
          style={{ color: "var(--text-2)" }}
        >
          {t("body")}
        </p>
        <Link
          href={localePath(locale, "/")}
          className="ds-btn ds-btn--md ds-btn--primary"
        >
          {t("back")}
        </Link>
      </div>
    </main>
  );
}
