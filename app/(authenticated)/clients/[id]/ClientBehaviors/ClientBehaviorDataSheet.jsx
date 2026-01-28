"use client";

import Button from "@/components/ui/Button";

import Table from "@/components/ui/Table";
import { useState, useEffect } from "react";
import { db } from "@/lib/db";

import {
  Card,
  CardHeader,
  CardTitle,
  Alert,
  EmptyState,
  EmptyStateTitle,
  EmptyStateDescription,
} from "@/lib/styled";
import { getColumnsWithActions } from "@/lib/schemas/alternateColumnSchemas";
import { clientDataSheetTableColumns } from "@/lib/schemas/clientDataSheetSchemas";

import DataSheetForm from "./DataSheetForm";
import { getClientBehaviors, getClientDataSheets } from "@/lib/db-queries";

export default function ClientDataSheetDataSheet({ clientId }) {
  const [clientDataSheets, setClientDataSheets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingClientDataSheet, setEditingClientDataSheet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [clientDataSheet, setClientDataSheet] = useState(null);
  const [clientBehaviors, setClientBehaviors] = useState([]);
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);

  // Load clientDataSheets from IndexedDB on mount
  useEffect(() => {
    loadClientDataSheets();
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
    } finally {
      setLoading(false);
    }
  };
  const loadClientDataSheets = async () => {
    try {
      setLoading(true);
      setError(null);
      const allClientDataSheets = await getClientDataSheets(clientId);

      setClientDataSheets(allClientDataSheets);
      setClientDataSheet(allClientDataSheets[0]);
      setSelectedBehaviors(allClientDataSheets[0].behaviors);
    } catch (err) {
      setClientDataSheets([]);
      setClientDataSheet(null);
      setSelectedBehaviors([]);
    } finally {
      setLoading(false);
    }
  };
  const closeForm = () => {
    setEditingClientDataSheet(null);
    setIsOpen(false);
  };
  const onSubmit = async (data) => {
    data = { ...data, behaviors: selectedBehaviors };

    try {
      setError(null);

      if (editingClientDataSheet) {
        // Update existing clientDataSheet
        await db.dataSheets.update(editingClientDataSheet.id, data);
        setSuccessMessage("ClientDataSheet updated successfully!");
      } else {
        // Add new clientDataSheet
        await db.dataSheets.add(data);
        setSuccessMessage("ClientDataSheet added successfully!");
      }

      // Reload clientDataSheets from DB
      await loadClientDataSheets();
      closeForm();
    } catch (err) {
      setError(
        `Failed to ${
          editingClientDataSheet ? "update" : "add"
        } clientDataSheet. Please try again.`
      );
      console.error("Error saving clientDataSheet:", err);
    }
  };
  const handleEdit = (row) => {
    setEditingClientDataSheet(row);
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
      await db.dataSheets.delete(row.id);
      setSuccessMessage("ClientDataSheet deleted successfully!");
      await loadClientDataSheets();
    } catch (err) {
      setError("Failed to delete clientDataSheet. Please try again.");
      console.error("Error deleting clientDataSheet:", err);
    }
  };
  const handleRowClick = (row) => {
    setClientDataSheet(clientDataSheets[row.id]);
  };
  const handleBehaviorChange = (arr) => {
    setSelectedBehaviors(arr);
  };
  // Get table columns with action handlers
  const tableColumns = [
    ...clientDataSheetTableColumns,
    ...getColumnsWithActions(handleEdit, handleDelete),
  ];

  if (loading) {
    return (
      <Card>
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          Loading clientDataSheets...
        </p>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Data Sheet Template List</CardTitle>
          <Button onClick={() => setIsOpen(true)}>
            Add Data Sheet Template
          </Button>
        </CardHeader>

        {/* Success Message */}
        {successMessage && <Alert variant='success'>{successMessage}</Alert>}

        {/* Error Message */}
        {error && <Alert variant='error'>{error}</Alert>}

        {/* Empty State */}
        {clientDataSheets.length === 0 ? (
          <EmptyState>
            <EmptyStateTitle>No clientDataSheets yet</EmptyStateTitle>
            <EmptyStateDescription>
              Click &quot;Add ClientDataSheet&quot; to get started
            </EmptyStateDescription>
          </EmptyState>
        ) : (
          <>
            <Table
              columns={tableColumns}
              data={clientDataSheets}
              striped
              sortable
              onRowClick={handleRowClick}
            />
            <Table />
          </>
        )}
      </Card>

      {isOpen && (
        <DataSheetForm
          isOpen={isOpen}
          closeForm={closeForm}
          editingClientDataSheet={editingClientDataSheet}
          onSubmit={onSubmit}
          handleBehaviorChange={handleBehaviorChange}
          clientBehaviors={clientBehaviors}
          selectedBehaviors={selectedBehaviors}
          clientId={clientId}
        />
      )}
    </>
  );
}
