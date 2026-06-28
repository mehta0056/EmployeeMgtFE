export const employeeRules = {
  firstName: [
    {
      required: true,
      message: "Please enter first name",
    },
  ],

  lastName: [
    {
      required: true,
      message: "Please enter last name",
    },
  ],

  email: [
    {
      required: true,
      message: "Please enter email",
    },
    {
      type: "email" as const,
      message: "Invalid email",
    },
  ],

  phone: [
    {
      required: true,
      message: "Please enter phone number",
    },
    {
      pattern: /^[0-9]{10}$/,
      message: "Phone must be 10 digits",
    },
  ],

  gender: [
    {
      required: true,
      message: "Please select gender",
    },
  ],

  dob: [
    {
      required: true,
      message: "Please select date of birth",
    },
  ],
  employeeId: [
    {
      required: true,
      message: "Please enter employee id",
    },
  ],

  department: [
    {
      required: true,
      message: "Please select department",
    },
  ],

  designation: [
    {
      required: true,
      message: "Please enter designation",
    },
  ],

  joiningDate: [
    {
      required: true,
      message: "Please select joining date",
    },
  ],

  employmentType: [
    {
      required: true,
      message: "Please select employment type",
    },
  ],

  salary: [
    {
      required: true,
      message: "Please enter salary",
    },
  ],

  reportingManager: [
    {
      required: true,
      message: "Please enter reporting manager",
    },
  ],

  status: [
    {
      required: true,
      message: "Please select status",
    },
  ],

  country: [
    {
      required: true,
      message: "Please select country",
    },
  ],

  state: [
    {
      required: true,
      message: "Please select state",
    },
  ],

  city: [
    {
      required: true,
      message: "Please enter city",
    },
  ],

  pinCode: [
    {
      required: true,
      message: "Please enter pin code",
    },
    {
      pattern: /^[0-9]{6}$/,
      message: "Pin code must be 6 digits",
    },
  ],

  addressLine1: [
    {
      required: true,
      message: "Please enter address",
    },
  ],

  bankName: [
    {
      required: true,
      message: "Please enter bank name",
    },
  ],

  accountHolderName: [
    {
      required: true,
      message: "Please enter account holder name",
    },
  ],

  accountNumber: [
    {
      required: true,
      message: "Please enter account number",
    },
  ],

  confirmAccountNumber: [
    {
      required: true,
      message: "Please confirm account number",
    },
  ],

  ifscCode: [
    {
      required: true,
      message: "Please enter IFSC Code",
    },
    {
      pattern: /^[A-Z]{4}0[A-Z0-9]{6}$/,
      message: "Invalid IFSC Code",
    },
  ],

  panNumber: [
    {
      required: true,
      message: "Please enter PAN Number",
    },
    {
      pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      message: "Invalid PAN Number",
    },
  ],

  emergencyContactName: [
    {
      required: true,
      message: "Please enter emergency contact name",
    },
  ],

  relationship: [
    {
      required: true,
      message: "Please enter relationship",
    },
  ],

  emergencyPhone: [
    {
      required: true,
      message: "Please enter emergency phone",
    },
    {
      pattern: /^[0-9]{10}$/,
      message: "Phone must be 10 digits",
    },
  ],

  aadhaarNumber: [
    {
      required: true,
      message: "Please enter Aadhaar Number",
    },
    {
      pattern: /^[0-9]{12}$/,
      message: "Aadhaar must be 12 digits",
    },
  ],
};
