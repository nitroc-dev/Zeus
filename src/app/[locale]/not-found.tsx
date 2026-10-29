"use client";

// A client component on purpose: a server not-found here would read the
// locale from request headers and make every page under [locale] dynamic.
import { useTranslations } from "next-intl";
import { NotFoundView } from "@/components/not-found-view";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <NotFoundView
      title={t("title")}
      body={t("body")}
      backLabel={t("back")}
      backLink={(className, label) => (
        <Link href="/" className={className}>
          {label}
        </Link>
      )}
    />
  );
}
