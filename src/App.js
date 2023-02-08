import './App.css';
import GroceryList from './components/GroceryList/GroceryList';
import GROCERY_LIST from './resources/groceries.json';
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation('common');

  return (
    <div className="App">
      <div className="App-Header-Buttons">
        <button className="btn" onClick={() => i18n.changeLanguage('it')}>{t('home.italian')}</button>
        <button className="btn" onClick={() => i18n.changeLanguage('en')}>{t('home.english')}</button>
      </div>
      <div className="App-Header-Text">
          <h1>{t('home.title', {appName: 'Meals Planner'})}</h1>
      </div>
     <GroceryList products={GROCERY_LIST} />
    </div>
  );
}

export default App;
