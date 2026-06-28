import { Card } from "antd";
import EmployeeForm from "./EmployeeForm";
import { PageHeader } from "../../../components/shared/PageHeader/PageHeader";

const AddEmployee = () => {
  return (
    <>
      <PageHeader title="Add Employee" />

      <Card style={{ marginTop: 20 }}>
        <EmployeeForm />
      </Card>
    </>
  );
};

export default AddEmployee;
