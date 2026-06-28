export interface Employee {
  key: string;
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  status: "Active" | "On Leave" | "Inactive";
  joiningDate: string;
}
