import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import './MainMenu.scss';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="main-menu__logo">LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <ShoppingCart />
    </div>
  );
};

export default MainMenu;
