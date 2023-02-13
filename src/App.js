import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NewProductScreen from './screens/NewProductScreen/NewProductScreen';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailsScreen from './screens/ProductDetailsScreen/ProductDetailsScreen';

function App() {
  return (
      <div className="App">
      <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/new-product" element={<NewProductScreen />} />
          <Route path="/product-details/:productName" element={<ProductDetailsScreen />} />
          <Route path="*" element={<HomeScreen />} /> {/* redirect to homescreen if path not found */}
      </Routes>
      </div>
  );
}

export default App;
