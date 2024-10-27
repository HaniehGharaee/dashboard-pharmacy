import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="app-layout bg-black">
      <main className="main-content flex-1 !min-h-[80vh] bg-black">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
