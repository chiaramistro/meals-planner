import './NewProductScreen.css';
import { useTranslation } from "react-i18next";

function NewProductScreen() {
    const [t] = useTranslation('common');
  
    return (
        <div className="NewProduct">
        Add new product
      </div>
    );
  }

  export default NewProductScreen;
