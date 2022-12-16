import './ProductCardVariant2.scss';
import { priceFormat } from '@utils/number';
import Button from '@components/buttons/Button';
import { MdClose } from 'react-icons/md';

const ProductCardVariant2 = (props) => {
  const { product } = props;
  const onClickRemoveButton = () => {
    !props.onClickRemoveButton || props.onClickRemoveButton(product.id);
  };

  return (
    <div className="product-card-variant-2">
      <div className="content">
        <div className="image">
          <div className="image__content">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>
        <div className="details">
          <h3 className="title">{product.title}</h3>
          <span className="quantity">x{product.quantity}</span>
          <span className="price">{priceFormat({ value: product.price })}</span>
        </div>
      </div>
      <div className="actions">
        <Button variant="outlined" color="primary" type="button" onClick={onClickRemoveButton}>
          <MdClose />
        </Button>
      </div>
    </div>
  );
};

export default ProductCardVariant2;
