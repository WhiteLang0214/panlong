import './App.css'
import { useRoutes } from 'react-router-dom'
import router from "./router"; // 对象式路由 在这里引入路由

function App() {
  const routesOutlet = useRoutes(router)
  console.log("app---", routesOutlet)
  return (
    <>
     { routesOutlet }
    </>
  )
}

export default App
