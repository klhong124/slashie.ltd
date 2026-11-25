import { ImageResponse } from "next/og";
import { company } from "@/content/company";
import { getCopy, isLocale } from "@/content/get-copy";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The bundled OG font has no CJK glyphs, so subset Noto Sans TC for the text drawn. */
async function loadCjkFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&text=${encodeURIComponent(text)}`,
    ).then((response) => response.text());
    const source = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!source) return null;
    const response = await fetch(source[1]);
    return response.ok ? response.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const copy = getCopy(isLocale(lang) ? lang : "en");
  const { hero } = copy.home;
  const eyebrow = `${hero.eyebrow} · ${company.name}`;
  const font = copy.locale === "zh-hk" ? await loadCjkFont(`${eyebrow}${hero.title}${hero.lede}`) : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FFFFFF",
        color: "#0A1512",
        padding: "72px",
        ...(font ? { fontFamily: "Noto Sans TC" } : {}),
      }}
    >
      <div style={{ display: "flex", fontSize: 24, color: "#05683F" }}>{eyebrow}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, letterSpacing: "-0.04em", maxWidth: 980 }}>
          {hero.title}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, lineHeight: 1.45, color: "#52525B", maxWidth: 900 }}>
          {hero.lede}
        </div>
      </div>
      <div style={{ display: "flex", width: 88, height: 12, borderRadius: 999, background: "#00DC82" }} />
    </div>,
    {
      ...size,
      ...(font ? { fonts: [{ name: "Noto Sans TC", data: font, weight: 500 as const, style: "normal" as const }] } : {}),
    },
  );
}
