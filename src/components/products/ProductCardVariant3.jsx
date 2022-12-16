import './ProductCardVariant3.scss';
import { priceFormat } from '@utils/number';
import { MdClose } from 'react-icons/md';
import Button from '@components/buttons/Button';
import QuantityControls from '@components/controls/QuantityControls';

const ProductCardVariant3 = (props) => {
  const { product } = props;

  const onClickRemoveButton = () => {
    !props.onClickRemoveButton || props.onClickRemoveButton(product.id);
  };

  const onChangeQuantity = (quantity) => {
    !props.onChangeQuantity || props.onChangeQuantity({ quantity, id: product.id });
  };

  return (
    <div className="product-card-variant-3">
      <div className="content">
        <div className="image">
          <div className="image__content">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>
        <div className="details">
          <h3 className="title">{product.title}</h3>
          <span className="price">{priceFormat({ value: product.price })}</span>
        </div>
        <div className="quantity">
          <QuantityControls quantity={product.quantity} onChange={onChangeQuantity} />
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

export default ProductCardVariant3;
