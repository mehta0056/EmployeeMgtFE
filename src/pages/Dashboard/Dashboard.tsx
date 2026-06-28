import { Col, Row } from "antd";
import DashboardHeader from "../../components/dashboard/DashboardHeader/DashboardHeader";
import StatsSection from "../../components/dashboard/StatCard/StatsSection/StatsSection";
import EmployeeChart from "../../components/dashboard/EmployeeChart/EmployeeChart";
import DepartmentChart from "../../components/dashboard/DepartmentChart/DepartmentChart";
import RecentEmployees from "../../components/dashboard/RecentEmployees/RecentEmployees";
import RecentActivities from "../../components/dashboard/RecentActivities/RecentActivities";
import UpcomingBirthdays from "../../components/dashboard/UpcomingBirthdays/UpcomingBirthdays";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <StatsSection />
      <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
        <Col xs={24} lg={16}>
          <EmployeeChart />
        </Col>

        <Col xs={24} lg={8}>
          <DepartmentChart />
        </Col>

        <Col span={24}>
          <RecentEmployees />
        </Col>

        <Col xs={24} lg={12}>
          <RecentActivities />
        </Col>

        <Col xs={24} md={12} lg={6}>
          <UpcomingBirthdays />
        </Col>

        <Col xs={24} md={12} lg={6}>
          <QuickActions />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
