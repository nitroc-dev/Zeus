import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { GOD_PATHS } from "@/components/god-emblem/paths";
import type { GodId } from "@/types";

// Social preview images (Open Graph / X), rendered at build time with the
// site's own type and colours so shared links match the design system.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const C = {
  bg: "#0b0b0b",
  text1: "#f5f5f5",
  text2: "#b7b7b7",
  text3: "#808080",
  line: "#262626",
  accent: "#59a0f9",
};

const GODS: { id: GodId; name: string }[] = [
  { id: "zeus", name: "Zeus" },
  { id: "helios", name: "Helios" },
  { id: "selene", name: "Selene" },
];

let fontsPromise: Promise<{ regular: Buffer; semibold: Buffer }> | null = null;
function loadFonts() {
  fontsPromise ??= Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Inter-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Inter-SemiBold.ttf")),
  ]).then(([regular, semibold]) => ({ regular, semibold }));
  return fontsPromise;
}

function Emblem({ god, size }: { god: GodId; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={C.accent}
      strokeWidth={size > 48 ? 1.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {GOD_PATHS[god].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

interface OgOptions {
  title: string;
  subtitle: string;
  /** Project page: big emblem + Greek name. Omitted on site-wide pages. */
  god?: { id: GodId; greek: string };
  footer: string;
}

export async function renderOg({ title, subtitle, god, footer }: OgOptions) {
  const { regular, semibold } = await loadFonts();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: C.bg,
        padding: "72px 88px",
        fontFamily: "Inter",
        color: C.text1,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {god && (
          <div style={{ display: "flex", marginBottom: 36 }}>
            <Emblem god={god.id} size={104} />
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 28,
            fontSize: god ? 104 : 88,
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1,
          }}
        >
          <span>{title}</span>
          {god && (
            <span style={{ fontSize: 44, fontWeight: 400, color: C.text3 }}>
              {god.greek}
            </span>
          )}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.35,
            color: C.text2,
            maxWidth: 940,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 28,
          borderTop: `1px solid ${C.line}`,
          fontSize: 26,
          color: C.text3,
        }}
      >
        <span>{footer}</span>
        <div style={{ display: "flex", gap: 28 }}>
          {GODS.map((g) => (
            <div
              key={g.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: god?.id === g.id ? C.text1 : C.text3,
              }}
            >
              <Emblem god={g.id} size={26} />
              <span>{g.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
