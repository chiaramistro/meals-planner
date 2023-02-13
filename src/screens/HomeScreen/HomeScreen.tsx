import './HomeScreen.css';
import { useTranslation } from "react-i18next";
import GroceryList from "../../components/GroceryList/GroceryList";
import GROCERY_LIST from '../../resources/groceries.json';
import { useNavigate } from "react-router-dom";
import { Product } from '../../models/Product';
import PageTitle from '../../components/common/PageTitle/PageTitle';

function HomeScreen() {
    const [t, i18n] = useTranslation('common');
    let navigate = useNavigate();

    function onAddNewProduct() {
      navigate('/new-product');
    }
  
    function goToProductDetails(prod: Product) {
      navigate('/product-details/' + prod.name.toLowerCase());
    }

    return (
        <div className="Home">
        <div className="Home-Header-Buttons">
          <button className="btn" onClick={() => i18n.changeLanguage('it')}>{t('home.italian')}</button>
          <button className="btn" onClick={() => i18n.changeLanguage('en')}>{t('home.english')}</button>
        </div>
        <PageTitle title={t('home.title', {appName: 'Meals Planner'})} />
        <GroceryList products={GROCERY_LIST} onAddNewProduct={onAddNewProduct} goToProductDetails={goToProductDetails} />
      </div>
    );
  }

  export default HomeScreen;
