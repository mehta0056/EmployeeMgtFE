import {
  PlusOutlined,
  TeamOutlined,
  FileTextOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Button, Card, Space, Typography } from "antd";

const { Title } = Typography;

const QuickActions = () => {
  return (
    <Card hoverable className="dashboard-card">
      <Title level={4}>Quick Actions</Title>

      <Space orientation="vertical" style={{ width: "100%" }} size="middle">
        <Button block icon={<PlusOutlined />} type="primary">
          Add Employee
        </Button>

        <Button block icon={<TeamOutlined />}>
          Add Department
        </Button>

        <Button block icon={<CalendarOutlined />}>
          Apply Leave
        </Button>

        <Button block icon={<FileTextOutlined />}>
          Generate Report
        </Button>
      </Space>
    </Card>
  );
};

export default QuickActions;
