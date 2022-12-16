import './DataLoading.scss';
import classNames from 'classnames';

const DataLoading = (props) => {
  const width = props.width || '25px';
  const height = props.width || '25px';
  const color = props.color || 'primary';

  const componentStyle = {
    width: width,
    height: height,
  };

  return <div className={classNames(`data-loading data-loading-${color}`)} style={componentStyle}></div>;
};

export default DataLoading;
