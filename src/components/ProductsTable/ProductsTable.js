import './ProductsTable.css';
import ProductRow from '../ProductRow/ProductRow.js';

const ProductsTableHeader = props => {
  const { title } = props;

  return (
    <tr>
      <th align="center">{title}</th>
    </tr>
  );
}

const ProductsTable = props => {

  const { products, filterText, inStockOnly } = props;
  const tableContent = [];
  const categories = [];

  products.forEach(product => {
    if (categories.includes(product.category)) return;
    categories.push(product.category);
  });

  categories.forEach(category => {
    const productsInCat = products.filter((prod) => prod.category === category);
    tableContent.push(<ProductsTableHeader title={category} key={category} />)
    productsInCat.forEach((prod) => {
      if (prod.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && prod.quantity === 0) {
        return;
      }
      tableContent.push(<ProductRow product={prod} key={prod.name}/>)
    })
  });
  
  return (
    <div className="App">
     <table width="100%">
       <thead>
        <tr>
          <th align="left">Name</th>
          <th align="right">Price</th>
        </tr>
       </thead>
       <tbody>
        {tableContent}
       </tbody>
     </table>
    </div>
  );
}

export default ProductsTable;
