import React from "react";
import { Heart, Camera, RotateCw, Maximize2, Plus, Minus } from "lucide-react";

export default function IconProbe() {
  const box = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    padding: "20px",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };
  const iconStyle = { color: "#000", width: 28, height: 28, strokeWidth: 2 };

  return (
    <div style={{ padding: 40 }}>
      <div style={box}>
        <span>Should see 6 icons →</span>
        <Heart style={iconStyle} />
        <Camera style={iconStyle} />
        <RotateCw style={iconStyle} />
        <Maximize2 style={iconStyle} />
        <Plus style={iconStyle} />
        <Minus style={iconStyle} />
      </div>
    </div>
  );
}
