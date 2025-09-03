import * as pathRoute from "@/constants/routePaths/RoutePaths";

export const getMenuItems = () => {
  return {
    super: {
      key: pathRoute.dashboardPath,
      icon: "",
      route: pathRoute.dashboardPath,
      label: "dashboard",
    },
  };
};
