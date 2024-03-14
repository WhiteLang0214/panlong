// .18版本 写法 对象形式
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Login from "../views/Login";
import Layout from "../views/Layout";
import WithLoadingComponent from "@/components/PGLoading";

const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/page1",
        element: WithLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: WithLoadingComponent(<Page2 />),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
];

// react-dom.development.js:19055 Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 路由懒加载的模式，需要添加一个 Loading 组件
// 使用 Lazy 懒加载组件，必须使用 React.Suspense 套一层 Loading 组件
export default routes;
