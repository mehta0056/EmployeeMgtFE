export interface ConfirmModalProps {
  open: boolean;
  title?: string;
  description?: string;
  loading?: boolean;
  okText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
