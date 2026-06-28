import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";
import { useState } from "react";

const { Content, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        title="Employee Management System"
      />
      <Layout>
        <Sider width={200}>
          <Sidebar />
        </Sider>

        <Content style={{ padding: 20 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
