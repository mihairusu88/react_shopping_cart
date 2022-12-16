import './ProductCardVariant1.scss';
import modal from '@utils/modal.jsx';
import { Link } from 'react-router-dom';
import ClampLines from 'react-clamp-lines';
import { useState } from 'react';
import { priceFormat } from '@utils/number';
import Button from '@components/buttons/Button';

const ProductCardVariant1 = (props) => {
  const { product } = props;
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const onClickImage = () => {
    modal.open({
      props: {
        title: 'Added Item',
        confirmButton: 'Confirm',
        cancelButton: 'Cancel',
        component: (
          <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ),
      },
      events: {
        onCloseModal: () => {
          console.log('modal closed!');
        },
        onOpenModal: () => {
          console.log('modal open!');
        },
      },
    });
  };

  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  const onClickAddToCardButton = () => {
    !props.onAddItemToCart || props.onAddItemToCart(product);
  };

  return (
    <div className="product-card-variant-1">
      <div className="content">
        <div className="image">
          <div className="image__content">
            <Link onClick={onClickImage}>
              {isLoadingImage && <div className="image-loading-skeleton"></div>}
              <img src={product.thumbnail} alt={product.title} onLoad={onLoadImage} />
            </Link>
          </div>
        </div>
        <h3 className="title">{product.title}</h3>
        <ClampLines
          className="description"
          innerElement="p"
          text={product.description}
          lines={3}
          ellipsis="..."
          buttons={false}
        />
      </div>
      <div className="actions">
        <span className="price">{priceFormat({ value: product.price })}</span>
        <Button variant="contained" color="primary" type="button" onClick={onClickAddToCardButton}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCardVariant1;
