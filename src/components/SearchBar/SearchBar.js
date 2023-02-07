import './SearchBar.css';

const SearchBar = props => {
  const { filterText, inStockOnly } = props;

  return (
    <div className="App">
     <form>
       <input type="text" placeholder="Search" value={filterText} />
       <p>
         <input type="checkbox" checked={inStockOnly} />
         <span style={{ color: "green", fontSize: "smaller"}}>Only show products in stock</span>
       </p>
     </form>
    </div>
  );
}

export default SearchBar;
