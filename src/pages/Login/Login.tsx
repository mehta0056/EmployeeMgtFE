import { Card, Form, Input } from "antd";
import CustomButton from "../../components/shared/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routePath";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: unknown) => {
    console.log(values);
    localStorage.setItem("token", "dsfdskf");
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <Card
      title="Login"
      style={{ width: 400, boxShadow: "0 8px 24px rgba(249, 115, 22, 0.18)" }}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <CustomButton block type="primary" htmlType="submit">
          Login
        </CustomButton>
      </Form>
    </Card>
  );
};

export default Login;
