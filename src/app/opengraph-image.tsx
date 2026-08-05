import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Generated brand OG image: light mark + wordmark + one line, on graphite.
export const alt = "METTCO — Everything your business buys. One accountable supplier.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Embed the processed light mark from disk at generation time.
  const logo = await readFile(join(process.cwd(), "public", "logo-light.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111417",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={175} height={200} />
          <div
            style={{
              color: "#EDEDE8",
              fontSize: 140,
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            METTCO
          </div>
        </div>
        <div style={{ display: "flex", width: 240, height: 6, background: "#FF5A1F", marginTop: 36 }} />
        <div
          style={{
            display: "flex",
            color: "#A8ADA9",
            fontSize: 30,
            letterSpacing: "0.25em",
            marginTop: 44,
          }}
        >
          GENERAL ORDER SUPPLIER · LAHORE
        </div>
      </div>
    ),
    size,
  );
}
