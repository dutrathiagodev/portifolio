import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = `${siteContent.name} — ${siteContent.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const grid =
  "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)";

export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), "src/app/og-portrait.png"));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ecebe7",
          backgroundImage: grid,
          backgroundSize: "40px 40px",
          color: "#111",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "44px 64px 0",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          <span>SOFTWARE ENGINEER / BACKEND &amp; MOBILE</span>
          <span>2026</span>
        </div>

        <div
          style={{
            display: "flex",
            padding: "10px 64px 0",
            fontSize: 128,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -5,
          }}
        >
          THIAGO DUTRA
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 250,
            background: "#090909",
            display: "flex",
            alignItems: "center",
            padding: "0 64px",
            color: "#f1ebe0",
            fontSize: 54,
            fontWeight: 900,
            letterSpacing: -1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>FLUTTER — REACT</span>
            <span style={{ color: "#ff5a36", marginTop: 8 }}>
              NODE.JS — SUPABASE
            </span>
            <span style={{ fontSize: 28, fontWeight: 400, color: "#8f887c", marginTop: 18 }}>
              Maringá, PR
            </span>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          width={346}
          height={394}
          style={{ position: "absolute", right: 110, bottom: 0 }}
        />
      </div>
    ),
    { ...size },
  );
}
