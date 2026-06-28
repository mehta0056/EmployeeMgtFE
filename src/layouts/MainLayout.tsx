import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { COLORS } from "../theme";
import Sidebar from "../components/layout/Sidebar/Sidebar";

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          color: COLORS.primary,
          fontSize: 20,
        }}
      >
        Employee Management
      </Header>
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
