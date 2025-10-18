// export default function Gallery() {
//     const thumbnails = [
//       "/assets/thumb1.png",
//       "/assets/thumb2.png",
//       "/assets/thumb3.png",
//       "/assets/thumb4.png",
//       "/assets/thumb5.png",
//     ];
  
//     return (
//       <div className="gallery">
//         {thumbnails.map((src, i) => (
//           <img key={i} src={src} alt={`Thumbnail ${i + 1}`} className="thumb" />
//         ))}
//       </div>
//     );
//   }
  export default function Gallery({ settings }) {
  return (
    <div
      className="gallery"
      data-align={settings.galleryAlign}
      style={{
        gap: `var(--gallery-gap)`,
      }}
    >
      {[
  `${import.meta.env.BASE_URL}assets/thumb1.png`,
  `${import.meta.env.BASE_URL}assets/thumb2.png`,
  `${import.meta.env.BASE_URL}assets/thumb3.png`,
  `${import.meta.env.BASE_URL}assets/thumb4.png`,
].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Thumbnail ${i + 1}`}
          className="thumb"
          style={{
            borderRadius: `var(--gallery-radius)`,
          }}
        />
      ))}
    </div>
  );
}
