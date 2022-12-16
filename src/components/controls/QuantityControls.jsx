import './QuantityControls.scss';
import { useEffect, useState } from 'react';
import Button from '@components/buttons/Button';
import Input from '@components/inputs/Input';

const QuantityControls = ({ quantity = 0, buttonsVariant = 'contained', ...props }) => {
  const [quantityValue, setQuantityValue] = useState(quantity);

  const incrementQuantityValue = () => setQuantityValue(parseInt(quantityValue) + 1);
  const decrementQuantityValue = () => setQuantityValue(parseInt(quantityValue) - 1);
  const onChangeQuantity = (event) => setQuantityValue(event.target.value);

  useEffect(() => {
    !props.onChange || props.onChange(quantityValue);
  }, [quantityValue]);

  return (
    <div className="quantity-controls">
      <Button variant={buttonsVariant} color="primary" onClick={decrementQuantityValue}>
        -
      </Button>
      <Input type="text" value={quantityValue} onChange={onChangeQuantity} />
      <Button variant={buttonsVariant} color="primary" onClick={incrementQuantityValue}>
        +
      </Button>
    </div>
  );
};

export default QuantityControls;
