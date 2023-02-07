import "./ProductRow.css";

const ProductRow = (props) => {
  const { product } = props;

  const coloredName = product.quantity === 0 ? <span style={{color: 'red'}}>{product.name}</span> : product.name;

  return (
    <tr>
      <th align="left">{coloredName}</th>
      <th align="right">{product.price}</th>
    </tr>
  );
};

export default ProductRow;
