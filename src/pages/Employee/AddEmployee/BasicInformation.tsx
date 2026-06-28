import {
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { employeeRules } from "./validation";

const { Title } = Typography;

const BasicInformation = () => {
  return (
    <Card>
      <Title level={5}>Basic Information</Title>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={employeeRules.firstName}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={employeeRules.lastName}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Email" name="email" rules={employeeRules.email}>
            <Input placeholder="Enter email" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Phone" name="phone" rules={employeeRules.phone}>
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Gender" name="gender" rules={employeeRules.gender}>
            <Select
              placeholder="Select gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Date of Birth" name="dob" rules={employeeRules.dob}>
            <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default BasicInformation;
