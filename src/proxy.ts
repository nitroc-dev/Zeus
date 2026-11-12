import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleIntl = createIntlMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleIntl(request);
}

export const config = {
  // Generated OG images (/en/…/opengraph-image) are served as-is: letting the
  // locale middleware strip /en would turn every English preview into a redirect.
  matcher: [
    "/",
    "/(en|fr)/((?!.*opengraph-image).*)",
    "/((?!_next|_vercel|api|.*opengraph-image)[^.]*)",
  ],
};
