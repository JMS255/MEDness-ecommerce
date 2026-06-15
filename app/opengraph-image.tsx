import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "MEDness Co. — Wear Your Calling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const kloreFont = readFileSync(join(process.cwd(), "public/fonts/KlorePS.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          background: "#435487",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative ring — outer */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            border: "60px solid rgba(250,243,224,0.05)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />
        {/* Decorative ring — inner */}
        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            borderRadius: "50%",
            border: "44px solid rgba(250,243,224,0.05)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 52,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            letterSpacing: "0.25em",
            fontSize: 13,
            fontFamily: "sans-serif",
            color: "rgba(250,243,224,0.35)",
            textTransform: "uppercase",
          }}
        >
          Est. 2026 · Zamboanga City, Philippines
        </div>

        {/* Brand name */}
        <div
          style={{
            fontFamily: "Klore",
            fontSize: 110,
            color: "#FAF3E0",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            marginBottom: 28,
            display: "flex",
          }}
        >
          MEDness Co.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 30,
            color: "rgba(250,243,224,0.65)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Wear Your Calling.
        </div>

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 16,
            fontFamily: "sans-serif",
            color: "rgba(250,243,224,0.30)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Clothing for Filipino med &amp; allied health students
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Klore",
          data: kloreFont,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
