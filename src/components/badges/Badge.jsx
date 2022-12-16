import classNames from 'classnames';
import './Badge.scss';

const Badge = (props) => {
  const color = props.color || 'primary';
  const badgeContent = props.badgeContent || 0;
  const contentColor = props.contentColor || 'primary';

  return (
    <div className={classNames(`badge badge-${color} badge-content-${contentColor}`)}>
      <span className="badge__content">{props.children}</span>
      <span className="badge__badge-content">{badgeContent}</span>
    </div>
  );
};

export default Badge;
