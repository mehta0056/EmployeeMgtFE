import { Col, Row } from "antd";
import DashboardHeader from "../../components/dashboard/DashboardHeader/DashboardHeader";
import StatsSection from "../../components/dashboard/StatCard/StatsSection/StatsSection";
import EmployeeChart from "../../components/dashboard/EmployeeChart/EmployeeChart";
import DepartmentChart from "../../components/dashboard/DepartmentChart/DepartmentChart";
import RecentEmployees from "../../components/dashboard/RecentEmployees/RecentEmployees";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <StatsSection />
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <EmployeeChart />
        </Col>

        <Col xs={24} lg={8}>
          <DepartmentChart />
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <RecentEmployees />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
