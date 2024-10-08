import { Avatar, Menu, ConfigProvider, Affix } from "antd";
import {
  FileOutlined,
  KeyOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import routes from "@/routes";

const Sidebar = ({ selectedKey, handleMenuClick }) => {
  const items = [
    {
      label: "داشبورد",
      key: routes.dashboardPagePath,
      icon: <FileOutlined />,
    },
    {
      label: "داروها",
      key: routes.medicinePagePath,
      icon: <UserAddOutlined />,
    },
    // {
    //   label: "خروج",
    //   key: "logout",
    //   icon: <LogoutOutlined />,
    // },
  ];

  return (
    <div className="flex flex-col items-stretch h-full bg-gray-900">
      <Affix offsetTop={0}>
        <div className="flex flex-col items-center">
          <Avatar
            size={80}
            src="/src/assets/images/pharmacy.png"
            alt="pharmacy"
            className="mt-8 rounded-none"

          />
          <h3 className="font-bold text-[1rem] text-white mt-2">
            داروخانه
          </h3>
        </div>
      </Affix>
      <ConfigProvider direction="rtl">
        <div className="disable-scrollbar h-full">
          <Menu
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            items={items}
            mode="inline"
            theme='dark'
            className="mt-4 w-full border-none text-white"
          />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Sidebar;
