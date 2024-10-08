import Dashboard from "@/components/Menu/index";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="mx-auto max-w-screen h-full ">
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
};

export default PrivateLayout;
