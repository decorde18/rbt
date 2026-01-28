export const clientDataSheetTableColumns = [
  {
    key: "startDate",
    type: "date",
    label: "Start Date for tracking",
    sortable: true,
    required: true,
    formCol: 12,
  },
];

// Validation schema for dataSheet form
export const clientDataSheetValidationSchema = {
  clientId: {
    required: true,
  },
  startDate: {
    required: true,
  },
  behaviors: {},
};
