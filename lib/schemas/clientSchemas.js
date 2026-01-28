export const clientTableColumns = [
  {
    key: "firstName",
    type: "text",
    label: "First Name",
    sortable: true,
    required: true,
    formCol: 6, // Takes half width (6/12 columns)
  },
  {
    key: "lastName",
    type: "text",
    label: "Last Name",
    sortable: true,
    required: true,
    formCol: 6, // Takes half width (6/12 columns)
  },
  {
    key: "school",
    type: "text",
    label: "School",
    sortable: true,
    required: true,
    formCol: 12, // Takes full width (12/12 columns)
  },
  {
    key: "grade",
    type: "number",
    label: "Grade",
    sortable: true,
    required: true,
    formCol: 12, // Takes full width (12/12 columns)
    placeholder: "Grade (1-12)",
    min: 1,
    max: 12,
  },
];

// Validation schema for client form
export const clientValidationSchema = {
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  school: {
    required: true,
  },
  grade: {
    required: true,
    type: "number",
    min: 1,
    max: 12,
  },
};
