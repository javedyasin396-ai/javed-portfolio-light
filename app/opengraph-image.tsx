import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/javed.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 90px", background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #fdf2f8 100%)", color: "#1e1b4b" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#047857", background: "#d1fae5", padding: "8px 22px", borderRadius: 999, alignSelf: "flex-start" }}>
            Open to freelance and full-time work
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 28, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#4f46e5", marginTop: 4 }}>{site.role}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#475569", marginTop: 26 }}>React · Django · Python · JavaScript</div>
        </div>
        <div style={{ display: "flex", padding: 10, borderRadius: 40, background: "linear-gradient(135deg, #6366f1, #ec4899, #f59e0b)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={300} height={386} alt="" style={{ borderRadius: 32, objectFit: "cover" }} />
        </div>
      </div>
    ),
    size,
  );
}
