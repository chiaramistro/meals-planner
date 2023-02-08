import './HomeScreen.css';
import { useTranslation } from "react-i18next";
import GroceryList from "../../components/GroceryList/GroceryList";
import GROCERY_LIST from '../../resources/groceries.json';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Product } from '../../models/Product';

// export interface HomeScreenProps {
//   navigation: NavigationProp<ParamListBase>
// };

const HomeScreen = (props: {navigation: NavigationProp<ParamListBase>}) => {
    const [t, i18n] = useTranslation('common');

    function onAddNewProduct(product: Product) {
      props.navigation.navigate('NewProduct')
    }
  
    return (
        <div className="Home">
        <div className="Home-Header-Buttons">
          <button className="btn" onClick={() => i18n.changeLanguage('it')}>{t('home.italian')}</button>
          <button className="btn" onClick={() => i18n.changeLanguage('en')}>{t('home.english')}</button>
        </div>
        <div className="Home-Header-Text">
            <h1>{t('home.title', {appName: 'Meals Planner'})}</h1>
        </div>
      <GroceryList products={GROCERY_LIST} onAddNewProduct={onAddNewProduct} />
      </div>
    );
  }

  export default HomeScreen;
