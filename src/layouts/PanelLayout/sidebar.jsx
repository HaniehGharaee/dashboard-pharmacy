import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { pharmacyIcon, homeIcon } from "@/assets/icons/index";

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
        items={[
          {
            key: "1",
            icon: (
              <img
                src={homeIcon}
                alt="Home Icon"
                style={{
                  width: "20px",
                  filter: "brightness(0) saturate(100%) invert(1)",
                }}
              />
            ),
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "nav 4",
          },
          {
            key: "5",
            icon: <UploadOutlined />,
            label: "nav 5",
          },
          {
            key: "6",
            icon: <UploadOutlined />,
            label: "nav 6",
          },
          {
            key: "7",
            icon: <UploadOutlined />,
            label: "nav 7",
          },
        ]}
      />
    </div>
  );
};
