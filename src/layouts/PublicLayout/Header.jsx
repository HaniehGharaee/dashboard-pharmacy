import { useState, useEffect } from "react";
import DateDisplay from "./DateDisplay";
import irflag from "@/assets/images/irflag.png";
import ukflag from "@/assets/images/ukflag.png";
import { Button, Popover } from "antd";
import { GlobalOutlined, BellOutlined } from "@ant-design/icons";

const HeaderPublic = () => {
  const [currentLanguage, setCurrentLanguage] = useState("fa" || "en");
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((o) => !o);
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    // i18n.changeLanguage(language);
    // const isRtl = language === 'fa';
    // document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    // dispatch(setDirection(language));
  };

  return (
    <div className="sticky top-0 z-50 w-3/4 mx-auto bg-white shadow px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleIsOpen}
            className="p-0 bg-transparent border-none outline-none flex items-center"
          >
            <BellOutlined style={{ fontSize: "23px", color: "#1C73D4" }} />
          </button>
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
        <div className="text-xl font-semibold text-gray-800">
          <DateDisplay />
        </div>
      </div>
    </div>
  );
};

export default HeaderPublic;
