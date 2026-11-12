export interface NotFoundViewProps {
  title: string;
  body: string;
  backLabel: string;
  /** Rendered by the caller: a locale-aware link, or a plain one outside a locale. */
  backLink: (className: string, label: string) => React.ReactNode;
}
