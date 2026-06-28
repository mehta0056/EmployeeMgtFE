import { Table } from "antd";
import type { Employee } from "./types";
import { employeeColumns } from "./employeeColumns";
import ConfirmModal from "../../../components/shared/ConfirmModal/ConfirmModal";
import { useState } from "react";
import { toast } from "react-toastify";
interface EmployeeTableProps {
  data: Employee[];
}

const EmployeeTable = ({ data }: EmployeeTableProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const onView = (employee: Employee) => {
    console.log(employee);
    toast.info("Under development!");
  };

  const onDelete = (employee: Employee) => {
    setSelectedEmployee(employee);
    setOpenDeleteModal(true);
  };
  const handleDelete = () => {
    console.log(selectedEmployee);
    toast.success("Employee deleted successfully!");
    setTimeout(() => {
      setOpenDeleteModal(false);
    }, 500);
  };

  return (
    <>
      <Table
        rowKey="key"
        columns={employeeColumns({
          onView,
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
      <ConfirmModal
        open={openDeleteModal}
        title="Delete Employee"
        description={`Are you sure you want to delete ${selectedEmployee?.firstName} ${selectedEmployee?.lastName}?`}
        okText="Delete"
        cancelText="Cancel"
        onCancel={() => setOpenDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default EmployeeTable;
