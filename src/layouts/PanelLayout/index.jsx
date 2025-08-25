import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/layouts/PanelLayout/sidebar";
import HeaderPublic from "../PublicLayout/Header";
import { theme } from "antd";

const PanelLayout = () => {
  const [collapsed, setCollapsed] = useState(false); //for desktop
  const [mobileOpen, setMobileOpen] = useState(false); // for mobile

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`
          hidden md:block 
          ${collapsed ? "w-20" : "w-52"} 
          transition-all duration-300 
        `}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <HeaderPublic
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            setMobileOpen={mobileOpen}
          />
        </div>

        {/* محتوا (با فاصله از هدر) */}
        <div className="flex-1 mt-16 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>

      {/* موبایل: سایدبار کشویی */}
      <div
        className={`
          md:hidden fixed inset-y-0 left-0 z-40 
          transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300
          w-52 bg-white shadow-lg
        `}
      >
        <Sidebar collapsed={false} />
      </div>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default PanelLayout;
