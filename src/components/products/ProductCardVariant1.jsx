import './ProductCardVariant1.scss';
import modal from '@utils/modal.jsx';
import classNames from 'classnames';
import ClampLines from 'react-clamp-lines';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { priceFormat } from '@utils/number';
import Button from '@components/buttons/Button';
import Badge from '@components/badges/Badge';
import { MdShoppingCart, MdCategory } from 'react-icons/md';
import { Rating } from 'react-simple-star-rating';

const ProductCardVariant1 = (props) => {
  const { product } = props;
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const navigate = useNavigate();
  const productInCart = useSelector((state) => state.cartStore.cart.items.find((item) => item.id === product.id));

  const onClickImage = () => {
    modal.open({
      props: {
        title: 'Product Details',
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

  const onClickTitle = (e) => {
    e.preventDefault();
    navigate(`/products/${product.id}`);
  };

  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  const onClickAddToCardButton = () => {
    !props.onAddItemToCart || props.onAddItemToCart(product);
  };

  return (
    <div
      className={classNames(`product-card-variant-1`, {
        'product-card-variant-1-added-in-cart': productInCart,
      })}
    >
      {productInCart && (
        <div className="added-in-cart-badge">
          <Badge color="danger" contentColor="grey" badgeContent={productInCart.quantity}>
            <MdShoppingCart size="20px" />
          </Badge>
        </div>
      )}
      <div className="content">
        <div className="image">
          <div className="image__content">
            <Link onClick={onClickImage}>
              {isLoadingImage && <div className="image-loading-skeleton"></div>}
              <img src={product.thumbnail} alt={product.title} onLoad={onLoadImage} />
            </Link>
          </div>
        </div>
        <div className="rating">
          <Rating readonly allowFraction size={15} initialValue={product.rating} />
        </div>
        <h3 className="title">
          <Link onClick={onClickTitle}>{product.title}</Link>
        </h3>
        <ClampLines
          className="description"
          innerElement="p"
          text={product.description}
          lines={3}
          ellipsis="..."
          buttons={false}
        />
        <div className="category">
          <MdCategory size="15px" />
          <span>{product.category}</span>
        </div>
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
