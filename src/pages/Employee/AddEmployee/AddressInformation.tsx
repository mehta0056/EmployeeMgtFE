import { Card, Col, Form, Input, Row, Select, Typography } from "antd";
import { employeeRules } from "./validation";

const { Title } = Typography;
const { TextArea } = Input;

const AddressInformation = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Title level={5}>Address Information</Title>

      <Row gutter={20}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Country"
            name="country"
            rules={employeeRules.country}
          >
            <Select
              placeholder="Select Country"
              options={[
                {
                  value: "India",
                  label: "India",
                },
              ]}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="State" name="state" rules={employeeRules.state}>
            <Select
              placeholder="Select State"
              options={[
                {
                  value: "Bihar",
                  label: "Bihar",
                },
                {
                  value: "Delhi",
                  label: "Delhi",
                },
                {
                  value: "Maharashtra",
                  label: "Maharashtra",
                },
                {
                  value: "Karnataka",
                  label: "Karnataka",
                },
                {
                  value: "Uttar Pradesh",
                  label: "Uttar Pradesh",
                },
              ]}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="City" name="city" rules={employeeRules.city}>
            <Input placeholder="Enter City" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Pin Code"
            name="pinCode"
            rules={employeeRules.pinCode}
          >
            <Input placeholder="Enter Pin Code" maxLength={6} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Address Line 1"
            name="addressLine1"
            rules={employeeRules.addressLine1}
          >
            <TextArea rows={3} placeholder="House No, Street, Area" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Address Line 2" name="addressLine2">
            <TextArea rows={3} placeholder="Landmark (Optional)" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default AddressInformation;
