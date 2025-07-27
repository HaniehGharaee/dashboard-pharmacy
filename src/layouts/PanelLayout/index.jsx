import { useState } from "react";
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
      <div style={{ flex: 1}}>
        <HeaderPublic collapsed={collapsed} setCollapsed={setCollapsed} />
        <main
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 800,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </main>
      </div>
    </div>
  );
};

export default PanelLayout;
