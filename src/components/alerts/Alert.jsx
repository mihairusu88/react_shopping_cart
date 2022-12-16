import './Alert.scss';
import classNames from 'classnames';
import { MdInfoOutline, MdWarningAmber, MdCheckCircleOutline } from 'react-icons/md';

const Alert = (props) => {
  const color = props.color || 'primary';
  const type = props.type || 'info';
  const title = props.title || null;

  return (
    <div className={classNames(`alert alert-color-${color} alert-${type} ${props.className}`)}>
      {type === 'info' && (
        <span className="alert__icon">
          <MdInfoOutline />
        </span>
      )}
      {type === 'warning' && (
        <span className="alert__icon">
          <MdWarningAmber />
        </span>
      )}
      {type === 'success' && (
        <span className="alert__icon">
          <MdCheckCircleOutline />
        </span>
      )}
      {type === 'danger' && (
        <span className="alert__icon">
          <MdInfoOutline />
        </span>
      )}
      <div className="alert__content">
        {title && <span className="alert__content-title">{title}</span>}
        {props.children}
      </div>
    </div>
  );
};

export default Alert;
