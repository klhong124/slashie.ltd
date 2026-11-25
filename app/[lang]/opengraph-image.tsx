import { ImageResponse } from "next/og";
import { company } from "@/content/company";
import { getCopy, isLocale } from "@/content/get-copy";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const copy = getCopy(isLocale(lang) ? lang : "en");

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
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#05683F",
        }}
      >
        {`${copy.hero.eyebrow} · ${company.number}`}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 900 }}>
          {copy.hero.title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#52525B",
            maxWidth: 820,
          }}
        >
          {copy.hero.lede}
        </div>
      </div>
      <div style={{ display: "flex", width: 88, height: 12, borderRadius: 999, background: "#00DC82" }} />
    </div>,
    { ...size },
  );
}
