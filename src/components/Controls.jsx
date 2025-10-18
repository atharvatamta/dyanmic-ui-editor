import React from "react";
import { RotateCw, Maximize2, Plus, Minus } from "lucide-react";

export default function Controls() {
  return (
    <div className="controls">
      <button title="Rotate">
        <RotateCw color="black" size={20} strokeWidth={2} />
      </button>
      <button title="Expand">
        <Maximize2 color="black" size={20} strokeWidth={2} />
      </button>
      <button title="Zoom In">
        <Plus color="black" size={20} strokeWidth={2} />
      </button>
      <button title="Zoom Out">
        <Minus color="black" size={20} strokeWidth={2} />
      </button>
    </div>
  );
}
