import React from "react";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Provider as ReduxProvider } from "react-redux";
//import { store } from "@/redux/store";
import routes from "@/routes/index";
//import LoginPage from "@/components/Login/Loadable";
import ViewDashboard from "@/components/dashboard/index";
import Medicine from "@/components/medicine/index";
//import NotFoundPage from "@/components/NotFoundPage/index";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
// import PrivateRoutes from "@/routes/PrivateRoutes";

const App = () => {
  return (
    // <ReduxProvider store={store}>
    <ConfigProvider
      direction="rtl"
      theme={{
        token: {
          colorPrimary: "#4c8fed",
          colorPrimaryHover: "#7C3AED",
          colorPrimaryActive: "#6D28D9",
          colorLink: "#4c8fed",
          colorLinkHover: "#7C3AED",
          colorLinkActive: "#6D28D9",
          borderRadius: 6
        },
      }}
    >
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            {/* <Route path={routes.LoginPagePath} element={<LoginPage />} /> */}
          </Route>
          {/* <Route element={<PrivateRoutes />}> */}
          <Route element={<PrivateLayout />}>
            <Route
              path={routes.dashboardPagePath}
              element={<ViewDashboard />}
            />
            <Route path={routes.medicinePagePath} element={<Medicine />} />
          </Route>
          {/* </Route> */}
          {/* <Route path={routes.othersPagePath} element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </ConfigProvider>
    // </ReduxProvider>
  );
};

export default App;
