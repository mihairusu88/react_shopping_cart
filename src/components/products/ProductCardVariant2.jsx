import './ProductCardVariant2.scss';
import { useState } from 'react';
import { priceFormat } from '@utils/number';
import Button from '@components/buttons/Button';
import { MdClose } from 'react-icons/md';
import { Rating } from 'react-simple-star-rating';

const ProductCardVariant2 = (props) => {
  const { product } = props;
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  const onClickRemoveButton = () => {
    !props.onClickRemoveButton || props.onClickRemoveButton(product.id);
  };

  return (
    <div className="product-card-variant-2">
      <div className="content">
        <div className="image">
          <div className="image__content">
            {isLoadingImage && <div className="image-loading-skeleton"></div>}
            <img src={product.thumbnail} alt={product.title} onLoad={onLoadImage} />
          </div>
        </div>
        <div className="details">
          <div className="rating">
            <Rating readonly allowFraction size={15} initialValue={product.rating} />
          </div>
          <h3 className="title">{product.title}</h3>
          <span className="quantity">x{product.quantity}</span>
          <span className="price">{priceFormat({ value: product.price })}</span>
        </div>
      </div>
      <div className="actions">
        <Button variant="outlined" color="primary" type="button" onClick={onClickRemoveButton}>
          <MdClose />
        </Button>
      </div>
    </div>
  );
};

export default ProductCardVariant2;
