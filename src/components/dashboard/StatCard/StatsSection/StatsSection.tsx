import { Col, Row } from "antd";
import { statsData } from "../statData";
import StatsCard from "../StatCard";

const StatsSection = () => {
  return (
    <Row gutter={[24, 24]}>
      {statsData.map((item) => (
        <Col key={item.title} xs={24} sm={12} lg={6}>
          <StatsCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default StatsSection;
