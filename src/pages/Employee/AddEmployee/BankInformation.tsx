import { Card, Col, Form, Input, Row, Typography } from "antd";
import { employeeRules } from "./validation";

const { Title } = Typography;

const BankInformation = () => {
  return (
    <Card style={{ marginTop: 20 }}>
      <Title level={5}>Bank Information</Title>

      <Row gutter={20}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Bank Name"
            name="bankName"
            rules={employeeRules.bankName}
          >
            <Input placeholder="State Bank of India" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Account Holder Name"
            name="accountHolderName"
            rules={employeeRules.accountHolderName}
          >
            <Input placeholder="Enter Account Holder Name" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={employeeRules.accountNumber}
          >
            <Input placeholder="Enter Account Number" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Confirm Account Number"
            name="confirmAccountNumber"
            dependencies={["accountNumber"]}
            rules={[
              ...employeeRules.confirmAccountNumber,
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("accountNumber") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Account numbers do not match"),
                  );
                },
              }),
            ]}
          >
            <Input placeholder="Re-enter Account Number" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="IFSC Code"
            name="ifscCode"
            rules={employeeRules.ifscCode}
          >
            <Input
              placeholder="SBIN0001234"
              style={{ textTransform: "uppercase" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="PAN Number"
            name="panNumber"
            rules={employeeRules.panNumber}
          >
            <Input
              placeholder="ABCDE1234F"
              style={{ textTransform: "uppercase" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item label="UAN Number" name="uanNumber">
            <Input placeholder="Enter UAN Number (Optional)" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default BankInformation;
