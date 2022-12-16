import './Button.scss';
import classNames from 'classnames';

const Button = ({ className, ...props }) => {
  const color = props.color || 'primary';
  const variant = props.variant || 'contained';
  const circle = Boolean(props.circle) || false;

  return (
    <button
      className={classNames(`btn btn-${color} btn-${variant} ${className}`, {
        'btn-circle': circle,
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
