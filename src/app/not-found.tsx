import LocaleNotFound from "./[locale]/not-found";

// Rendered for paths outside a valid locale (e.g. /xyz/about).
// The root layout has no <html>, so this page provides its own.
export default function RootNotFound() {
  return (
    <html lang="en" className="dark">
      <body>
        <LocaleNotFound />
      </body>
    </html>
  );
}
