import { Table } from "antd";
import type { Employee } from "./types";
import { employeeColumns } from "./employeeColumns";

interface EmployeeTableProps {
  data: Employee[];
}

const EmployeeTable = ({ data }: EmployeeTableProps) => {
  const onView = (employee: Employee) => {
    console.log(employee);
  };

  const onEdit = (employee: Employee) => {
    console.log(employee);
  };

  const onDelete = (employee: Employee) => {
    console.log(employee);
  };

  return (
    <Table
      rowKey="key"
      columns={employeeColumns({
        onView,
        onEdit,
        onDelete,
      })}
      dataSource={data}
      pagination={{
        pageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 20],
        showTotal: (total) => `Total ${total} Employees`,
      }}
    />
  );
};

export default EmployeeTable;
