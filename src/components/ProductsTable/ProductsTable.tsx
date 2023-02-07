import './ProductsTable.css';
import ProductRow from '../ProductRow/ProductRow';
import { Product } from '../../models/Product';

const ProductsTableHeader = (props: {title: string}) => {
  const { title } = props;

  return (
    <tr>
      <th align="center">{title}</th>
    </tr>
  );
}

interface TableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

const ProductsTable = (props: TableProps) => {

  const { products, filterText, inStockOnly } = props;
  const tableContent: any[] = [];
  const categories: string[] = [];

  products.forEach((product: Product) => {
    if (categories.includes(product.category)) return;
    categories.push(product.category);
  });

  categories.forEach(category => {
    const productsInCat = products.filter((prod: Product) => prod.category === category);
    tableContent.push(<ProductsTableHeader title={category} key={category} />)
    productsInCat.forEach((prod: Product) => {
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
