// .18版本 写法 对象形式
import React, { lazy } from "react";
import Home from "../views/Home";
import { Navigate } from "react-router-dom";
import WithLoadingComponent from '@/components/PGLoading';

const About = lazy(() => import("../views/About"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: WithLoadingComponent(<About />),
  },
];

// react-dom.development.js:19055 Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 路由懒加载的模式，需要添加一个 Loading 组件
// 使用 Lazy 懒加载组件，必须使用 React.Suspense 套一层 Loading 组件
export default routes;
