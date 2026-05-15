import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import type { MarkdownContentProps } from "./props";

const components: Components = {
  h2: ({ children }) => (
    <h2
      className="text-2xl font-semibold mt-8 mb-4"
      style={{ color: "var(--text-p-0)" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-xl font-semibold mt-6 mb-3"
      style={{ color: "var(--text-p-0)" }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-[1.7]" style={{ color: "var(--text-p-1)" }}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 pl-5 space-y-1.5" style={{ listStyleType: "disc" }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 pl-5 space-y-1.5" style={{ listStyleType: "decimal" }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-[1.7]" style={{ color: "var(--text-p-1)" }}>
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong style={{ color: "var(--text-p-0)", fontWeight: 600 }}>
      {children}
    </strong>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code
          className="block px-4 py-3 rounded-lg font-mono text-sm my-4"
          style={{
            background: "var(--navy-2)",
            border: "1px solid var(--portfolio-line)",
            color: "var(--portfolio-accent)",
          }}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded font-mono text-[13px]"
        style={{
          background: "var(--navy-2)",
          color: "var(--portfolio-accent)",
        }}
      >
        {children}
      </code>
    );
  },
  blockquote: ({ children }) => (
    <blockquote
      className="pl-4 my-4 italic"
      style={{
        borderLeft: "3px solid var(--portfolio-accent)",
        color: "var(--text-p-2)",
      }}
    >
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="my-8" style={{ borderColor: "var(--portfolio-line)" }} />
  ),
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div
      className="prose-project max-w-[720px]"
      style={{ color: "var(--text-p-1)", fontSize: "16px", lineHeight: "1.7" }}
    >
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
