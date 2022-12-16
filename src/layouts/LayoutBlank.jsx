import { Outlet } from 'react-router-dom';

const LayoutBlank = () => {
  return (
    <div className="layout-blank">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutBlank;
