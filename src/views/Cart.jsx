import { useDispatch, useSelector } from 'react-redux';
import CartProductList from './components/Products/CartProductList';
import CartSidebar from './components/CartSidebar';
import Alert from '@components/alerts/Alert';
import { setProductQuantity, removeProduct } from '@store/cart';

const Cart = () => {
  const cart = useSelector((state) => state.cartStore.cart);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    if (!cart.items.length) return 0;

    return cart.items.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
  };

  const removeProductFromCart = (productId) => {
    dispatch(removeProduct(productId));
  };

  const onChangeQuantity = ({ quantity, id }) => {
    if (!parseInt(quantity)) {
      removeProductFromCart(id);
      return;
    }

    dispatch(setProductQuantity({ quantity, id }));
  };

  return (
    <div className="cart">
      <h2 className="page-title">Shopping Cart</h2>
      <div className="container">
        {!cart.items.length && (
          <Alert className="cart__no-products" type="info" color="primary">
            No products in cart.
          </Alert>
        )}
        {!!cart.items.length && (
          <CartProductList
            products={cart.items}
            onChangeQuantity={onChangeQuantity}
            onRemoveProductFromCart={removeProductFromCart}
          />
        )}
        {!!cart.items.length && (
          <CartSidebar productsSelected={cart.items.length} shippingCost={0} total={getTotalPrice()} />
        )}
      </div>
    </div>
  );
};

export default Cart;
