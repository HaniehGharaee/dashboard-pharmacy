import React from "react";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ViewDashboard from "@/components/dashboard/index";
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
            <Route path="/dashboard" element={<ViewDashboard />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>

        </Routes>
      </Router>
    </ConfigProvider>
    // </Provider>
  );
};

export default App;
