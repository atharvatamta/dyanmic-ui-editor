export default function EditorPanel({ settings, onChange ,className = "" }) {
  const set = (patch) => onChange(patch);

  return (
        <aside className={`editor ${className}`}>
      
      <h2>Dynamic UI Editor</h2>

      {/* Typography */}
      <div className="section">
        <h3>Typography</h3>
        <div className="row">
          <label style={{ width: 110 }}>Font Family</label>
          <select
            value={settings.fontFamily}
            onChange={(e) => set({ fontFamily: e.target.value })}
          >
            <option>Inter</option>
            <option>Roboto</option>
            <option>Poppins</option>
          </select>
        </div>
        <div className="row">
          <label style={{ width: 110 }}>Font Weight</label>
          <select
            value={settings.fontWeight}
            onChange={(e) => set({ fontWeight: +e.target.value })}
          >
            {[400, 500, 600, 700].map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <label style={{ width: 110 }}>Font Size</label>
          <input
            type="range"
            min="10"
            max="60"
            value={settings.fontSize}
            onChange={(e) => set({ fontSize: +e.target.value })}
          />
          <span>{settings.fontSize}px</span>
        </div>
      </div>

      {/* Button */}
      <div className="section">
        <h3>Button</h3>
        <div className="row">
          <label style={{ width: 110 }}>BG</label>
          <input
            type="color"
            value={settings.btnBg}
            onChange={(e) => set({ btnBg: e.target.value })}
          />
        </div>
        <div className="row">
          <label style={{ width: 110 }}>Text</label>
          <input
            type="color"
            value={settings.btnColor}
            onChange={(e) => set({ btnColor: e.target.value })}
          />
        </div>
        <div className="row">
          <label style={{ width: 110 }}>Radius</label>
          <input
            type="range"
            min="0"
            max="24"
            value={settings.btnRadius}
            onChange={(e) => set({ btnRadius: +e.target.value })}
          />
          <span>{settings.btnRadius}px</span>
        </div>
        <div className="row">
          <label style={{ width: 110 }}>Shadow</label>
          <select
            value={settings.btnShadow}
            onChange={(e) => set({ btnShadow: e.target.value })}
          >
            <option value="none">none</option>
            <option value="sm">small</option>
            <option value="md">medium</option>
            <option value="lg">large</option>
          </select>
        </div>
        <div className="row">
          <label>Alignment</label>
          <div className="align">
            {["left", "center", "right"].map((a) => (
              <button
                key={a}
                onClick={() => set({ btnAlign: a })}
                style={{
                  padding: 6,
                  border: "1px solid #ddd",
                  background: settings.btnAlign === a ? "#eee" : "#fff",
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Gallery / Images</h3>

        {/* Alignment */}
        <div className="row">
          <label style={{ width: 110 }}>Alignment</label>
          <select
            value={settings.galleryAlign}
            onChange={(e) => onChange({ galleryAlign: e.target.value })}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        {/* Spacing */}
        <div className="row">
          <label style={{ width: 110 }}>Spacing</label>
          <input
            type="range"
            min="0"
            max="40"
            value={settings.galleryGap}
            onChange={(e) => onChange({ galleryGap: +e.target.value })}
          />
          <span>{settings.galleryGap}px</span>
        </div>

        {/* Image radius */}
        <div className="row">
          <label style={{ width: 110 }}>Image Radius</label>
          <input
            type="range"
            min="0"
            max="24"
            value={settings.galleryRadius}
            onChange={(e) => onChange({ galleryRadius: +e.target.value })}
          />
          <span>{settings.galleryRadius}px</span>
        </div>
      </div>

      {/* === GENERAL LAYOUT === */}
      <div className="section">
        <h3>General Layout</h3>

        {/* Card Corner Radius */}
        <div className="row">
          <label style={{ width: 140 }}>Corner Radius</label>
          <input
            type="range"
            min="0"
            max="32"
            value={settings.cardRadius}
            onChange={(e) => onChange({ cardRadius: +e.target.value })}
          />
          <span>{settings.cardRadius}px</span>
        </div>

        {/* Container Padding */}
        <div className="row">
          <label style={{ width: 140 }}>Padding</label>
          <input
            type="range"
            min="0"
            max="64"
            value={settings.containerPadding}
            onChange={(e) => onChange({ containerPadding: +e.target.value })}
          />
          <span>{settings.containerPadding}px</span>
        </div>

        {/* Section Background Color */}
        <div className="row">
          <label style={{ width: 140 }}>Background</label>
          <input
            type="color"
            value={settings.sectionBg}
            onChange={(e) => onChange({ sectionBg: e.target.value })}
          />
        </div>
      </div>

      {/* === STROKE / BORDER === */}
      <div className="section">
        <h3>Stroke / Border</h3>

        {/* Stroke Color */}
        <div className="row">
          <label style={{ width: 140 }}>Stroke Color</label>
          <input
            type="color"
            value={settings.strokeColor}
            onChange={(e) => onChange({ strokeColor: e.target.value })}
          />
        </div>

        {/* Stroke Weight */}
        <div className="row">
          <label style={{ width: 140 }}>Stroke Weight</label>
          <input
            type="range"
            min="0"
            max="6"
            value={settings.strokeWeight}
            onChange={(e) => onChange({ strokeWeight: +e.target.value })}
          />
          <span>{settings.strokeWeight}px</span>
        </div>
      </div>
      {/* {Layout switching} */}
      <div className="section">
        <h3>Layout Switching</h3>
        <div className="row">
          <label style={{ width: 140 }}>Type</label>
          <select
            value={settings.customizerLayout}
            onChange={(e) => onChange({ customizerLayout: e.target.value })}
          >
            <option value="compact">Vertical</option>
            <option value="tabbed">Horizontal</option>
          </select>
        </div>
      </div>

      {/* Export */}
      <div className="row" style={{ marginTop: 12 }}>
        <button
          className="btn"
          onClick={() => {
            const json = JSON.stringify(settings, null, 2);
            navigator.clipboard.writeText(json);
            alert("Config copied to clipboard!");
          }}
        >
          Export JSON
        </button>
      </div>
    </aside>
  );
}
