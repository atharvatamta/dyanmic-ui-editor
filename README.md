# Dynamic UI Editor

---

## Component Architecture

| Component | Description |
|------------|--------------|
| **App.jsx** | Root component managing state (`useReducer`) and rendering `EditorPanel` and `LivePreview`. |
| **EditorPanel.jsx** | Sidebar for all adjustable controls (typography, buttons, layout, etc.). |
| **LivePreview.jsx** | Main preview area rendering UI updates via CSS variables. |
| **CustomizerPanel.jsx** | Dynamic right panel that supports Compact and Tabbed layouts. |
| **Gallery.jsx** | Displays product thumbnails; alignment and spacing configurable. |
| **Controls.jsx** | Floating buttons (Zoom, Focus, etc.). |
| **ViewInRoom.jsx** | Minimal call-to-action button for AR simulation. |
| **ProductViewer.jsx** | Displays main product image and shadow effects. |

---

## Configurable Props

All adjustable properties are stored in the `settings` object inside **App.jsx** and passed as CSS variables to `LivePreview.jsx`.

| Category | Properties | Description |
|-----------|-------------|-------------|
| Typography | `fontFamily`, `fontWeight`, `fontSize` | Controls global font family, weight, and size. |
| Buttons | `btnBg`, `btnColor`, `btnRadius`, `btnShadow`, `btnAlign` | Defines button appearance and alignment. |
| Gallery | `galleryAlign`, `galleryGap`, `galleryRadius` | Adjusts thumbnail positioning and spacing. |
| Layout & Stroke | `cardRadius`, `containerPadding`, `strokeColor`, `strokeWeight`, `sectionBg` | Modifies panel radius, padding, and stroke. |
| Customizer Layout | `customizerLayout` | Switch between Compact and Tabbed views. |

---

## How It Works

1. **State Management**  
   All settings are handled via React’s `useReducer`, which merges updates from editor inputs into a single state object.

2. **Live Updates with CSS Variables**  
   `LivePreview` applies all settings as CSS variables (e.g., `--font-size`, `--btn-bg`) for instant updates without re-rendering.

3. **Persistence**  
   Changes are saved in `localStorage` and restored automatically on reload.

4. **Sync Between Editor and Preview**  
   Input changes in `EditorPanel` dispatch actions that immediately reflect in the preview via shared state.

---

## Future Enhancements
* Added support for different screensizes
* Moving the thumbnails across the Product viewer screen
* Add color palette presets (save & load themes)
* Implement drag-and-drop thumbnail reordering
* Export as JSON schema for integrating with external design systems
