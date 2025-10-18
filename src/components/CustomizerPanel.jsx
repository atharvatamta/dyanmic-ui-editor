

import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function CustomizerPanel({ settings }) {
  const layout = settings?.customizerLayout || "compact";
  return (
    <div className="customizer">
      {/* ===== HEADER ===== */}
      <div className="customizer-header">
        <div className="header-top">
          <h1 className="product-title">Cozy Lounge Chair</h1>
          <button className="filter-btn">
            <SlidersHorizontal size={18} />
          </button>
        </div>
        <p className="subtitle">Customize your Chair</p>
      </div>

   
           {/* ===== BODY ===== */}
           <div className="customizer-body">
        {/* Shared top section for BOTH layouts */}
        <div className="option-card">
          <div className="option-header">
            <img src={`${import.meta.env.BASE_URL}assets/arms.png`} alt="arms" className="option-thumb" />
            <div className="option-text">
              <h4>1. Arms</h4>
              <p>Fixed Arms</p>
            </div>
          </div>
          <ChevronDown className="dropdown-icon" />
        </div>

        <div className="option-card active">
          <div className="option-header">
            <img
              src={`${import.meta.env.BASE_URL}assets/arms-finish.jpg`}
              alt="arms finish"
              className="option-thumb"
            />
            <div className="option-text">
              <h4>2. Arms Finish</h4>
              <p>Leather Brown</p>
            </div>
          </div>
          <ChevronDown className="dropdown-icon rotate" />
        </div>

        {/* Conditional bottom layout section */}
        {layout === "tabbed" ? <TabbedView /> : <CompactView />}

        {/* Legs stays visible in BOTH layouts */}
        <div className="option-card">
          <div className="option-header">
            <img src={`${import.meta.env.BASE_URL}assets/legs.png`} alt="legs" className="option-thumb" />
            <div className="option-text">
              <h4>3. Legs Finish</h4>
              <p>Steel</p>
            </div>
          </div>
          <ChevronDown className="dropdown-icon" />
        </div>
      </div>

      {/* ===== PRICE SECTION ===== */}
      <div className="price-row">
        <div className="price">
          <span className="label">Price</span>
          <div className="values">
            <span className="now">$200</span>
            <span className="was">$245</span>
          </div>
        </div>

        {/* Dynamic Add to Cart alignment */}
        <div className="btn-container" data-align={settings.btnAlign}>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
/* ================= vertical LAYOUT ================= */
function CompactView() {
  return (
    <>

      {/* Swatches */}
      <div className="swatch-group">
        <h5>LEATHER</h5>
        <div className="swatch-row">
          {[
            "#5C4A4A",
            "#5A6B5A",
            "#4D5B4D",
            "#403F4A",
            "#805D7E",
            "#3C5572",
            "#A94444",
            "#652020",
            "#2A755E",
          ].map((color, i) => (
            <div
              key={i}
              className={`swatch ${i === 0 ? "selected" : ""}`}
              style={{ background: color }}
            ></div>
          ))}
        </div>
      </div>
      {/* SILICON */}
        <div className="swatch-group">
          <h5 className="silicon">SILICON</h5>
          <div className="swatch-row">
            {["#5C4A4A", "#5A6B5A", "#4D5B4D", "#403F4A", "#5A526A"].map(
              (color, i) => (
                <div
                  key={i}
                  className="swatch"
                  style={{ background: color }}
                ></div>
              )
            )}
          </div>
        </div>

        {/* ALUMINIUM */}
        <div className="swatch-group">
          <h5 className="aluminium">ALUMINIUM</h5>
          <div className="swatch-row">
            {["#665555", "#888888", "#999999", "#AAAAAA"].map((color, i) => (
              <div
                key={i}
                className="swatch"
                style={{ background: color }}
              ></div>
            ))}
          </div>
        </div>

      
    </>
  );
}

/* ================= horizontal LAYOUT ================= */
function TabbedView() {
  const tabs = [
    "LEATHER",
    "SILICON",
    "ALUMINIUM",
    "STEEL",
    
  ];

  return (
    <div className="tabbed-customizer">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((t, i) => (
          <button key={i} className={`tab ${i === 0 ? "active" : ""}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Swatches for active tab */}
      <div className="tab-content">
        <div className="swatch-row">
          {["#5C4A4A", "#5A6B5A", "#4D5B4D", "#805D7E", "#3C5572", "#A94444",
            "#652020",
            "#2A755E",].map(
            (color, i) => (
              <div
                key={i}
                className="swatch"
                style={{ background: color }}
              ></div>
            )
          )}
        </div>

        
      </div>
   
    </div>
    
  );
}
/*      <div className="customizer-body">
        
       
        <div className="option-card">
          <div className="option-header">
            <img src="/assets/arms.png" alt="arms" className="option-thumb" />
            <div className="option-text">
              <h4>1. Arms</h4>
              <p>Fixed Arms</p>
            </div>
          </div>
          <ChevronDown className="dropdown-icon" />
        </div>

        {/* Arms Finish 
        <div className="option-card active">
          <div className="option-header">
            <img
              src="/assets/arms-finish.jpg"
              alt="arms finish"
              className="option-thumb"
            />
            <div className="option-text">
              <h4>2. Arms Finish</h4>
              <p>Leather Brown</p>
            </div>
          </div>
          <ChevronDown className="dropdown-icon rotate" />
        </div>
        
        {/* LEATHER 
        <div className="swatch-group">
          <h5 className="leather">LEATHER</h5>
          <div className="swatch-row">
            {[
              "#5C4A4A",
              "#5A6B5A",
              "#4D5B4D",
              "#403F4A",
              "#805D7E",
              "#3C5572",
              "#A94444",
              "#652020",
              "#2A755E",
            ].map((color, i) => (
              <div
                key={i}
                className={`swatch ${i === 0 ? "selected" : ""}`}
                style={{ background: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* SILICON 
        <div className="swatch-group">
          <h5 className="silicon">SILICON</h5>
          <div className="swatch-row">
            {["#5C4A4A", "#5A6B5A", "#4D5B4D", "#403F4A", "#5A526A"].map(
              (color, i) => (
                <div
                  key={i}
                  className="swatch"
                  style={{ background: color }}
                ></div>
              )
            )}
          </div>
        </div>

        {/* ALUMINIUM 
        <div className="swatch-group">
          <h5 className="aluminium">ALUMINIUM</h5>
          <div className="swatch-row">
            {["#665555", "#888888", "#999999", "#AAAAAA"].map((color, i) => (
              <div
                key={i}
                className="swatch"
                style={{ background: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Legs Finish 
        <div className="option-card">
          <div className="option-header">
            <img src="/assets/legs.png" alt="legs" className="option-thumb" />
            <div className="option-text">
              <h4>3. Legs Finish</h4>
              <p>Steel</p>
            </div>
          </div>
          <ChevronDown className="dropdown-icon" />
        </div>
      </div>
      */ 