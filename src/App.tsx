import './App.css'
import { useRoutes, Link } from 'react-router-dom'
import router from "./router"; // 对象式路由 在这里引入路由
import { Button } from "antd"

function App() {
  const routesOutlet = useRoutes(router)
  return (
    <>
    <p>顶级组件</p>
    <Button type='primary'><Link to="/home">Home</Link></Button>
    <Button type='dashed'><Link to="/about">About</Link></Button>
    {/* 就写法 */}
    {/* 组件式路由 用来展示组件，同vue种的router-view */}
     {/* <Outlet /> */}

     {/* 新写法 */}
     {/* 对象式路由 展示组件 */}
     { routesOutlet }
    </>
  )
}

export default App
