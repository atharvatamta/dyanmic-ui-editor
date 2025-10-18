export default function ProductViewer() {
    return (
      <div className="product-viewer">
        <div className="shadow"></div>
        <img
          src={`${import.meta.env.BASE_URL}assets/furniture.png`}
          alt="Product"
          className="product-image"
        />
      </div>
    );
  }
  