import { Card, Col, Form, Input, Row, Typography } from "antd";

import { employeeRules } from "./validation";

const { Title } = Typography;

const EmergencyInformation = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Title level={5}>Emergency & Documents</Title>

      <Row gutter={20}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Emergency Contact Name"
            name="emergencyContactName"
            rules={employeeRules.emergencyContactName}
          >
            <Input placeholder="Enter Contact Name" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Relationship"
            name="relationship"
            rules={employeeRules.relationship}
          >
            <Input placeholder="Father / Mother / Wife" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Emergency Phone"
            name="emergencyPhone"
            rules={employeeRules.emergencyPhone}
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Aadhaar Number"
            name="aadhaarNumber"
            rules={employeeRules.aadhaarNumber}
          >
            <Input maxLength={12} placeholder="123412341234" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Passport Number" name="passportNumber">
            <Input placeholder="Optional" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="Driving License" name="drivingLicense">
            <Input placeholder="Optional" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default EmergencyInformation;
