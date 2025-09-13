import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { pharmacyIcon, homeIcon } from "@/assets/icons/index";
import { getMenuItems } from "./sidebarMenuItems";

export const Sidebar = ({ collapsed }) => {
  const [selectedKey, setSelectedKey] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const items = getMenuItems();

  useEffect(() => {
    const findMenuItemKey = (items, pathname) => {
      if (!items) return "";
      for (const item of items) {
        // Match against item.route
        if (item.route === pathname) return item.key;
        if (item.children) {
          const child = item.children.find((c) => c.route === pathname);
          // Match against child.route
          if (child) return child.key;
        }
      }
      return "";
    };
    const currentPathKey = findMenuItemKey(items, location.pathname);
    setSelectedKey(currentPathKey);
  }, [location.pathname]);
  //This effect is executed every time location.pathname changes.

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
        items={items}
        selectedKeys={[selectedKey]}
        onClick={({ key }) => {
          const menuItem =
            items.find((i) => i.key === key) ||
            items.flatMap((i) => i.children || []).find((c) => c.key === key);
          if (menuItem?.route) navigate(menuItem.route);
        }}
      />
    </div>
  );
};
