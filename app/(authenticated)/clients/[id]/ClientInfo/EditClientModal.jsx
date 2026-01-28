"use client";

import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Grid, GridColumn, FormActions, Alert } from "@/lib/styled";
import {
  clientValidationSchema,
  clientTableColumns,
} from "@/lib/schemas/clientSchemas";
import { db } from "@/lib/db";
import { useState } from "react";

export default function EditClientModal({ client, onClose }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = async (data) => {
    try {
      await db.clients.update(client.id, {
        ...data,
        grade: parseInt(data.grade),
      });
      setSuccess("Client updated successfully!");
      setTimeout(() => onClose(), 1500);
    } catch (err) {
      setError("Failed to update client.");
      console.error(err);
    }
  };

  return (
    <Modal isOpen onClose={onClose} title='Edit Client' size='md'>
      {error && <Alert variant='error'>{error}</Alert>}
      {success && <Alert variant='success'>{success}</Alert>}

      <Form
        onSubmit={handleUpdate}
        validationSchema={clientValidationSchema}
        initialValues={client}
      >
        {({ values, handleChange, isSubmitting }) => (
          <>
            <Grid gap='1rem'>
              {clientTableColumns.map((col) => (
                <GridColumn key={col.key} span={col.formCol || 12}>
                  <FormField
                    htmlFor={col.key}
                    label={col.label}
                    required={col.required}
                  >
                    <Input
                      name={col.key}
                      value={values[col.key] || ""}
                      onChange={(e) => handleChange(col.key, e.target.value)}
                    />
                  </FormField>
                </GridColumn>
              ))}
            </Grid>

            <FormActions justify='center'>
              <Button type='submit' variant='primary' disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Update Client"}
              </Button>
              <Button type='button' variant='neutral' onClick={onClose}>
                Cancel
              </Button>
            </FormActions>
          </>
        )}
      </Form>
    </Modal>
  );
}
