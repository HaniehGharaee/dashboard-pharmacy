import { useState, useEffect } from "react";
import DateDisplay from "./DateDisplay";
import irflag from "@/assets/images/irflag.png";
import ukflag from "@/assets/images/ukflag.png";
import { Badge, Popover } from "antd";
import {
  GlobalOutlined,
  BellOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Dropdown } from "antd";

const HeaderPublic = () => {
  const [currentLanguage, setCurrentLanguage] = useState("fa" || "en");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleIsOpen = () => setIsOpen((o) => !o);
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    // i18n.changeLanguage(language);
    // const isRtl = language === 'fa';
    // document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    // dispatch(setDirection(language));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNotificationItems = () => [
    {
      label: (
        <div>
          <h3 className="flex gap-2 mb-2">
            medicineNear<h3 className="text-red-700">expire</h3> <span>:</span>
          </h3>
        </div>
      ),
      key: "expired",
      //icon: <img src={routine} alt="Routine Icon" className="w-10" />,
    },
  ];

  return (
    <div
      className={`sticky top-0 z-50 w-full bg-stone-200 transition-shadow px-6 py-4 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
          <div className="p-0 bg-transparent border-none outline-none flex items-center">
            <Dropdown
              placement="bottomRight"
              trigger={["click"]}
              menu={{ items: renderNotificationItems() }}
              dropdownRender={(menu) => (
                <div
                  className="max-h-[200px] w-full overflow-y-auto border-b p-2"
                  style={{ backgroundColor: "#f0f2f5" }}
                >
                  {menu}
                </div>
              )}
            >
              <Badge count={12}>
                <BellOutlined style={{ fontSize: "23px", color: "#1C73D4" }} />
              </Badge>
            </Dropdown>
          </div>
          <Popover
            content={
              <ul className="p-2 mb-0">
                <div
                  className={
                    currentLanguage == "fa"
                      ? "shadow-zinc-500 shadow px-2 mb-2 pt-3 rounded-lg"
                      : "px-2 mb-2 pt-3"
                  }
                  onClick={() => changeLanguage("fa")}
                >
                  <img
                    src={irflag}
                    alt="Farsi Flag"
                    className="w-4 h-4 cursor-pointer mx-auto block"
                  />
                  <li className="cursor-pointer pb-3 text-center" value="fa">
                    فارسی
                  </li>
                </div>
                <div
                  onClick={() => changeLanguage("en")}
                  className={
                    currentLanguage == "en"
                      ? "shadow-zinc-500 shadow px-2 mb-2 pt-3 rounded-lg"
                      : "px-2 mb-2 pt-3"
                  }
                >
                  <img
                    src={ukflag}
                    alt="English Flag"
                    className=" w-4 h-4 mr-3 cursor-pointer block mx-auto"
                  />
                  <li className="cursor-pointer text-center" value="en">
                    english
                  </li>
                </div>
              </ul>
            }
            placement="bottom"
            trigger="click"
          >
            <GlobalOutlined className="!text-[#1c73d4] text-xl cursor-pointer" />
          </Popover>
        </div>
        <div className="flex justify-end items-center gap-x-2 text-xl font-semibold text-gray-800">
          <DateDisplay />
          <CalendarOutlined className="mb-2" />
        </div>
      </div>
    </div>
  );
};

export default HeaderPublic;
