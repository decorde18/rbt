import Button from "@/components/ui/Button";

// Helper function to get columns with actions
export const getColumnsWithActions = (handleEdit, handleDelete) => [
  {
    key: "actions",
    label: "Actions",
    sortable: false,
    render: (_, row) => (
      <div className='flex gap-2' onClick={(e) => e.stopPropagation()}>
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
