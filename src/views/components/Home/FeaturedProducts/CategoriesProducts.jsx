import './CategoriesProducts.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useGetCategoryProductsQuery } from '@api/apiServiceProducts';
import DataLoading from '@components/loading/DataLoading';
import ProductCardVariant5 from '@components/products/ProductCardVariant5';

const CategoryProductsLength = ({ products = [], category = null }) => {
  const [productsLength, setProductsLength] = useState(0);
  const categoryProducts = products.find((item) => item.category === category);

  useEffect(() => {
    if (products.length && category && categoryProducts) {
      setProductsLength(categoryProducts.products.length);
    }
  }, [products]);

  return <p>{productsLength} items available</p>;
};

const CategoriesProducts = ({ categories = null }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { data, isLoading, isSuccess, isFetching, refetch } = useGetCategoryProductsQuery({
    category: categories[activeCategory].slug,
  });

  useEffect(() => {
    const categoryhasProducts = categoryProducts.find((item) => item.category === categories[activeCategory]);
    if (!categoryhasProducts) {
      refetch();
    }
  }, [activeCategory]);

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setCategoryProducts([...categoryProducts, { category: data.products[0].category, products: data.products }]);
    }
  }, [isSuccess, isFetching, data]);

  return (
    <div className="featured-categories-products">
      <div className="products__tabs">
        {categories.slice(0, 5).map((category, index) => (
          <Link
            onClick={() => {
              setActiveCategory(index);
            }}
            className={classNames(`products__tabs-category`, {
              active: activeCategory === index,
            })}
            key={index}
          >
            <h6>{category.slug.split('-').join(' ')}</h6>
            <CategoryProductsLength products={categoryProducts} category={categories[activeCategory]} />
          </Link>
        ))}
      </div>
      <div className="products__content">
        {categories.map((category, index) => (
          <div
            className={classNames(`products__tabs-category-content`, {
              active: activeCategory === index,
            })}
            key={index}
          >
            {(isLoading || isFetching) && <DataLoading width={35} height={35} color="primary" />}
            {!isLoading &&
              !isFetching &&
              categoryProducts.find((item) => item.category === categories[activeCategory]) &&
              categoryProducts
                .find((item) => item.category === categories[activeCategory])
                .products.map((product, index) => (
                  <div className="products__tabs-category-content-item" key={index}>
                    <ProductCardVariant5 product={product} />
                  </div>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesProducts;
