import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductQuantity, addProductToCart } from '@store/cart';
import DataLoading from '@components/loading/DataLoading';
import ProductDetails from './components/Products/ProductDetails';
import { useGetProductQuery } from '@api/apiServiceProducts';

const Product = () => {
  let [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const productInCart = useSelector((state) => state.cartStore.cart.items.find((item) => item.id === product?.id));
  const { data, isLoading, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (productInCart) {
      setProduct(productInCart);
    }
    if (isSuccess && !productInCart) {
      setProduct(data);
    }
  }, [isSuccess, productInCart]);

  const onChangeQuantity = ({ quantity, id }) => {
    if (!parseInt(quantity)) {
      return;
    }

    if (!productInCart && product) {
      dispatch(addProductToCart(product));
      return;
    }

    dispatch(setProductQuantity({ quantity, id }));
  };

  const onAddItemToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="product">
      <h2 className="text-center">Product Page</h2>
      {isLoading && <DataLoading width={35} height={35} color="primary" />}
      {!isLoading && product && (
        <ProductDetails product={product} onChangeQuantity={onChangeQuantity} onAddItemToCart={onAddItemToCart} />
      )}
    </div>
  );
};

export default Product;
