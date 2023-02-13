import './ProductDetailsScreen.css';
import { useTranslation } from "react-i18next";
import GROCERY_LIST from '../../resources/groceries.json';
import { Product } from '../../models/Product';
import { useParams } from "react-router-dom"; 
import ProductDetailsCard from '../../components/ProductDetailsCard/ProductDetailsCard';
import PageTitle from '../../components/common/PageTitle/PageTitle';

function ProductDetailsScreen() {
    const [t] = useTranslation('common');
    let params = useParams(); // navigation params
    let pageContent: any[] = [];

    const index = GROCERY_LIST.findIndex((prod: Product) => prod.name.toLowerCase() === params.productName?.toLowerCase()) 
    if (index !== -1) {
      pageContent.push(<PageTitle title={GROCERY_LIST[index].name} />)
      pageContent.push(<ProductDetailsCard product={GROCERY_LIST[index]}/>)
    } else {
      pageContent.push(<p>No product found with name {params.productName}</p>)
    }
  
    return (
      <div className="ProductDetailsScreen">
       {pageContent}
       
      </div>
    );
  }

  export default ProductDetailsScreen;
