import './App.css';
import GroceryList from './components/GroceryList/GroceryList';
import GROCERY_LIST from './resources/groceries.json';

function App() {
  
  return (
    <div className="App">
     <GroceryList products={GROCERY_LIST} />
    </div>
  );
}

export default App;
