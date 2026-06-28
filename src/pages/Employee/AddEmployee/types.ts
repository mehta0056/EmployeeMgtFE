export interface EmployeeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;

  employeeId: string;
  department: string;
  designation: string;
  joiningDate: string;
  employmentType: string;
  salary: number;
  reportingManager: string;
  status: string;

  country: string;
  state: string;
  city: string;
  pinCode: string;
  addressLine1: string;
  addressLine2?: string;
  // Bank Information
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  confirmAccountNumber: string;
  ifscCode: string;
  panNumber: string;
  uanNumber?: string;

  // Emergency Information
  emergencyContactName: string;
  relationship: string;
  emergencyPhone: string;

  // Documents
  aadhaarNumber: string;
  passportNumber?: string;
  drivingLicense?: string;
}
