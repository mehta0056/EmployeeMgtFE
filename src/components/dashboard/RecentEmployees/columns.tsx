import { Button, Space, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { Employee } from "./types";
import { COLORS } from "../../../theme";

const getStatusColor = (status: Employee["status"]) => {
  switch (status) {
    case "Active":
      return "green";
    case "On Leave":
      return "orange";
    case "Inactive":
      return "red";
    default:
      return "default";
  }
};

export const columns: ColumnsType<Employee> = [
  {
    title: "Employee ID",
    dataIndex: "employeeId",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Department",
    dataIndex: "department",
  },
  {
    title: "Designation",
    dataIndex: "designation",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: Employee["status"]) => (
      <Tag color={getStatusColor(status)}>{status}</Tag>
    ),
  },
  {
    title: "Joining Date",
    dataIndex: "joiningDate",
  },
  {
    title: "Action",
    width: 120,
    render: () => (
      <Space>
        <Button
          type="text"
          icon={<EyeOutlined style={{ color: COLORS.primary, fontSize: 18 }} />}
        />
      </Space>
    ),
  },
];
