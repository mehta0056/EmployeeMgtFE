import { Card, Timeline, Typography } from "antd";
import { activityData } from "./activityData";

const { Title, Text } = Typography;

const RecentActivities = () => {
  return (
    <Card hoverable className="dashboard-card">
      <Title level={4}>Recent Activities</Title>

      <Timeline
        items={activityData.map((item) => ({
          color: item.color,
          children: (
            <>
              <Text strong>{item.title}</Text>
              <br />
              <Text type="secondary">{item.time}</Text>
            </>
          ),
        }))}
      />
    </Card>
  );
};

export default RecentActivities;
