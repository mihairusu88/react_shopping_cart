import './RecentlyViewed.scss';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '@store/history';
import Button from '@components/buttons/Button';
import Alert from '@components/alerts/Alert';
import ProductCardVariant4 from '@components/products/ProductCardVariant4';

const RecentlyViewed = () => {
  const historyItems = useSelector((state) => state.historyStore.history.items);
  const dispatch = useDispatch();

  const onClickClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="recently-viewed">
      <div className="recently-viewed__header">
        <h3>Recently Viewed</h3>
        {!!historyItems.length && (
          <Button variant="outlined" color="primary" onClick={onClickClearHistory}>
            Clear navigation history
          </Button>
        )}
      </div>
      {!historyItems.length && (
        <Alert className="recently-viewed__no-history" type="info" color="grey">
          No navigation history.
        </Alert>
      )}
      {!!historyItems.length && (
        <div className="recently-viewed__content">
          <Swiper
            spaceBetween={10}
            slidesPerView={12}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 3,
              },
              '@0.75': {
                slidesPerView: 6,
              },
              '@1.00': {
                slidesPerView: 8,
              },
              '@1.50': {
                slidesPerView: 12,
              },
            }}
          >
            {historyItems.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCardVariant4 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default RecentlyViewed;
