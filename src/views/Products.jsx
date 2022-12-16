import { useState, useEffect } from 'react';
import apiServiceProducts from '@api/apiServiceProducts';
import ProductList from './components/Products/ProductList';
import DataLoading from '@components/loading/DataLoading';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@store/cart';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      loadProducts();
    }
  }, [products]);

  const loadProducts = async () => {
    setLoading(true);
    const response = await apiServiceProducts.get();
    setLoading(false);

    if (response.success) {
      setProducts(response.data.products);
    }
  };

  const onAddItemToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="products">
      <h2 className="page-title">Products Page</h2>
      {loading && <DataLoading width={35} height={35} color="primary" />}
      {!loading && <ProductList products={products} onAddItemToCart={onAddItemToCart} />}
    </div>
  );
};

export default Products;
