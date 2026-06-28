import { useMemo, useState } from "react";
import { Breadcrumb, Card, Space } from "antd";

import EmployeeToolbar from "./EmployeeToolbar";
import EmployeeTable from "./EmployeeTable";
import { employeeData } from "./employeeData";
import { PageHeader } from "../../../components/shared/PageHeader/PageHeader";
import { HomeOutlined } from "@ant-design/icons";

const EmployeeList = () => {
  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All");

  const [status, setStatus] = useState("All");

  const filteredEmployees = useMemo(() => {
    return employeeData.filter((employee) => {
      const fullName =
        `${employee.firstName} ${employee.lastName}`.toLowerCase();

      const matchesSearch =
        fullName.includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" || employee.department === department;

      const matchesStatus = status === "All" || employee.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [search, department, status]);

  return (
    <>
      <Breadcrumb
        items={[
          {
            href: "/dashboard",
            title: <HomeOutlined />,
          },
          {
            href: "/dashboard",
            title: "Dashboard",
          },
          {
            title: "Employees",
          },
        ]}
        style={{ marginBottom: 12 }}
      />
      <Space orientation="vertical" size={24} style={{ width: "100%" }}>
        <PageHeader title="Employees" />

        <Card>
          <EmployeeToolbar
            search={search}
            department={department}
            status={status}
            onSearch={setSearch}
            onDepartmentChange={setDepartment}
            onStatusChange={setStatus}
            onReset={() => {
              setSearch("");
              setDepartment("All");
              setStatus("All");
            }}
          />
        </Card>

        <Card>
          <EmployeeTable data={filteredEmployees} />
        </Card>
      </Space>
    </>
  );
};

export default EmployeeList;
