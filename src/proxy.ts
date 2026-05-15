import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleIntl = createIntlMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleIntl(request);
}

export const config = {
  matcher: ["/", "/(en|fr)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
