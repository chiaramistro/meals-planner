import './SearchBar.css';

const SearchBar = (props: {filterText: string; inStockOnly: boolean; onFilterTextChange: Function; onInStockOnlyChange: Function;}) => {
  const { filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } = props;

  function onChangeInput(event: any) {
    onFilterTextChange(event.target.value);
  }

  function onChangeCheckbox(event: any) {
    onInStockOnlyChange(event.target.checked);
  }

  return (
    <div className="SearchBar">
     <form>
       <p className="SearchBar-text">Search through your products</p>
       <input className="SearchBar-input" type="text" placeholder="Search" value={filterText} onChange={onChangeInput} />
       <div className="SearchBar-checkbox">
         <input className="SearchBar-checkbox-input" type="checkbox" checked={inStockOnly} onChange={onChangeCheckbox} />
         <span className="SearchBar-checkbox-text">Only show products in stock</span>
       </div>
     </form>
    </div>
  );
}

export default SearchBar;
