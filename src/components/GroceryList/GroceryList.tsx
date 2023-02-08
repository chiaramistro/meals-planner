import './GroceryList.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductsTable from '../ProductsTable/ProductsTable';
import { useState } from 'react';
import { Product } from '../../models/Product';

const GroceryList = (props: {products: Product[], onAddNewProduct: Function;}) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const { products, onAddNewProduct } = props;
  
  const onFilterTextChange = (text: string) => {
    setFilterText(text);
  }

  const onInStockOnlyChange = (inStockOnly: boolean) => {
    setInStockOnly(inStockOnly);
  }

  return (
    <div className="GroceryList">
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={onFilterTextChange} onInStockOnlyChange={onInStockOnlyChange} onAddNewProduct={onAddNewProduct} />
      <ProductsTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default GroceryList;
