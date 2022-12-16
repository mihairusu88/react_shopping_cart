import './CartProductList.scss';
import ProductCardVariant3 from '@components/products/ProductCardVariant3';

const CartProductList = (props) => {
  const { products } = props;

  const removeProductFromCart = (productId) => {
    !props.onRemoveProductFromCart || props.onRemoveProductFromCart(productId);
  };

  const onChangeQuantity = ({ quantity, id }) => {
    !props.onChangeQuantity || props.onChangeQuantity({ quantity, id });
  };

  return (
    <div className="cart-product-list">
      {products.map((product) => (
        <ProductCardVariant3
          key={product.id}
          product={product}
          onClickRemoveButton={removeProductFromCart}
          onChangeQuantity={onChangeQuantity}
        />
      ))}
    </div>
  );
};

export default CartProductList;
