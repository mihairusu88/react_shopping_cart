import './Categories.scss';
import { useEffect, useState } from 'react';
import { useGetProductsCategoriesQuery } from '@api/apiServiceProducts';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import DataLoading from '@components/loading/DataLoading';
import CategoryCardVariant1 from '@components/categories/CategoryCardVariant1';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, isSuccess } = useGetProductsCategoriesQuery();

  useEffect(() => {
    if (isSuccess) {
      setCategories([...categories, ...data]);
    }
  }, [isSuccess]);

  return (
    <div className="categories">
      <h3>Browse by Category</h3>
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
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCardVariant1 category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;
