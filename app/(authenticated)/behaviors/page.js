"use client";

import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Table from "@/components/ui/Table";
import { useState, useEffect } from "react";
import { db } from "@/lib/db";

import {
  Grid,
  GridColumn,
  PageContainer,
  Card,
  CardHeader,
  CardTitle,
  Alert,
  EmptyState,
  EmptyStateTitle,
  EmptyStateDescription,
  FormActions,
} from "@/lib/styled";
import { getColumnsWithActions } from "@/lib/schemas/alternateColumnSchemas";
import {
  behaviorTableColumns,
  behaviorValidationSchema,
} from "@/lib/schemas/behaviorSchemas";
import { useRouter } from "next/navigation";

export default function BehaviorsPage() {
  const router = useRouter();
  const [behaviors, setBehaviors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingBehavior, setEditingBehavior] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Load behaviors from IndexedDB on mount
  useEffect(() => {
    loadBehaviors();
  }, []);

  // Auto-dismiss success messages
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const loadBehaviors = async () => {
    try {
      setLoading(true);
      setError(null);
      const allBehaviors = await db.behaviorDefinitions.toArray();
      setBehaviors(allBehaviors);
    } catch (err) {
      setError("Failed to load behaviors. Please refresh the page.");
      console.error("Error loading behaviors:", err);
    } finally {
      setLoading(false);
    }
  };

  const closeForm = () => {
    setEditingBehavior(null);
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      setError(null);

      if (editingBehavior) {
        // Update existing behavior
        await db.behaviorDefinitions.update(editingBehavior.id, data);
        setSuccessMessage("Behavior updated successfully!");
      } else {
        // Add new behavior
        await db.behaviorDefinitions.add(data);
        setSuccessMessage("Behavior added successfully!");
      }

      // Reload behaviors from DB
      await loadBehaviors();
      closeForm();
    } catch (err) {
      setError(
        `Failed to ${
          editingBehavior ? "update" : "add"
        } behavior. Please try again.`
      );
      console.error("Error saving behavior:", err);
    }
  };

  const handleEdit = (row) => {
    setEditingBehavior(row);
    setIsOpen(true);
  };

  const handleDelete = async (row) => {
    if (
      !window.confirm(
        `Are you sure you want to delete ${row.firstName} ${row.lastName}?`
      )
    ) {
      return;
    }

    try {
      setError(null);
      await db.behaviorDefinitions.delete(row.id);
      setSuccessMessage("Behavior deleted successfully!");
      await loadBehaviors();
    } catch (err) {
      setError("Failed to delete behavior. Please try again.");
      console.error("Error deleting behavior:", err);
    }
  };
  const handleRowClick = (row) => {
    router.push(`/behaviors/${row.id}`);
  };
  // Get table columns with action handlers
  const tableColumns = [
    ...behaviorTableColumns,
    ...getColumnsWithActions(handleEdit, handleDelete),
  ];

  if (loading) {
    return (
      <PageContainer>
        <Card>
          <p style={{ textAlign: "center", color: "#6b7280" }}>
            Loading behaviors...
          </p>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Card>
        <CardHeader>
          <CardTitle>Behavior List</CardTitle>
          <Button onClick={() => setIsOpen(true)}>Add Behavior</Button>
        </CardHeader>

        {/* Success Message */}
        {successMessage && <Alert variant='success'>{successMessage}</Alert>}

        {/* Error Message */}
        {error && <Alert variant='error'>{error}</Alert>}

        {/* Empty State */}
        {behaviors.length === 0 ? (
          <EmptyState>
            <EmptyStateTitle>No behaviors yet</EmptyStateTitle>
            <EmptyStateDescription>
              Click &quot;Add Behavior&quot; to get started
            </EmptyStateDescription>
          </EmptyState>
        ) : (
          <Table
            columns={tableColumns}
            data={behaviors}
            striped
            sortable
            onRowClick={handleRowClick}
          />
        )}
      </Card>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeForm}
          title={editingBehavior ? "Edit Behavior" : "Add A Behavior"}
          size='md'
        >
          <Form
            onSubmit={onSubmit}
            validationSchema={behaviorValidationSchema}
            spacing='normal'
            initialValues={editingBehavior || {}}
          >
            {({ values, handleChange, isSubmitting }) => (
              <>
                <Grid gap='1rem'>
                  {behaviorTableColumns.map((column) => (
                    <GridColumn key={column.key} span={column.formCol || 12}>
                      <FormField
                        htmlFor={column.key}
                        label={column.label}
                        required={column.required}
                      >
                        <Input
                          name={column.key}
                          value={values[column.key] || ""}
                          onChange={(e) =>
                            handleChange(column.key, e.target.value)
                          }
                          placeholder={column.placeholder || column.label}
                          type={column.type || "text"}
                          min={column.min}
                          max={column.max}
                        />
                      </FormField>
                    </GridColumn>
                  ))}
                </Grid>

                <FormActions justify='center'>
                  <Button
                    type='submit'
                    variant='primary'
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Saving..."
                      : editingBehavior
                      ? "Update Behavior"
                      : "Save Behavior"}
                  </Button>
                  <Button type='button' variant='neutral' onClick={closeForm}>
                    Cancel
                  </Button>
                </FormActions>
              </>
            )}
          </Form>
        </Modal>
      )}
    </PageContainer>
  );
}
