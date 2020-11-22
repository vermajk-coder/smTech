import productInfo from "../../data/products.json";
import "./products-icon.css";
function ProductsIcon() {
  return (
    <div className="products">
      {productInfo.map(product => (
        <img className="product-icon" src={product.url} alt="service_icon" />
      ))}
    </div>
  );
}

export default ProductsIcon;
