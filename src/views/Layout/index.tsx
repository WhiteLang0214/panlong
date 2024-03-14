import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
const { Header, Content, Sider } = Layout;
import style from "./index.module.scss";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/Menu";

const View: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout style={{ height: "100%" }}>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <MainMenu />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content 页面展示区域{<Outlet />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default View;
