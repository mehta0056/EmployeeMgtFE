import type { ColumnsType } from "antd/es/table";
import { Button, Popconfirm, Space, Tag } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import type { Employee } from "./types";

const getStatusColor = (status: Employee["status"]) => {
  switch (status) {
    case "Active":
      return "green";
    case "Inactive":
      return "red";
    case "On Leave":
      return "orange";
    default:
      return "default";
  }
};

interface EmployeeColumnProps {
  onView: (employee: Employee) => void;
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}

export const employeeColumns = ({
  onView,
  onDelete,
}: EmployeeColumnProps): ColumnsType<Employee> => [
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    sorter: (a, b) => a.employeeId.localeCompare(b.employeeId),
  },

  {
    title: "Name",
    sorter: (a, b) =>
      `${a.firstName} ${a.lastName}`.localeCompare(
        `${b.firstName} ${b.lastName}`,
      ),
    render: (_, record) => (
      <>
        <strong>
          {record.firstName} {record.lastName}
        </strong>
        <br />
        <span style={{ color: "#8c8c8c" }}>{record.email}</span>
      </>
    ),
  },

  {
    title: "Department",
    dataIndex: "department",
    filters: [
      { text: "IT", value: "IT" },
      { text: "HR", value: "HR" },
      { text: "Finance", value: "Finance" },
      { text: "Sales", value: "Sales" },
      { text: "Admin", value: "Admin" },
    ],
    onFilter: (value, record) => record.department === value,
  },

  {
    title: "Designation",
    dataIndex: "designation",
  },

  {
    title: "Phone",
    dataIndex: "phone",
  },

  {
    title: "Salary",
    dataIndex: "salary",
    sorter: (a, b) => a.salary - b.salary,
    render: (salary) => `₹ ${salary.toLocaleString()}`,
  },

  {
    title: "Joining Date",
    dataIndex: "joiningDate",
  },

  {
    title: "Status",
    dataIndex: "status",
    render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
  },

  {
    title: "Action",
    width: 140,
    render: (_, record) => (
      <Space>
        <Button
          type="text"
          icon={<EyeOutlined style={{ color: "#F97316" }} />}
          onClick={() => onView(record)}
        />

        <Popconfirm title="Delete employee?" onConfirm={() => onDelete(record)}>
          <Button type="text" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
    ),
  },
];
