import { Product } from "../../models/Product";
import "./ProductRow.css";

const ProductRow = (props: {product: Product, goToProductDetails: Function}) => {
  const { product, goToProductDetails} = props;

  const coloredName = product.quantity === 0 ? <span style={{color: 'red'}}>{product.name}</span> : product.name;

  return (
    <tr onClick={() => goToProductDetails(product)} className="ProductRow-Item">
      <td align="left">{coloredName}</td>
      <td align="right">{product.price}</td>
    </tr>
  );
};

export default ProductRow;
