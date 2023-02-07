import './ProductsTable.css';
import ProductRow from '../ProductRow/ProductRow';
import { Product } from '../../models/Product';

const ProductsTableHeader = (props: {title: string}) => {
  const { title } = props;

  return (
    <tr className="ProductsTableHeader">
      <td align="center" colSpan={2}><span className='ProductsTableHeader-text'>{title}</span></td>
    </tr>
  );
}

function ProductsTableSubHeader() {
  return (
    <tr className="ProductsTableSubHeader">
      <td align="left"><span className='ProductsTableSubHeader-text'>Name</span></td>
      <td align="right"><span className='ProductsTableSubHeader-text'>Price</span></td>
    </tr>
  );
}

function ProductsTableDivider() {
  return (
    <tr>
      <td align="center" colSpan={2}><div className='divider'></div></td>
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
    tableContent.push(<ProductsTableSubHeader />)
    productsInCat.forEach((prod: Product) => {
      if (prod.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && prod.quantity === 0) {
        return;
      }
      tableContent.push(<ProductRow product={prod} key={prod.name}/>)
    })
    if (index !== categories.length-1) { // not last one
      tableContent.push(<ProductsTableDivider />)
    }
  });
  
  return (
    <div className="ProductsTable">
     <table width="100%">
       {/* <thead>
        <tr>
          <th align="left">Name</th>
          <th align="right">Price</th>
        </tr>
       </thead> */}
       <tbody>
        {tableContent}
       </tbody>
     </table>
    </div>
  );
}

export default ProductsTable;
