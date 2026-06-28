import { Typography, Space, Breadcrumb } from "antd";
import dayjs from "dayjs";
import { PageHeader } from "../../shared/PageHeader/PageHeader";
import { HomeOutlined } from "@ant-design/icons";

const { Text } = Typography;
const DashboardHeader = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            href: "/dashboard",
            title: <HomeOutlined />,
          },
          {
            title: "Dashboard",
          },
        ]}
        style={{ marginBottom: 12 }}
      />
      <div
        style={{
          marginBottom: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <PageHeader title="Dashboard" />
          <Text type="secondary">
            Welcome back! Here's what's happening today.
          </Text>
        </div>

        <Space orientation="vertical" align="end" size={0}>
          <Text strong>{dayjs().format("dddd")}</Text>

          <Text type="secondary">{dayjs().format("DD MMMM YYYY")}</Text>
        </Space>
      </div>
    </>
  );
};

export default DashboardHeader;
