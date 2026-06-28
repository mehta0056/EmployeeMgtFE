import { Card, Typography } from "antd";
import ReactECharts from "echarts-for-react";
import { employeeChartOption } from "./chartOptions";

const { Title } = Typography;

const EmployeeChart = () => {
  return (
    <Card
      style={{
        borderRadius: 12,
        boxShadow: "0 8px 24px rgba(0,0,0,.06)",
      }}
    >
      <Title level={4}>Employee Growth</Title>

      <ReactECharts
        option={employeeChartOption}
        style={{
          height: 350,
        }}
      />
    </Card>
  );
};

export default EmployeeChart;
