import { useState, useEffect } from "react";
import { Layout, Modal, Form } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@/components/hooks/UseMediaQuery";
import Sidebar from "@/components/Menu/components/Sidebar";
import MobileDrawer from "@/components/Menu/components/Drawer";

const { Sider, Content } = Layout;

const Dashboard = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changePassModalVisible, setChangePassModalVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [form] = Form.useForm();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      setLogoutModalVisible(true);
    } else if (e.key === "changePass") {
      setChangePassModalVisible(true);
    } else {
      navigate(e.key);
    }
  };

  return (
    // <Layout //className="h-full min-h-screen "
    // //className=" min-h-screen"
    // >
    //   {/* {!isMobile ? ( */}
    //   {/* <Sider
    //   // width={220}
    //   // className="h-full fixed right-0 top-0 shadow-md "
    //   // style={{ backgroundColor: "#002357" }}
    //   >
    //     <Sidebar
    //     //selectedKey={selectedKey} handleMenuClick={handleMenuClick}
    //     />
    //   </Sider>
    //   <Sidebar /> */}
    //   {/* ) : (
    //     <MobileDrawer
    //       drawerVisible={drawerVisible}
    //       toggleDrawer={toggleDrawer}
    //       selectedKey={selectedKey}
    //       handleMenuClick={handleMenuClick}
    //     />
    //   )} */}

    //   {/* <Layout
    //   //className="h-full min-h-screen "
    //   //style={{ marginRight: isMobile ? 0 : 220 }}
    //   >
    //     <Content className="h-full overflow-y-auto">
    //       <div className="mt-6">{children}</div>
    //     </Content>
    //   </Layout> */}
    // </Layout>
    <div>
    {/* <Content className="h-full overflow-y-auto"> */}
      {/* <Sidebar className="h-full fixed right-0 top-0 shadow-md" /> */}
      <div className="mt-6">{children}</div>
    {/* </Content> */}
    </div>
  );
};

export default Dashboard;
