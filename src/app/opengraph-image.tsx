import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = `${siteContent.name} — ${siteContent.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0d",
          color: "#f1ebe0",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 900 }}>
          TD<span style={{ color: "#ff5a36" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            {siteContent.name}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 44, color: "#ff5a36" }}>
            Backend &amp; Mobile Developer
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#8f887c" }}>
          Flutter · React · Node.js · Maringá, PR
        </div>
      </div>
    ),
    { ...size },
  );
}
