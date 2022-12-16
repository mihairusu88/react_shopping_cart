import { useEffect, useState } from 'react';
import ProductList from './components/Products/ProductList';
import DataLoading from '@components/loading/DataLoading';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@store/cart';
import { useGetProductsQuery } from '@api/apiServiceProducts';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isFetching } = useGetProductsQuery({ skip: offset, limit });
  const isReachedToEnd = !data?.products.length;

  useEffect(() => {
    if (isSuccess) {
      setProducts([...products, ...data.products]);
    }
  }, [isSuccess]);

  const onAddItemToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const onLoadMore = () => {
    const offsetValue = !offset ? limit : parseInt(offset + 10);
    const limitValue = 10;
    setOffset(offsetValue);
    setLimit(limitValue);
  };

  return (
    <div className="products">
      <h2 className="text-center">Products Page</h2>
      {isLoading && <DataLoading width={35} height={35} color="primary" />}
      {!isLoading && (
        <ProductList
          products={products}
          onAddItemToCart={onAddItemToCart}
          onLoadMore={onLoadMore}
          isReachedToEnd={isReachedToEnd}
          isFetchingMore={isFetching}
        />
      )}
    </div>
  );
};

export default Products;
