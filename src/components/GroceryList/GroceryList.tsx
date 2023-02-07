import './GroceryList.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductsTable from '../ProductsTable/ProductsTable';
import { useState } from 'react';
import { Product } from '../../models/Product';

const GroceryList = (props: {products: Product[]}) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const { products } = props;
  
  return (
    <div className="App">
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductsTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default GroceryList;
