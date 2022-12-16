import './Input.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Input = ({ type = 'text', color = 'primary', ...props }) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <input
      className={classNames(`input input-${color}`)}
      type={type}
      value={value}
      onChange={handleChange}
      {...props}
    ></input>
  );
};

export default Input;
