import React from "react";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import * as pathRoute from "@/constants/routePaths/RoutePaths";
import ViewDashboard from "@/components/dashboard/index";
import Medicines from "@/components/medicine/index";
import AddMedicines from "@/components/medicine/medicineAdd";
import PanelLayout from "@/layouts/PanelLayout";

const App = () => {
  return (
    // <Provider store={store}>
    <ConfigProvider
      direction="ltr"
      theme={{
        token: {
          colorPrimary: "#4c8fed",
          colorPrimaryHover: "#7C3AED",
          colorPrimaryActive: "#6D28D9",
          colorLink: "#4c8fed",
          colorLinkHover: "#7C3AED",
          colorLinkActive: "#6D28D9",
          borderRadius: 6,
        },
      }}
    >
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        ltr={true}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route element={<PanelLayout />}>
            <Route path={pathRoute.dashboardPath} element={<ViewDashboard />} />
            <Route path={pathRoute.medicineListPath} element={<Medicines />} />
            <Route
              path={pathRoute.medicineAddPath}
              element={<AddMedicines />}
            />
            <Route
              path={pathRoute.mainPathSlash}
              element={<Navigate to={pathRoute.dashboardPath} />}
            />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
    // </Provider>
  );
};

export default App;
