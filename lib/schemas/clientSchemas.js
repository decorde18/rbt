import Button from "@/components/ui/Button";

export const clientTableColumns = [
  {
    key: "firstName",
    type: "text",
    label: "First Name",
    sortable: true,
    required: true,
  },
  {
    key: "lastName",
    type: "text",
    label: "Last Name",
    sortable: true,
    required: true,
  },
  {
    key: "school",
    type: "text",
    label: "School",
    sortable: true,
    required: true,
  },
  {
    key: "grade",
    type: "number",
    label: "Grade",
    sortable: true,
    required: true,
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

// Helper function to get columns with actions
export const getClientColumnsWithActions = (handleEdit, handleDelete) => [
  ...clientTableColumns,
  {
    key: "actions",
    label: "Actions",
    sortable: false,
    render: (_, row) => (
      <div className='flex gap-2'>
        <Button size='sm' onClick={() => handleEdit(row)}>
          Edit
        </Button>
        <Button size='sm' variant='danger' onClick={() => handleDelete(row)}>
          Delete
        </Button>
      </div>
    ),
  },
];
