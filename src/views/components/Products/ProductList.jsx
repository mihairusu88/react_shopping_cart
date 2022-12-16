import ProductCardVariant1 from '@components/products/ProductCardVariant1';
import './ProductList.scss';

const ProductList = (props) => {
  const { products } = props;

  const onAddItemToCart = (product) => {
    !props.onAddItemToCart || props.onAddItemToCart(product);
  };

  return (
    <div className="products__list">
      <div className="container">
        {products.map((product) => (
          <div className="column" key={product.id}>
            <ProductCardVariant1 product={product} onAddItemToCart={onAddItemToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
