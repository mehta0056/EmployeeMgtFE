export type EmployeeStatus = "Active" | "Inactive" | "On Leave";

export interface Employee {
  key: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  joiningDate: string;
  salary: number;
  status: EmployeeStatus;
}
