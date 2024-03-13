// .18版本以前的旧写法 组件形式

import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


//  BrowserRouter （history模式）
// HashRouter （Hash模式）

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* 访问 / 时，重定向到 /home */}
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter
