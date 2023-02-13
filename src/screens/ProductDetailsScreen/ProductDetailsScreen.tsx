import './ProductDetailsScreen.css';
import { useTranslation } from "react-i18next";
import GROCERY_LIST from '../../resources/groceries.json';
import { Product } from '../../models/Product';
import { useParams } from "react-router-dom"; 
import ProductDetailsCard from '../../components/ProductDetailsCard/ProductDetailsCard';
import PageTitle from '../../components/common/PageTitle/PageTitle';

const ProductDetails = (props: {product: Product}) => {
  const { product } = props;
  const [t] = useTranslation('common');

  return (
    <div className="ProductDetails">
      <PageTitle title={t('product.details.title')} />
      <ProductDetailsCard product={product}/>
    </div>
  );
}

const NoProductFound = (props: {name: string}) => {
  const { name } = props;
  const [t] = useTranslation('common');

  return (
    <div className="ProductDetails">
      <PageTitle title={t('attention')} />
      <div className="card">
        <div className="NoProductFound-Text">
          <span>{t('product.details.notFound', {prodName: name})}</span>
        </div>
      </div>
    </div>
  );
}

function ProductDetailsScreen() {
    const [t] = useTranslation('common');
    let params = useParams(); // navigation params
    let pageContent: any[] = [];

    const index = GROCERY_LIST.findIndex((prod: Product) => prod.name.toLowerCase() === params.productName?.toLowerCase()) 
    if (index !== -1) {
      pageContent.push(<ProductDetails product={GROCERY_LIST[index]}/>)
    } else {
      pageContent.push(<NoProductFound name={params.productName ?? ""} />)
    }
  
    return (
      <div className="ProductDetailsScreen">
       {pageContent}
      </div>
    );
  }

  export default ProductDetailsScreen;
