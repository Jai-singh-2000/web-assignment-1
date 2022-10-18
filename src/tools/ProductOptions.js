import productLike from "../Images/productLike.svg";
import productView from "../Images/productView.svg";
import productCompare from "../Images/productCompare.svg";
import "./ProductOptions.css";

const ProductOptions = () => {
  return (
    <div className="options">
      <div className="option-details">
        <img id="product-like" src={productLike} alt="" />
      </div>

      <div className="option-details">
        <img id="product-view" src={productView} alt="" />
      </div>

      <div className="option-details">
        <img src={productCompare} alt="" />
      </div>
    </div>
  )
}

export default ProductOptions;