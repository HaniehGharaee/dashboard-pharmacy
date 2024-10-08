import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "@/components/Menu/components/Sidebar";

const MobileDrawer = ({
  drawerVisible,
  toggleDrawer,
  selectedKey,
  handleMenuClick,
}) => {
  return (
    <>
      <Button
        icon={<MenuOutlined />}
        className={`fixed top-6 z-50 ${
          drawerVisible ? "right-[220px]" : "right-0"
        }`}
        onClick={toggleDrawer}
      />
      <Drawer
        placement="right"
        onClose={toggleDrawer}
        width={220}
        className="h-full right-0 top-0"
        closable={false}
        open={drawerVisible}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
      >
        <Sidebar selectedKey={selectedKey} handleMenuClick={handleMenuClick} />
      </Drawer>
    </>
  );
};

export default MobileDrawer;
