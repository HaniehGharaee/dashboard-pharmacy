import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';
//import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
//import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from 'react-toastify';
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider locale={faIR}>
      {/* <GlobalErrorBoundary> */}
        <App />
      {/* </GlobalErrorBoundary> */}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      />
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>
);
