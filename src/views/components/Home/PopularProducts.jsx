import './PopularProducts.scss';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@store/cart';
import { useGetProductsQuery } from '@api/apiServiceProducts';
import DataLoading from '@components/loading/DataLoading';
import ProductCardVariant1 from '@components/products/ProductCardVariant1';

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const { data, isLoading, isSuccess } = useGetProductsQuery({ skip: 10, limit: 10 });
  const dispatch = useDispatch();

  const onAddItemToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.products);
    }
  }, [isSuccess]);

  return (
    <div className="popular-products">
      <h3>Popular Products</h3>
      {isLoading && <DataLoading width={35} height={35} color="primary" />}
      {!isLoading && (
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
            },
            '@0.75': {
              slidesPerView: 3,
            },
            '@1.00': {
              slidesPerView: 5,
            },
            '@1.50': {
              slidesPerView: 6,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCardVariant1 product={product} onAddItemToCart={onAddItemToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PopularProducts;
