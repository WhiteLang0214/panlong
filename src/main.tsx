import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/styles/index.js"; // 样式
import Router from "./router"; // 引入路由
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// 组件式路由
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>,
// )

// 对象式路由
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
