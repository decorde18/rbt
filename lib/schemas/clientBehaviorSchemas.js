export const clientBehaviorTableColumns = [
  {
    key: "behaviorId",
    type: "text",
    label: "Behavior Id",
    sortable: true,
    required: true,
    formCol: 6,
    hideColumn: true,
  },
  {
    key: "name",
    type: "text",
    label: "Behavior Name",
    sortable: true,
    required: true,
    formCol: 6,
  },
  {
    key: "type",
    type: "text",
    label: "Type",
    sortable: true,
    required: true,
    formCol: 6,
  },
  {
    key: "startDate",
    type: "date",
    label: "Start Date for tracking",
    sortable: true,
    required: true,
    formCol: 6,
  },
  {
    key: "description",
    type: "text",
    label: "Description",
    sortable: true,
    required: true,
    formCol: 12,
  },
];

// Validation schema for behavior form
export const clientBehaviorValidationSchema = {
  clientId: { required: true },
  name: {
    required: true,
  },
  behaviorId: {
    required: true,
  },

  type: {
    required: true,
  },
  description: {
    required: true,
  },
};
