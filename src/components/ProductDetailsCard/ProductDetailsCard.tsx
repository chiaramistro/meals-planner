import { Product } from "../../models/Product";
import "./ProductDetailsCard.css";
import barcode from '../../assets/barcode.svg'
import { useTranslation } from "react-i18next";

const ProductDetailsCard = (props: {product: Product}) => {
  const { product } = props;
  const [t] = useTranslation('common');

  return (
    <div className="card">
      <div className="ProductDetailsCard-Info">

      <div className="ProductDetailsCard-Info-Main">
      <span className="ProductDetailsCard-Info-Main-Name">{product.name}</span>
      <span className="ProductDetailsCard-Info-Main-Category">{product.category}</span>
      </div>

      <div className="ProductDetailsCard-Info-Price">
        <p className="ProductDetailsCard-Info-Price-OutOfStock">{product.quantity <= 0 ? t('product.details.outOfStock') : ""}</p>
        <span className="ProductDetailsCard-Info-Price-Text">{product.price}</span>
      </div>
      </div>

      <div className="ProductDetailsCard-Barcode">
      <img className="ProductDetailsCard-Barcode-Img" src={barcode} alt="Product barcode" />
      </div>
    </div>
  );
};

export default ProductDetailsCard;
