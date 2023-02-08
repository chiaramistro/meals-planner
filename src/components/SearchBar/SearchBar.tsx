import './SearchBar.css';
import { useTranslation } from "react-i18next";

const SearchBar = (props: {filterText: string; inStockOnly: boolean; onFilterTextChange: Function; onInStockOnlyChange: Function;}) => {
  const { filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } = props;
  const [t, i18n] = useTranslation('common');
  const searchPlaceholder: string = t('product.searchPlaceholder')

  function onChangeInput(event: any) {
    onFilterTextChange(event.target.value);
  }

  function onChangeCheckbox(event: any) {
    onInStockOnlyChange(event.target.checked);
  }

  return (
    <div className="SearchBar">
     <form>
       <p className="SearchBar-text">{t('product.search')}</p>
       <input className="SearchBar-input" type="text" placeholder={searchPlaceholder} value={filterText} onChange={onChangeInput} />
       <div className="SearchBar-checkbox">
         <input className="SearchBar-checkbox-input" type="checkbox" checked={inStockOnly} onChange={onChangeCheckbox} />
         <span className="SearchBar-checkbox-text">{t('product.filter')}</span>
       </div>
     </form>
    </div>
  );
}

export default SearchBar;
