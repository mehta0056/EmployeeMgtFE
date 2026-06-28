import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space, Typography } from "antd";
import type { ConfirmModalProps } from "./ConfirmModal.types";

const { Title, Text } = Typography;

const ConfirmModal = ({
  open,
  title = "Confirm",
  description = "Are you sure?",
  loading = false,
  okText = "Confirm",
  cancelText = "Cancel",
  onCancel,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered
      closable={false}
      width={420}
      onCancel={onCancel}
    >
      <div
        style={{
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <ExclamationCircleFilled
          style={{
            fontSize: 56,
            color: "#F97316",
            marginBottom: 16,
          }}
        />

        <Title level={4}>{title}</Title>

        <Text type="secondary">{description}</Text>

        <Space
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={onCancel}>{cancelText}</Button>

          <Button danger type="primary" loading={loading} onClick={onConfirm}>
            {okText}
          </Button>
        </Space>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
