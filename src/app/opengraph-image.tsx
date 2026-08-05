import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Generated brand OG image: graphite + logo + wordmark + tagline.
export const alt = "METTCO — Everything your business buys. One accountable supplier.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Embed the logo from disk at generation time — no network fetch.
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111417",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#A8ADA9",
            fontSize: 24,
            letterSpacing: "0.2em",
          }}
        >
          <span>GENERAL ORDER SUPPLIER</span>
          <span>LAHORE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={150} height={150} />
            <div
              style={{
                color: "#EDEDE8",
                fontSize: 130,
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              METTCO
            </div>
          </div>
          <div style={{ display: "flex", width: 240, height: 6, background: "#FF5A1F", marginTop: 8 }} />
          <div style={{ color: "#EDEDE8", fontSize: 34, marginTop: 40, maxWidth: 900, lineHeight: 1.35 }}>
            Everything your business buys. One accountable supplier.
          </div>
        </div>
        <div style={{ display: "flex", color: "#A8ADA9", fontSize: 24, letterSpacing: "0.15em" }}>
          SUPPLY · SERVICES · TECHNOLOGY — QUOTES WITHIN 24 HOURS
        </div>
      </div>
    ),
    size,
  );
}
