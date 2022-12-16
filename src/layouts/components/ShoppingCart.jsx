import './ShoppingCart.scss';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from '@store/cart';
import { priceFormat } from '@utils/number';
import { withClickOutside } from '@utils/component';
import Button from '@components/buttons/Button';
import Badge from '@components/badges/Badge';
import ProductCardVariant2 from '@components/products/ProductCardVariant2';

const ShoppingCart = forwardRef(({ open, setOpen }, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartStore.cart);
  const getTotalPrice = () => {
    if (!cart.items.length) return 0;

    return cart.items.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const removeProductFromCart = (productId) => {
    dispatch(removeProduct(productId));
  };

  const onClickGoToCartButton = () => {
    navigate('/cart');
    setOpen(!open);
  };

  return (
    <div className="shopping-cart" ref={ref}>
      <Button variant="contained" circle="true" color="white" onClick={toggleDropdown}>
        {!!cart.items.length && (
          <Badge color="danger" contentColor="black" badgeContent={cart.items.length}>
            <MdShoppingCart size="20px" />
          </Badge>
        )}
        {!cart.items.length && <MdShoppingCart size="20px" />}
      </Button>
      {open && (
        <div className="shopping-cart__dropdown">
          {cart.items.length && (
            <div className="shopping-cart__dropdown-products">
              {cart.items.map((product) => (
                <ProductCardVariant2 key={product.id} product={product} onClickRemoveButton={removeProductFromCart} />
              ))}
            </div>
          )}
          {!cart.items.length && <div className="shopping-cart__dropdown-no-products">No products in cart.</div>}
          {cart.items.length && (
            <div className="shopping-cart__dropdown-totals">Total: {priceFormat({ value: getTotalPrice() })}</div>
          )}
          <div className="shopping-cart__dropdown-actions">
            <Button variant="contained" color="primary" onClick={onClickGoToCartButton}>
              Go to cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
});

ShoppingCart.displayName = 'ShoppingCart';
export default withClickOutside(ShoppingCart);
