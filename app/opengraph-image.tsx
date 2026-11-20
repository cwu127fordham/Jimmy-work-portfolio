// Generates the preview image shown when your link is shared on LinkedIn, iMessage, email, etc.
import { ImageResponse } from "next/og";
import { site, hero } from "@/data/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#fbfaf8", color: "#16161d", fontFamily: "serif" }}>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#4338ca" }}>Portfolio</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 38, color: "#5c5f6a", marginTop: 20, maxWidth: 950, lineHeight: 1.3 }}>{hero.positioning.replace("中文", "Mandarin")}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#5c5f6a" }}>
          <div style={{ width: 60, height: 6, background: "#4338ca" }} />
          Global Business Marketing · Fordham Gabelli
        </div>
      </div>
    ),
    size
  );
}
