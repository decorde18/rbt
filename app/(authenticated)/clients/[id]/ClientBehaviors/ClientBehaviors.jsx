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
  clientBehaviorTableColumns,
  clientBehaviorValidationSchema,
} from "@/lib/schemas/clientBehaviorSchemas";
import { useRouter } from "next/navigation";
import { getClientBehaviors } from "@/lib/db-queries";

export default function ClientBehaviorsPage({ clientId }) {
  const router = useRouter();
  const [clientBehaviors, setClientBehaviors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingClientBehavior, setEditingClientBehavior] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Load clientBehaviors from IndexedDB on mount
  useEffect(() => {
    loadClientBehaviors();
  }, []);

  // Auto-dismiss success messages
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const loadClientBehaviors = async () => {
    try {
      setLoading(true);
      setError(null);
      const allClientBehaviors = await getClientBehaviors(clientId);
      setClientBehaviors(allClientBehaviors);
    } catch (err) {
      setClientBehaviors([]);
      // setError("Failed to load clientBehaviors. Please refresh the page.");
      // console.error("Error loading clientBehaviors:", err);
    } finally {
      setLoading(false);
    }
  };

  const closeForm = () => {
    setEditingClientBehavior(null);
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      setError(null);

      if (editingClientBehavior) {
        // Update existing clientBehavior
        await db.clientBehaviorDefinitions.update(
          editingClientBehavior.id,
          data
        );
        setSuccessMessage("ClientBehavior updated successfully!");
      } else {
        // Add new clientBehavior
        await db.clientBehaviorDefinitions.add(data);
        setSuccessMessage("ClientBehavior added successfully!");
      }

      // Reload clientBehaviors from DB
      await loadClientBehaviors();
      closeForm();
    } catch (err) {
      setError(
        `Failed to ${
          editingClientBehavior ? "update" : "add"
        } clientBehavior. Please try again.`
      );
      console.error("Error saving clientBehavior:", err);
    }
  };

  const handleEdit = (row) => {
    setEditingClientBehavior(row);
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
      await db.clientBehaviorDefinitions.delete(row.id);
      setSuccessMessage("ClientBehavior deleted successfully!");
      await loadClientBehaviors();
    } catch (err) {
      setError("Failed to delete clientBehavior. Please try again.");
      console.error("Error deleting clientBehavior:", err);
    }
  };

  // Get table columns with action handlers
  const tableColumns = [
    ...clientBehaviorTableColumns,
    ...getColumnsWithActions(handleEdit, handleDelete),
  ];

  if (loading) {
    return (
      <PageContainer>
        <Card>
          <p style={{ textAlign: "center", color: "#6b7280" }}>
            Loading clientBehaviors...
          </p>
        </Card>
      </PageContainer>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Client Behavior List</CardTitle>
          <Button onClick={() => setIsOpen(true)}>Add Client Behavior</Button>
        </CardHeader>

        {/* Success Message */}
        {successMessage && <Alert variant='success'>{successMessage}</Alert>}

        {/* Error Message */}
        {error && <Alert variant='error'>{error}</Alert>}

        {/* Empty State */}
        {clientBehaviors.length === 0 ? (
          <EmptyState>
            <EmptyStateTitle>No clientBehaviors yet</EmptyStateTitle>
            <EmptyStateDescription>
              Click &quot;Add ClientBehavior&quot; to get started
            </EmptyStateDescription>
          </EmptyState>
        ) : (
          <Table
            columns={tableColumns}
            data={clientBehaviors}
            striped
            sortable
          />
        )}
      </Card>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeForm}
          title={
            editingClientBehavior
              ? "Edit Client Behavior"
              : "Add A Client Behavior"
          }
          size='md'
        >
          <Form
            onSubmit={onSubmit}
            validationSchema={clientBehaviorValidationSchema}
            spacing='normal'
            initialValues={editingClientBehavior || { clientId }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <>
                <Grid gap='1rem'>
                  {clientBehaviorTableColumns.map((column) => (
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
                      : editingClientBehavior
                      ? "Update Client Behavior"
                      : "Save Client Behavior"}
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
    </>
  );
}
