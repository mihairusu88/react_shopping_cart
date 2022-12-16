import './CartSidebar.scss';
import { priceFormat } from '@utils/number';

const CartSidebar = ({ productsSelected = 0, shippingCost = 0, total = 0 }) => {
  return (
    <div className="cart-sidebar">
      <div className="cart-sidebar__section">
        <h4 className="cart-sidebar__section-title">Products selected:</h4>
        <span>{productsSelected}</span>
      </div>
      <div className="cart-sidebar__section">
        <h4 className="cart-sidebar__section-title">Shipping Cost:</h4>
        <span>{shippingCost}</span>
      </div>
      <div className="cart-sidebar__section total">
        <h4 className="cart-sidebar__section-title">Total:</h4>
        <span>{priceFormat({ value: total })}</span>
      </div>
    </div>
  );
};

export default CartSidebar;
