import { Avatar, Card, List, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { birthdayData } from "./birthdayData";

const { Title, Text } = Typography;

const UpcomingBirthdays = () => {
  return (
    <Card hoverable className="dashboard-card">
      <Title level={4}>🎂 Upcoming Birthdays</Title>

      <List
        dataSource={birthdayData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  icon={<UserOutlined />}
                  style={{ background: "#F97316" }}
                />
              }
              title={item.name}
              description={<Text type="secondary">{item.date}</Text>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UpcomingBirthdays;
