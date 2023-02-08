import './App.css';
import GroceryList from './components/GroceryList/GroceryList';
import GROCERY_LIST from './resources/groceries.json';
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="App">
      <div>
          <h1>{t('home.title', {appName: 'Meals Planner'})}</h1>
          <button onClick={() => i18n.changeLanguage('it')}>{t('home.italian')}</button>
          <button onClick={() => i18n.changeLanguage('en')}>{t('home.english')}</button>
      </div>
     <GroceryList products={GROCERY_LIST} />
    </div>
  );
}

export default App;
