"use client";

import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Table from "@/components/ui/Table";
import { db } from "@/lib/db";
import {
  clientTableColumns,
  clientValidationSchema,
  getClientColumnsWithActions,
} from "@/lib/schemas/clientSchemas";
import { useState, useEffect } from "react";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Load clients from IndexedDB on mount
  useEffect(() => {
    loadClients();
  }, []);

  // Auto-dismiss success messages
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const loadClients = async () => {
    try {
      setLoading(true);
      setError(null);
      const allClients = await db.clients.toArray();
      setClients(allClients);
    } catch (err) {
      setError("Failed to load clients. Please refresh the page.");
      console.error("Error loading clients:", err);
    } finally {
      setLoading(false);
    }
  };

  const closeForm = () => {
    setEditingClient(null);
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      setError(null);

      // Convert grade to number and validate
      const clientData = {
        ...data,
        grade: parseInt(data.grade, 10),
      };

      if (editingClient) {
        // Update existing client
        await db.clients.update(editingClient.id, clientData);
        setSuccessMessage("Client updated successfully!");
      } else {
        // Add new client
        await db.clients.add(clientData);
        setSuccessMessage("Client added successfully!");
      }

      // Reload clients from DB
      await loadClients();
      closeForm();
    } catch (err) {
      setError(
        `Failed to ${
          editingClient ? "update" : "add"
        } client. Please try again.`
      );
      console.error("Error saving client:", err);
    }
  };

  const handleEdit = (row) => {
    setEditingClient(row);
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
      await db.clients.delete(row.id);
      setSuccessMessage("Client deleted successfully!");
      await loadClients();
    } catch (err) {
      setError("Failed to delete client. Please try again.");
      console.error("Error deleting client:", err);
    }
  };

  // Get table columns with action handlers
  const tableColumns = getClientColumnsWithActions(handleEdit, handleDelete);

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-100 p-8'>
        <div className='max-w-4xl mx-auto bg-white shadow-md rounded-md p-6'>
          <p className='text-center text-gray-600'>Loading clients...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-md p-6'>
        <h1 className='text-2xl font-bold mb-4'>Client List</h1>

        {/* Success Message */}
        {successMessage && (
          <div className='mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded'>
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
            {error}
          </div>
        )}

        <Button onClick={() => setIsOpen(true)} className='mb-4'>
          Add Client
        </Button>

        {/* Empty State */}
        {clients.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg mb-2'>No clients yet</p>
            <p className='text-gray-400 text-sm'>
              Click &quot;Add Client&quot; to get started
            </p>
          </div>
        ) : (
          <Table
            columns={tableColumns}
            data={clients}
            striped
            sortable
            onRowClick={(row) => handleEdit(row)}
          />
        )}
      </div>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeForm}
          title={editingClient ? "Edit Client" : "Add A Client"}
          size='md'
        >
          <Form
            onSubmit={onSubmit}
            validationSchema={clientValidationSchema}
            spacing='normal'
            initialValues={editingClient || {}}
          >
            {({ values, handleChange, isSubmitting }) => (
              <>
                <div className='grid grid-cols-2 gap-4'>
                  {clientTableColumns.slice(0, 2).map((column) => (
                    <FormField
                      key={column.key}
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
                        placeholder={column.label}
                        type={column.type || "text"}
                      />
                    </FormField>
                  ))}
                </div>

                {clientTableColumns.slice(2).map((column) => (
                  <FormField
                    key={column.key}
                    htmlFor={column.key}
                    label={column.label}
                    required={column.required}
                  >
                    <Input
                      name={column.key}
                      value={values[column.key] || ""}
                      onChange={(e) => handleChange(column.key, e.target.value)}
                      placeholder={
                        column.key === "grade" ? "Grade (1-12)" : column.label
                      }
                      type={column.type || "text"}
                      min={column.key === "grade" ? "1" : undefined}
                      max={column.key === "grade" ? "12" : undefined}
                    />
                  </FormField>
                ))}

                <div className='flex gap-2 mt-6'>
                  <Button
                    type='submit'
                    variant='primary'
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Saving..."
                      : editingClient
                      ? "Update Client"
                      : "Save Client"}
                  </Button>
                  <Button type='button' variant='neutral' onClick={closeForm}>
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </Form>
        </Modal>
      )}
    </div>
  );
}
