import { Typography } from "antd";

const { Title } = Typography;
interface PageHeaderProps {
  title: string;
}
export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Title level={2} style={{ margin: 0 }}>
      {title}
    </Title>
  );
};
