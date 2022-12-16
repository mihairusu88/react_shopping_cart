import './ProductDetails.scss';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToHistory } from '@store/history';
import { priceFormat } from '@utils/number';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Button from '@components/buttons/Button';
import QuantityControls from '@components/controls/QuantityControls';
import { Rating } from 'react-simple-star-rating';

const ProductDetails = ({ product = null, ...props }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const productInHistory = useSelector((state) =>
    state.historyStore.history.items.find((item) => item.id === product.id),
  );
  const dispatch = useDispatch();

  const onLoadImage = () => {
    setIsLoadingImage(false);
  };

  const onChangeQuantity = (quantity) => {
    !props.onChangeQuantity || props.onChangeQuantity({ quantity, id: product.id });
  };

  const onClickAddToCardButton = () => {
    !props.onAddItemToCart || props.onAddItemToCart(product);
  };

  useEffect(() => {
    if (!productInHistory) {
      dispatch(addProductToHistory(product));
    }
  }, [productInHistory]);

  return (
    <div className="product-details">
      <div className="container">
        <div className="image">
          <div className="image__content">
            {isLoadingImage && <div className="image-loading-skeleton"></div>}
            <img src={product.images[selectedImageIndex]} alt={product.title} onLoad={onLoadImage} />
          </div>
          <div className="image__thumbs">
            <Swiper spaceBetween={5} slidesPerView={6} navigation={true} modules={[Navigation, Thumbs]}>
              {product.images.map((thumb, index) => (
                <SwiperSlide
                  className={classNames({
                    'image__thumbs-selected': selectedImageIndex === index,
                  })}
                  key={index}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedImageIndex(index);
                  }}
                >
                  {isLoadingImage && <div className="image-loading-skeleton"></div>}
                  <img key={index} src={thumb} alt={product.title} onLoad={onLoadImage} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="content">
          <h3 className="title">{product.title}</h3>
          <div className="category">
            Category: <span>{product.category}</span>
          </div>
          <div className="brand">
            Brand: <span>{product.brand}</span>
          </div>
          <div className="rating">
            <Rating readonly allowFraction size={20} initialValue={product.rating} />
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
          <div className="actions">
            <div className="price">{priceFormat({ value: product.price })}</div>
            <div className="quantity">
              <QuantityControls
                quantity={product.quantity}
                buttonsVariant="contained"
                buttonsColor="secondary"
                onChange={onChangeQuantity}
              />
            </div>
            <Button variant="contained" color="primary" type="button" onClick={onClickAddToCardButton}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
