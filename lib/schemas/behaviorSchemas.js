export const behaviorTableColumns = [
  {
    key: "name",
    type: "text",
    label: "Behavior Name",
    sortable: true,
    required: true,
    formCol: 6, // Takes half width (6/12 columns)
  },
  {
    key: "abbreviation",
    type: "text",
    label: "Abbreviation",
    sortable: true,
    required: true,
    formCol: 6, // Takes half width (6/12 columns)
  },
  {
    key: "description",
    type: "text",
    label: "Description",
    sortable: true,
    required: true,
    formCol: 12, // Takes full width (12/12 columns)
  },
];

// Validation schema for behavior form
export const behaviorValidationSchema = {
  name: {
    required: true,
  },
  abbreviation: {
    required: true,
  },
  description: {
    required: true,
  },
};
