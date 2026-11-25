import { ImageResponse } from "next/og";
import { company } from "@/content/company";
import { hero } from "@/content/hero";
import { site } from "@/content/site";

export const alt = site.description;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        {`${company.jurisdiction} · ${company.number}`}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 92, lineHeight: 1, letterSpacing: "-0.045em" }}>
          Slashie Ltd
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.35,
            color: "#52525B",
            maxWidth: 780,
          }}
        >
          {hero.lede}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: 88,
          height: 12,
          borderRadius: 999,
          background: "#00DC82",
        }}
      />
    </div>,
    { ...size },
  );
}
