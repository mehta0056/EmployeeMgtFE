import { Button, Col, Input, Row, Select, Space } from "antd";
import {
  PlusOutlined,
  ReloadOutlined,
  DownloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routePath";

interface EmployeeToolbarProps {
  search: string;
  department: string;
  status: string;
  onSearch: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

const EmployeeToolbar = ({
  search,
  department,
  status,
  onSearch,
  onDepartmentChange,
  onStatusChange,
  onReset,
}: EmployeeToolbarProps) => {
  const navigate = useNavigate();
  return (
    <Row gutter={[16, 16]} justify="space-between">
      <Col xs={24} lg={16}>
        <Space wrap>
          <Input
            placeholder="Search employee..."
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            style={{ width: 250 }}
          />

          <Select
            value={department}
            style={{ width: 180 }}
            onChange={onDepartmentChange}
            options={[
              { value: "All", label: "All Departments" },
              { value: "IT", label: "IT" },
              { value: "HR", label: "HR" },
              { value: "Finance", label: "Finance" },
              { value: "Sales", label: "Sales" },
              { value: "Admin", label: "Admin" },
            ]}
          />

          <Select
            value={status}
            style={{ width: 180 }}
            onChange={onStatusChange}
            options={[
              { value: "All", label: "All Status" },
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
              { value: "On Leave", label: "On Leave" },
            ]}
          />

          <Button icon={<ReloadOutlined />} onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Col>

      <Col>
        <Space>
          <Button icon={<DownloadOutlined />}>Export</Button>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate(ROUTES.ADD_EMPLOYEE)}
          >
            Add Employee
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default EmployeeToolbar;
