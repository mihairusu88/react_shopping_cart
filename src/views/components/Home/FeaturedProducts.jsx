import './FeaturedProducts.scss';
import { TfiHeadphoneAlt, TfiMoney, TfiBackLeft, TfiCar, TfiUser } from 'react-icons/tfi';
import { useEffect, useState } from 'react';
import { useGetProductsCategoriesQuery } from '@api/apiServiceProducts';
import DataLoading from '@components/loading/DataLoading';
import CategoriesProducts from './FeaturedProducts/CategoriesProducts';

const FeaturedProducts = () => {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, isSuccess } = useGetProductsCategoriesQuery();

  useEffect(() => {
    if (isSuccess) {
      setCategories([...categories, ...data]);
    }
  }, [isSuccess]);

  const features = [
    {
      icon: <TfiCar />,
      title: 'Free Delivery',
      content: 'from $78',
    },
    {
      icon: <TfiUser />,
      title: '90% Customer',
      content: 'feedbacks',
    },
    {
      icon: <TfiBackLeft />,
      title: '15 Days',
      content: 'for free return',
    },
    {
      icon: <TfiMoney />,
      title: 'Payment',
      content: 'secure system',
    },
    {
      icon: <TfiHeadphoneAlt />,
      title: '24/7',
      content: ' online supports',
    },
  ];

  return (
    <div className="featured-products">
      <h3>Top Category Products This Week</h3>
      <div className="featured-products__features">
        {features.map((feature, index) => (
          <div className="features__item" key={index}>
            <div className="features__item-icon">{feature.icon}</div>
            <div className="features__item-content">
              <h6>{feature.title}</h6>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="featured-products__products">
        {isLoading && <DataLoading width={35} height={35} color="primary" />}
        {!isLoading && categories.length && <CategoriesProducts categories={categories} />}
      </div>
    </div>
  );
};

export default FeaturedProducts;
