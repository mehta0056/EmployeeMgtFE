import { Card, Space, Typography } from "antd";

const { Text, Title } = Typography;
export interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  growth?: string;
}
const StatsCard = ({
  title,
  value,
  icon: Icon,
  color,
  growth,
}: StatsCardProps) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
      }}
    >
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Text type="secondary">{title}</Text>

          <Title level={2} style={{ margin: "8px 0" }}>
            {value}
          </Title>

          <Text style={{ color }}>{growth} this month</Text>
        </div>

        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `${color}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
            fontSize: 24,
          }}
        >
          <Icon />
        </div>
      </Space>
    </Card>
  );
};

export default StatsCard;
