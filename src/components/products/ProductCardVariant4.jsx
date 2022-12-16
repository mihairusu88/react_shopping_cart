import './ProductCardVariant4.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductCardVariant4 = ({ product = null }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  return (
    <div className="product-card-variant-4">
      <div className="image">
        <div className="image__content">
          <Link to={`/products/${product.id}`}>
            {isLoadingImage && <div className="image-loading-skeleton"></div>}
            <img src={product.thumbnail} alt={product.title} onLoad={onLoadImage} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardVariant4;
