import { Card, Table, Typography } from "antd";
import { employeeData } from "./employeeData";
import { columns } from "./columns";

const { Title } = Typography;

const RecentEmployees = () => {
  return (
    <Card
      style={{
        borderRadius: 12,
      }}
    >
      <Title level={4}>Recent Employees</Title>

      <Table
        columns={columns}
        dataSource={employeeData}
        pagination={false}
        rowKey="key"
        size="middle"
      />
    </Card>
  );
};

export default RecentEmployees;
