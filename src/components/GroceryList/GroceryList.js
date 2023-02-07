import './GroceryList.css';
import SearchBar from '../SearchBar/SearchBar.js';
import ProductsTable from '../ProductsTable/ProductsTable.js';
import { useState } from 'react';

const GroceryList = props => {
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
