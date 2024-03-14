import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: "/",
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;

      console.log("subKey--", subKey)
      return {
        key: '/page' + subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const View: React.FC = () => {
  const navigateTo = useNavigate();
  console.log("items2:", items2)
  // 点击菜单
  const menuClick = (e) => {
    console.log("点击菜单:", "key--", e);

    // 编程式 导航跳转，使用hook
    navigateTo(e.key);
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["page1"]}
      defaultOpenKeys={["page1"]}
      style={{ height: "100%", borderRight: 0 }}
      items={items2}
      onClick={menuClick}
    />
  );
};

export default View;
