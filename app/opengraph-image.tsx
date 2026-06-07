import { ImageResponse } from "next/og";

export const alt = "FORJA Training Club — Gimnasio premium en Palermo";
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
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(198,242,62,0.22), transparent), #08080a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#c6f23e",
              color: "#08080a",
              fontSize: 42,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            F
          </div>
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            FORJA<span style={{ color: "#c6f23e" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#c6f23e", fontSize: 24, letterSpacing: 6, fontWeight: 700 }}>
            GIMNASIO PREMIUM · PALERMO, BUENOS AIRES
          </div>
          <div
            style={{
              color: "white",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              marginTop: 18,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            Forjá tu
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -3,
              textTransform: "uppercase",
              color: "#c6f23e",
            }}
          >
            mejor versión
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, color: "#9a9aa7", fontSize: 26 }}>
          <span>+45 clases / semana</span>
          <span>·</span>
          <span>Sin permanencia</span>
          <span>·</span>
          <span>Primera clase gratis</span>
        </div>
      </div>
    ),
    size
  );
}
