import { useReducer, useEffect, useMemo } from "react";
import EditorPanel from "./components/EditorPanel";
import LivePreview from "./components/LivePreview";

const DEFAULTS = {
  layout: "desktop",
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: 16,
  sectionBg: "#FCFCFC",
  strokeColor: "#E5E5E5",
  strokeWeight: 1,
  cardRadius: 10,
  containerPadding: 24,
  btnBg: "#C6614D",
  btnColor: "#FFFFFF",
  btnRadius: 8,
  btnShadow: "sm",
  btnAlign: "right",
  galleryAlign: "left",
  galleryGap: 14,
  galleryRadius: 6,
  customizerLayout: "compact", // 'vert' | 'horizontal'
};

const STORAGE_KEY = "ui-editor-settings-v1";

function reducer(state, action) {
  switch (action.type) {
    case "merge":
      return { ...state, ...action.payload };
    case "reset":
      return DEFAULTS;
    default:
      return state;
  }
}

export default function App() {
  const [settings, dispatch] = useReducer(reducer, DEFAULTS, (init) => {
    try {
      const cached = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return cached ? { ...init, ...cached } : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  return (
    <div className="app">
       
      <EditorPanel className="editor-panel"
        settings={settings}
        onChange={(patch) => dispatch({ type: "merge", payload: patch })}
      />
      <LivePreview settings={settings} /> {/* move this below ditor panel later*/}
     
    </div>
  );
}
