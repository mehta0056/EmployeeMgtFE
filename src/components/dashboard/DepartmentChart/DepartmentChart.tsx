import { Card, Typography } from "antd";
import ReactECharts from "echarts-for-react";
import { departmentChartOption } from "../EmployeeChart/chartOptions";

const { Title } = Typography;

const DepartmentChart = () => {
  return (
    <Card
      style={{
        borderRadius: 12,
      }}
    >
      <Title level={4}>Department Distribution</Title>

      <ReactECharts
        option={departmentChartOption}
        style={{
          height: 350,
        }}
      />
    </Card>
  );
};

export default DepartmentChart;
