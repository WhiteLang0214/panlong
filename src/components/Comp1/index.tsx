// import "./index.scss" // 全局引入，会影响其他同类名的样式
import style from "./index.module.scss" // 模块化引入，局部作用

function Comp() {
  return(
    <div className={style.box}>
      <p type="primary">这是Comp1的内容</p>
    </div>
  )
}

export default Comp