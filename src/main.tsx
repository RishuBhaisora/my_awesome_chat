import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ToastContainer
      hideProgressBar
      pauseOnFocusLoss={false}
      toastStyle={{ backgroundColor: "#f2ffeb", border: "1px solid #72be47" }}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
