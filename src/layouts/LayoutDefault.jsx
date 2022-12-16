import MainMenu from '@layouts/components/MainMenu';
import './LayoutDefault.scss';
import { Outlet } from 'react-router-dom';

const LayoutDefault = () => {
  return (
    <div className="layout-default">
      <MainMenu />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDefault;
