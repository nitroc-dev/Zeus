import type { BrowserMockupProps } from "./props";

export function BrowserMockup({ url }: BrowserMockupProps) {
  const displayUrl = url.replace(/^https?:\/\//, "").split("/")[0];
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      style={{
        background: "var(--navy-2)",
        backgroundImage:
          "linear-gradient(135deg, color-mix(in oklch, var(--portfolio-accent) 10%, transparent), transparent 50%), repeating-linear-gradient(45deg, transparent 0, transparent 18px, rgba(255,255,255,0.025) 18px, rgba(255,255,255,0.025) 36px)",
      }}
    >
      <div
        className="w-[88%] h-[78%] flex flex-col rounded-[10px] overflow-hidden"
        style={{
          background: "var(--navy-1)",
          border: "1px solid var(--portfolio-line-2)",
        }}
      >
        <div
          className="h-8 flex items-center gap-1.5 px-3 shrink-0"
          style={{
            background: "var(--navy-2)",
            borderBottom: "1px solid var(--portfolio-line)",
          }}
        >
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <div
            className="ml-4 flex-1 h-[18px] rounded flex items-center px-2 font-mono text-[10px]"
            style={{
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
              color: "var(--text-p-2)",
            }}
          >
            {displayUrl}
          </div>
        </div>
        <div
          className="flex-1 p-3.5 grid gap-2"
          style={{
            background:
              "radial-gradient(400px 200px at 70% 30%, var(--portfolio-accent-soft), transparent 60%), var(--navy-1)",
            gridTemplateRows: "auto 1fr",
          }}
        >
          <div
            className="h-4 rounded"
            style={{ background: "var(--navy-3)" }}
          />
          <div
            className="grid gap-2.5"
            style={{ gridTemplateColumns: "1.5fr 1fr" }}
          >
            <div className="flex flex-col gap-1.5 pt-5">
              <div
                className="h-4 w-[70%] rounded"
                style={{ background: "var(--text-p-1)" }}
              />
              <div
                className="h-2 w-[90%] rounded"
                style={{ background: "var(--navy-3)" }}
              />
              <div
                className="h-2 w-[80%] rounded"
                style={{ background: "var(--navy-3)" }}
              />
              <div
                className="h-3.5 w-20 rounded mt-1.5"
                style={{ background: "var(--portfolio-accent)" }}
              />
            </div>
            <div
              className="rounded-md"
              style={{
                background: "var(--navy-2)",
                border: "1px solid var(--portfolio-line)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
