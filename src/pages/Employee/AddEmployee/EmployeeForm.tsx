import { useState } from "react";
import { Button, Form, Steps, Space, Card } from "antd";

import UploadPhoto from "./UploadPhoto";
import BasicInformation from "./BasicInformation";
import EmploymentInformation from "./EmploymentInformation";
import AddressInformation from "./AddressInformation";
import BankInformation from "./BankInformation";
import EmergencyInformation from "./EmergencyInformation";

const EmployeeForm = () => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  const next = async () => {
    await form.validateFields(stepFields[current]);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values: unknown) => {
    console.log(values);
  };

  const steps = [
    {
      title: "Personal",
      content: (
        <>
          <UploadPhoto />
          <BasicInformation />
        </>
      ),
    },
    {
      title: "Employment",
      content: <EmploymentInformation />,
    },
    {
      title: "Address",
      content: <AddressInformation />,
    },
    {
      title: "Bank",
      content: <BankInformation />,
    },
    {
      title: "Emergency",
      content: <EmergencyInformation />,
    },
  ];

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Steps
        current={current}
        items={steps.map((item) => ({
          title: item.title,
        }))}
      />

      <Card
        style={{
          marginTop: 24,
          minHeight: 500,
        }}
      >
        {steps[current].content}
      </Card>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>{current > 0 && <Button onClick={prev}>Previous</Button>}</div>

        <Space>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}

          {current === steps.length - 1 && (
            <Button type="primary" htmlType="submit">
              Save Employee
            </Button>
          )}
        </Space>
      </div>
    </Form>
  );
};

export default EmployeeForm;

const stepFields = [
  ["photo", "firstName", "lastName", "email", "phone", "gender", "dob"],
  [
    "employeeId",
    "department",
    "designation",
    "joiningDate",
    "employmentType",
    "salary",
    "reportingManager",
    "status",
  ],
  ["country", "state", "city", "pinCode", "addressLine1"],
  [
    "bankName",
    "accountHolderName",
    "accountNumber",
    "confirmAccountNumber",
    "ifscCode",
    "panNumber",
  ],
  ["emergencyContactName", "relationship", "emergencyPhone", "aadhaarNumber"],
  [],
];
