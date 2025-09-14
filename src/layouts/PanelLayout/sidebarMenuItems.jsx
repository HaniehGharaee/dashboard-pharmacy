import * as pathRoute from "@/constants/routePaths/RoutePaths";
import { homeIcon, drugsIcon, circleIcon } from "@/assets/icons/index";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export const getMenuItems = () => {
  return [
    //It must be an array because the separation by role has not been done yet.
    {
      key: pathRoute.dashboardPath,
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
      route: pathRoute.dashboardPath,
      label: "dashboard",
    },
    {
      key: "medicines",
      icon: (
        <img
          src={drugsIcon}
          alt="Drugs Icon"
          style={{
            width: "20px",
            filter: "brightness(0) saturate(100%) invert(1)",
          }}
        />
      ),
      label: "Medicine",
      children: [
        {
          key: pathRoute.medicineListPath,
          route: pathRoute.medicineListPath,
          label: "Medicine List",
          icon: (
            <img
              src={circleIcon}
              alt="circle Icon"
              style={{
                width: "16px",
                filter: "brightness(0) saturate(100%) invert(1)",
              }}
            />
          ),
        },
        {
          key: pathRoute.medicineAddPath,
          route: pathRoute.medicineAddPath,
          label: "Medicine Add",
          icon: (
            <img
              src={circleIcon}
              alt="circle Icon"
              style={{
                width: "16px",
                filter: "brightness(0) saturate(100%) invert(1)",
              }}
            />
          ),
        },
      ],
    },
  ];
};
// {
//             key: "1",
//             icon: (
//               <img
//                 src={homeIcon}
//                 alt="Home Icon"
//                 style={{
//                   width: "20px",
//                   filter: "brightness(0) saturate(100%) invert(1)",
//                 }}
//               />
//             ),
//             label: "Dashboard",
//           },
//           {
//             key: "2",
//             icon: <VideoCameraOutlined />,
//             label: "nav 2",
//           },
//           {
//             key: "3",
//             icon: <UploadOutlined />,
//             label: "nav 3",
//           },
//           {
//             key: "4",
//             icon: <UserOutlined />,
//             label: "nav 4",
//           },
//           {
//             key: "5",
//             icon: <UploadOutlined />,
//             label: "nav 5",
//           },
//           {
//             key: "6",
//             icon: <UploadOutlined />,
//             label: "nav 6",
//           },
//           {
//             key: "7",
//             icon: <UploadOutlined />,
//             label: "nav 7",
//           },
