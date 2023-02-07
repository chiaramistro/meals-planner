import { Product } from "../../models/Product";
import "./ProductRow.css";

const ProductRow = (props: {product: Product}) => {
  const { product } = props;

  const coloredName = product.quantity === 0 ? <span style={{color: 'red'}}>{product.name}</span> : product.name;

  return (
    <tr>
      <td align="left">{coloredName}</td>
      <td align="right">{product.price}</td>
    </tr>
  );
};

export default ProductRow;
