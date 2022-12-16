import './ProductList.scss';
import ProductCardVariant1 from '@components/products/ProductCardVariant1';
import Button from '@components/buttons/Button';
import DataLoading from '@components/loading/DataLoading';

const ProductList = (props) => {
  const { products, isFetchingMore, isReachedToEnd } = props;

  const onAddItemToCart = (product) => {
    !props.onAddItemToCart || props.onAddItemToCart(product);
  };

  const onLoadMore = () => {
    !props.onLoadMore || props.onLoadMore();
  };

  return (
    <div className="products__list">
      <div className="container">
        {products.map((product, index) => (
          <div className="column" key={index}>
            <ProductCardVariant1 product={product} onAddItemToCart={onAddItemToCart} />
          </div>
        ))}
        {isFetchingMore && <DataLoading width={35} height={35} color="primary" />}
        {!isFetchingMore && !isReachedToEnd && (
          <Button className="btn-load-more" variant="outlined" color="primary" onClick={onLoadMore}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
