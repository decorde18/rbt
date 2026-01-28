"use client";

import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Grid, GridColumn, FormActions, Alert } from "@/lib/styled";
import { db } from "@/lib/db";
import { useState } from "react";
// Assuming you create a validation schema for the schedule form
import * as Yup from "yup";

// Placeholder for schedule validation schema (you'll need to define this)
const scheduleValidationSchema = Yup.object().shape({
  startDate: Yup.date().required("Start Date is required."),
  schoolStart: Yup.string()
    .required("Start Time is required.")
    .matches(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Invalid time format (HH:MM)."
    ),
  schoolEnd: Yup.string()
    .required("End Time is required.")
    .matches(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Invalid time format (HH:MM)."
    ),
  intervalMinutes: Yup.number()
    .required("Interval is required.")
    .integer("Must be a whole number.")
    .min(5, "Minimum 5 minutes.")
    .max(60, "Maximum 60 minutes."),
});

const defaultScheduleValues = {
  // Current date for when this schedule starts being active
  startDate: new Date().toISOString().split("T")[0],
  schoolStart: "09:00",
  schoolEnd: "14:30",
  intervalMinutes: 15,
};

export default function EditClientScheduleModal({ client, onClose }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNewSchedule = async (data) => {
    try {
      // 1. Prepare the data for the clientSchedules store
      const newSchedule = {
        clientId: client.id, // Link to the client/student
        startDate: new Date(data.startDate), // Convert the date string to a Date object
        schoolStart: data.schoolStart,
        schoolEnd: data.schoolEnd,
        intervalMinutes: parseInt(data.intervalMinutes), // Ensure this is stored as a number
      };

      // 2. Add the new versioned record
      await db.clientSchedules.add(newSchedule);

      setSuccess(
        `New schedule starting ${data.startDate} added successfully for ${client.firstName}!`
      );
      setTimeout(() => onClose(), 1500);
    } catch (err) {
      setError("Failed to add new schedule.");
      console.error(err);
    }
  };

  return (
    <Modal
      isOpen
      onClose={onClose}
      title={`Add New Schedule for ${client.firstName} ${client.lastName}`}
      size='sm'
    >
      {error && <Alert variant='error'>{error}</Alert>}
      {success && <Alert variant='success'>{success}</Alert>}

      <Form
        onSubmit={handleNewSchedule}
        validationSchema={scheduleValidationSchema}
        initialValues={defaultScheduleValues}
      >
        {({ values, handleChange, isSubmitting }) => (
          <>
            <Grid gap='1rem'>
              {/* Start Date */}
              <GridColumn span={12}>
                <FormField
                  htmlFor='startDate'
                  label='Effective Start Date'
                  required
                >
                  <Input
                    type='date'
                    name='startDate'
                    value={values.startDate || ""}
                    onChange={(e) => handleChange("startDate", e.target.value)}
                  />
                </FormField>
              </GridColumn>

              {/* School Start Time */}
              <GridColumn span={6}>
                <FormField
                  htmlFor='schoolStart'
                  label='School Start Time (HH:MM)'
                  required
                >
                  <Input
                    type='time'
                    name='schoolStart'
                    value={values.schoolStart || ""}
                    onChange={(e) =>
                      handleChange("schoolStart", e.target.value)
                    }
                  />
                </FormField>
              </GridColumn>

              {/* School End Time */}
              <GridColumn span={6}>
                <FormField
                  htmlFor='schoolEnd'
                  label='School End Time (HH:MM)'
                  required
                >
                  <Input
                    type='time'
                    name='schoolEnd'
                    value={values.schoolEnd || ""}
                    onChange={(e) => handleChange("schoolEnd", e.target.value)}
                  />
                </FormField>
              </GridColumn>

              {/* Interval Minutes */}
              <GridColumn span={12}>
                <FormField
                  htmlFor='intervalMinutes'
                  label='Tracking Interval (Minutes)'
                  required
                >
                  <Input
                    type='number'
                    name='intervalMinutes'
                    value={values.intervalMinutes || ""}
                    onChange={(e) =>
                      handleChange("intervalMinutes", e.target.value)
                    }
                  />
                </FormField>
              </GridColumn>
            </Grid>

            <FormActions justify='center'>
              <Button type='submit' variant='primary' disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save New Schedule"}
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
