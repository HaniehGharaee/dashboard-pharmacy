import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/layouts/PanelLayout/sidebar";
import HeaderPublic from "../PublicLayout/Header";
import { theme } from "antd";

const PanelLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div style={{ display: "flex" }}>
      <Sidebar collapsed={collapsed} />
      <div style={{ flex: 1 }}>
        <HeaderPublic collapsed={collapsed} setCollapsed={setCollapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default PanelLayout;
