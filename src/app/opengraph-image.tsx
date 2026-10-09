import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "Richard Kim — New-Grad Software Engineer, University of Waterloo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: "80px", background: "#101215", color: "#f0f2f4" }}>
      <div style={{ display: "flex", fontSize: 26, color: "#a7afb9", marginBottom: 30 }}>richardkim.me</div>
      <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>{site.name}</div>
      <div style={{ display: "flex", fontSize: 40, color: "#8dcabb", marginTop: 26 }}>New-Grad Software Engineer</div>
      <div style={{ display: "flex", fontSize: 28, color: "#a7afb9", marginTop: 44 }}>University of Waterloo · Computer Engineering</div>
    </div>,
    size,
  );
}
