"use client";

// Rendered for any unknown URL, including /fr/... ones. It is prerendered
// once (in English) and must not read request headers: a server version that
// did made every page render dynamically. The language is picked from the
// path after it mounts, so French URLs switch to French.
import Link from "next/link";
import { useEffect, useState } from "react";
import { NotFoundView } from "@/components/not-found-view";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

export default function RootNotFound() {
  const [isFr, setIsFr] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;
    const fr = path === "/fr" || path.startsWith("/fr/");
    setIsFr(fr);
    document.documentElement.lang = fr ? "fr" : "en";
  }, []);
  const t = (isFr ? fr : en).notFound;
  return (
    <html lang="en">
      <body className="ds">
        <NotFoundView
          title={t.title}
          body={t.body}
          backLabel={t.back}
          backLink={(className, label) => (
            <Link href={isFr ? "/fr" : "/"} className={className}>
              {label}
            </Link>
          )}
        />
      </body>
    </html>
  );
}
