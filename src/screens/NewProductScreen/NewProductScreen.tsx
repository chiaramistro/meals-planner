import './NewProductScreen.css';
import { useTranslation } from "react-i18next";
import PageTitle from '../../components/common/PageTitle/PageTitle';

function NewProductScreen() {
    const [t] = useTranslation('common');
  
    return (
      <div className="NewProduct">
       <PageTitle title={t('product.new.title')} />
      </div>
    );
  }

  export default NewProductScreen;
