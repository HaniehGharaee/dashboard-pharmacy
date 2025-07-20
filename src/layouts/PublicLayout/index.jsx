import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import HeaderPublic from "./Header";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPublic />
      <main className="flex-1">
        <div className="max-w-[1300px] mx-auto px-3 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node,
};

export default PublicLayout;
