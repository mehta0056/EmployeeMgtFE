import { PlusOutlined } from "@ant-design/icons";

import { Card, Form, Typography, Upload } from "antd";

const { Title } = Typography;

const UploadPhoto = () => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Title level={5}>Employee Photo</Title>

      <Form.Item name="photo" valuePropName="fileList">
        <Upload listType="picture-card" beforeUpload={() => false} maxCount={1}>
          <div>
            <PlusOutlined />

            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
    </Card>
  );
};

export default UploadPhoto;
