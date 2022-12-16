import './ProductCardVariant5.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { priceFormat } from '@utils/number';
import ClampLines from 'react-clamp-lines';
import { Rating } from 'react-simple-star-rating';

const ProductCardVariant5 = ({ product = null }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  return (
    <div className="product-card-variant-5">
      <div className="image">
        <div className="image__content">
          <Link to={`/products/${product.id}`}>
            {isLoadingImage && <div className="image-loading-skeleton"></div>}
            <img src={product.thumbnail} alt={product.title} onLoad={onLoadImage} />
          </Link>
        </div>
      </div>
      <div className="rating">
        <Rating readonly allowFraction size={15} initialValue={product.rating} />
      </div>
      <h3 className="title">
        <Link to={`/products/${product.id}`}>
          <ClampLines innerElement="p" text={product.title} lines={1} ellipsis="..." buttons={false} />
        </Link>
      </h3>
      <span className="price">{priceFormat({ value: product.price })}</span>
    </div>
  );
};

export default ProductCardVariant5;
