import { Product } from "../../models/Product";
import "./ProductDetailsCard.css";

const ProductDetailsCard = (props: {product: Product}) => {
  const { product } = props;

  return (
    <p>Product card {product.name}</p>
  );
};

export default ProductDetailsCard;
