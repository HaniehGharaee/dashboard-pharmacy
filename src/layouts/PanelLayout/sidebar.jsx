import { Menu } from "antd";
import { pharmacyIcon, homeIcon } from "@/assets/icons/index";
import { getMenuItems } from "./sidebarMenuItems";

export const Sidebar = ({ collapsed }) => {
  return (
    <div
      style={{
        width: collapsed ? "80px" : "200px",
        transition: "width 0.3s",
        background: "#191919",
        height: "100vh",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={pharmacyIcon}
          alt="Logo"
          style={{
            width: collapsed ? "40px" : "80px",
            height: "auto",
          }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={getMenuItems()}
      />
    </div>
  );
};
