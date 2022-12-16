import { Routes, Route } from 'react-router-dom';
import Home from '@views/Home';
import Products from '@views/Products';
import Product from '@views/Product';
import Cart from '@views/Cart';
import NotFound from '@views/NotFound';
import LayoutDefault from '@layouts/LayoutDefault';
import LayoutBlank from '@layouts/LayoutBlank';

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<LayoutBlank />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RouterView;
