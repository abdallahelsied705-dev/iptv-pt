import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function GET() {
  const artwork = await readFile(join(process.cwd(), "public/images/social-preview-2026.jpg"));

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#06162c", color: "white", fontFamily: "sans-serif" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/jpeg;base64,${artwork.toString("base64")}`} alt="" width="1200" height="630" style={{ position: "absolute", inset: 0, width: 1200, height: 630, objectFit: "cover" }} />
      <div style={{ display: "flex", position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,17,35,.96), rgba(4,17,35,.8) 34%, rgba(4,17,35,.1) 68%, transparent)" }} />
      <div style={{ display: "flex", position: "relative", flexDirection: "column", justifyContent: "space-between", width: 730, height: "100%", padding: "48px 54px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 15, background: "#1287f4", fontSize: 30, fontWeight: 900 }}>PT</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontSize: 25, fontWeight: 850 }}>IPTV PT</span>
            <span style={{ fontSize: 15, letterSpacing: 3.5, color: "#90d7ff", fontWeight: 750 }}>PORTUGAL</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ color: "#8ad6ff", fontSize: 19, fontWeight: 800, letterSpacing: 2 }}>ENTRETENIMENTO EM PORTUGAL</span>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 59, fontWeight: 850, lineHeight: 1.04, letterSpacing: -2 }}>
            <span>Futebol em direto.</span>
            <span style={{ color: "#75caff" }}>Cinema a pedido.</span>
          </div>
          <span style={{ fontSize: 21, color: "#dae7f5" }}>+25.000 canais · filmes e séries em 4K</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 19, fontWeight: 750 }}>
          <span style={{ display: "flex", padding: "12px 20px", borderRadius: 99, background: "#288cf5", color: "#fff" }}>DESDE 15€/MÊS</span>
          <span style={{ color: "#dce9f7" }}>Sem fidelização</span>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
