import {
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "antd";
import { employeeRules } from "./validation";

const { Title } = Typography;

const EmploymentInformation = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Title level={5}>Employment Information</Title>

      <Row gutter={20}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Employee ID"
            name="employeeId"
            rules={employeeRules.employeeId}
          >
            <Input placeholder="EMP001" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Department"
            name="department"
            rules={employeeRules.department}
          >
            <Select
              placeholder="Select Department"
              options={[
                { value: "IT", label: "IT" },
                { value: "HR", label: "HR" },
                { value: "Finance", label: "Finance" },
                { value: "Sales", label: "Sales" },
                { value: "Admin", label: "Admin" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Designation"
            name="designation"
            rules={employeeRules.designation}
          >
            <Input placeholder="Software Engineer" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Joining Date"
            name="joiningDate"
            rules={employeeRules.joiningDate}
          >
            <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Employment Type"
            name="employmentType"
            rules={employeeRules.employmentType}
          >
            <Select
              placeholder="Select Type"
              options={[
                {
                  value: "Permanent",
                  label: "Permanent",
                },
                {
                  value: "Contract",
                  label: "Contract",
                },
                {
                  value: "Intern",
                  label: "Intern",
                },
              ]}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Salary" name="salary" rules={employeeRules.salary}>
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              formatter={(value) =>
                value ? `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
              }
              //   parser={(value) => Number(value?.replace(/[₹,\s]/g, ""))}
              placeholder="Enter Salary"
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Reporting Manager"
            name="reportingManager"
            rules={employeeRules.reportingManager}
          >
            <Input placeholder="Manager Name" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Status"
            name="status"
            initialValue="Active"
            rules={employeeRules.status}
          >
            <Select
              options={[
                {
                  value: "Active",
                  label: "Active",
                },
                {
                  value: "Inactive",
                  label: "Inactive",
                },
                {
                  value: "On Leave",
                  label: "On Leave",
                },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default EmploymentInformation;
