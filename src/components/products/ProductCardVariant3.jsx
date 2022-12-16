import './ProductCardVariant3.scss';
import { useState } from 'react';
import { priceFormat } from '@utils/number';
import { MdClose } from 'react-icons/md';
import Button from '@components/buttons/Button';
import QuantityControls from '@components/controls/QuantityControls';
import { Rating } from 'react-simple-star-rating';

const ProductCardVariant3 = (props) => {
  const { product } = props;
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  const onClickRemoveButton = () => {
    !props.onClickRemoveButton || props.onClickRemoveButton(product.id);
  };

  const onChangeQuantity = (quantity) => {
    !props.onChangeQuantity || props.onChangeQuantity({ quantity, id: product.id });
  };

  return (
    <div className="product-card-variant-3">
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
          <span className="price">{priceFormat({ value: product.price })}</span>
        </div>
        <div className="quantity">
          <QuantityControls
            buttonsColor="secondary"
            buttonsVariant="contained"
            quantity={product.quantity}
            onChange={onChangeQuantity}
          />
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

export default ProductCardVariant3;
