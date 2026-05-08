import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Uses — Corentin",
    description: "An honest list of the hardware, software, and small tools I reach for daily.",
    alternates: {
      canonical: "https://nitroc.xyz/en/uses",
      languages: { en: "https://nitroc.xyz/en/uses", fr: "https://nitroc.xyz/fr/uses" },
    },
  };
}

interface UseItem {
  name: string;
  sub: string;
  why: string;
}

interface UseSection {
  icon: string;
  title: string;
  items: UseItem[];
}

export default async function UsesPage() {
  const t = await getTranslations("uses");

  const sections: UseSection[] = [
    {
      icon: "⌨",
      title: t("hardware"),
      items: [
        { name: "Custom PC", sub: "AMD Ryzen 7 · RTX 3070 · 32GB", why: t("customPcDesc") },
        { name: "Dell 27\" 4K Monitor", sub: "U2723QE · USB-C", why: t("monitorDesc") },
        { name: "Keychron K2 Pro", sub: "Brown switches · QMK", why: t("keyboardDesc") },
        { name: "Logitech G502 X", sub: "Wireless", why: t("mouseDesc") },
      ],
    },
    {
      icon: "{ }",
      title: t("editorTerminal"),
      items: [
        { name: "VS Code", sub: "Primary editor", why: t("vscodeDesc") },
        { name: "JetBrains Rider", sub: "For .NET / C#", why: t("riderDesc") },
        { name: "Warp", sub: "Terminal", why: t("warpDesc") },
        { name: "One Dark Pro", sub: "Theme", why: t("themeDesc") },
        { name: "JetBrains Mono", sub: "Editor font", why: t("fontDesc") },
      ],
    },
    {
      icon: "⚙",
      title: t("dailySoftware"),
      items: [
        { name: "Raycast", sub: "Launcher", why: t("raycastDesc") },
        { name: "Arc", sub: "Browser", why: t("arcDesc") },
        { name: "Figma", sub: "Design", why: t("figmaDesc") },
        { name: "Notion", sub: "Notes", why: t("notionDesc") },
      ],
    },
    {
      icon: "⚛",
      title: t("devStack"),
      items: [
        { name: "Next.js", sub: "App Router · RSC", why: t("nextjsDesc") },
        { name: "TypeScript", sub: "strict mode", why: t("typescriptDesc") },
        { name: ".NET 8 / C#", sub: "For work", why: t("dotnetDesc") },
        { name: "PostgreSQL", sub: "via Docker", why: t("postgresDesc") },
        { name: "Docker", sub: "Containers", why: t("dockerDesc") },
      ],
    },
  ];

  return (
    <main
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 600px at 80% -10%, color-mix(in oklch, var(--portfolio-accent) 8%, transparent), transparent 60%), radial-gradient(900px 500px at -10% 120%, color-mix(in oklch, var(--portfolio-accent) 6%, transparent), transparent 60%), var(--navy-0)",
      }}
    >
      <div className="px-8 max-w-[1180px] mx-auto">

        {/* Hero */}
        <section className="pt-[60px] pb-8">
          <h1
            className="font-semibold tracking-tight mb-3.5"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "var(--text-p-0)" }}
          >
            What I <span style={{ color: "var(--portfolio-accent)" }}>use</span>
          </h1>
          <p className="max-w-[680px] text-[17px] leading-relaxed" style={{ color: "var(--text-p-1)" }}>
            An honest list of the hardware, software, and small tools I reach for daily.
            Inspired by <code
              className="font-mono px-1.5 py-0.5 rounded text-sm"
              style={{ background: "var(--navy-2)" }}
            >uses.tech</code>.
            Updated whenever I actually change something.
          </p>
        </section>

        {/* Sections grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
          {sections.map((section) => (
            <section key={section.title} className="py-2">
              <h2
                className="flex items-center gap-2.5 text-[22px] font-semibold tracking-tight mb-4"
                style={{ color: "var(--text-p-0)" }}
              >
                <span
                  className="w-7 h-7 rounded-lg grid place-items-center font-mono text-sm font-semibold shrink-0"
                  style={{ background: "var(--portfolio-accent-soft)", color: "var(--portfolio-accent)" }}
                >
                  {section.icon}
                </span>
                {section.title}
              </h2>
              <div className="flex flex-col">
                {section.items.map(({ name, sub, why }) => (
                  <div
                    key={name}
                    className="grid gap-6 py-4 border-b text-[15px] last:border-b-0"
                    style={{ gridTemplateColumns: "200px 1fr", borderColor: "var(--portfolio-line)" }}
                  >
                    <div>
                      <p className="font-medium" style={{ color: "var(--text-p-0)" }}>{name}</p>
                      <p
                        className="font-mono text-[11px] uppercase tracking-[0.08em] mt-1"
                        style={{ color: "var(--text-p-3)" }}
                      >
                        {sub}
                      </p>
                    </div>
                    <p className="leading-[1.55]" style={{ color: "var(--text-p-2)" }}>
                      {why}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
