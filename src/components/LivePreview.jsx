import Gallery from "./Gallery";
import ProductViewer from "./ProductViewer";
import Controls from "./Controls";
import ViewInRoom from "./ViewInRoom";
import CustomizerPanel from "./CustomizerPanel";
import "./LivePreview.css";

export default function LivePreview({ settings }) {
  const shadowMap = {
    none: "none",
    sm: "0 1px 2px rgba(0,0,0,0.08)",
    md: "0 4px 10px rgba(0,0,0,0.12)",
    lg: "0 10px 24px rgba(0,0,0,0.16)",
  };
  const styleVars = {
    "--font-family": settings.fontFamily,
    "--font-weight": settings.fontWeight,
    "--font-size": `${settings.fontSize}px`,
    "--section-bg": settings.sectionBg,

    /* Customizer Panel */
    "--customizer-radius": `${settings.cardRadius}px`,
    "--customizer-padding": `${settings.containerPadding}px`,
    "--customizer-stroke": `${settings.strokeWeight}px solid ${settings.strokeColor}`,

    "--btn-bg": settings.btnBg,
    "--btn-color": settings.btnColor,
    "--btn-radius": `${settings.btnRadius}px`,
    "--btn-shadow": shadowMap[settings.btnShadow] || "none",
    "--btn-align": settings.btnAlign,
    /* Gallery */
    "--gallery-align": settings.galleryAlign,
    "--gallery-gap": `${settings.galleryGap}px`,
    "--gallery-radius": `${settings.galleryRadius}px`,
  };

  return (
    <main className={`preview ${settings.layout}`} style={styleVars}>
      <div className="scene">
        <Gallery settings={settings} />
        <ProductViewer settings={settings} />
        <Controls settings={settings} />
        <ViewInRoom settings={settings} />
        <CustomizerPanel settings={settings} />
      </div>
    </main>
  );
}
