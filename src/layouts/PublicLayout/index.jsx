import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { HeaderPublic } from './Header';

export const PublicLayout = () => {
  return (
    <div className='flex flex-col self-stretch min-h-screen'>
      <HeaderPublic />
      <div className='flex flex-col flex-1 max-w-screen-xl px-4 mx-auto w-full'>
        <main className=''>{<Outlet />}</main>
      </div>
    </div>
  );
};
PublicLayout.propTypes = {
  children: PropTypes.node,
};

export default PublicLayout;