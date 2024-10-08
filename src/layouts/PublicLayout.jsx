import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="app-layout">
      <main className="main-content flex-1 !min-h-[80vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
