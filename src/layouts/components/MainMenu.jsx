import './MainMenu.scss';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import classNames from 'classnames';

const MainMenu = () => {
  const location = useLocation();

  const routes = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/products',
      name: 'Products',
    },
    {
      path: '/cart',
      name: 'Cart',
    },
  ];
  return (
    <div className="main-menu">
      <div className="main-menu__logo">
        <Link to="/">LOGO</Link>
      </div>
      <nav>
        <ul>
          {routes.map((route) => (
            <li
              className={classNames({
                active: location.pathname === route.path,
              })}
              key={route.name}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ShoppingCart />
    </div>
  );
};

export default MainMenu;
