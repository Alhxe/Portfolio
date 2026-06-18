import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alex Pérez Álvarez — Desarrollador Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #4f46e5 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#a5b4fc",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          Alex Pérez Álvarez
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#e0e7ff" }}>
          Backend Engineer · Java · Spring Boot · Microservicios
        </div>
        <div style={{ fontSize: 26, marginTop: 28, color: "#c7d2fe" }}>
          5 años en entornos enterprise
        </div>
      </div>
    ),
    { ...size }
  );
}
