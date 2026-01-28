import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { FormActions, Grid, GridColumn } from "@/lib/styled";
import BehaviorSelector from "./BehaviorSelector";

const {
  clientDataSheetValidationSchema,
  clientDataSheetTableColumns,
} = require("@/lib/schemas/clientDataSheetSchemas");

function DataSheetForm({
  isOpen,
  closeForm,
  editingClientDataSheet,
  onSubmit,
  handleBehaviorChange,
  clientBehaviors,
  selectedBehaviors,
  clientId,
}) {
  console.log(clientId, selectedBehaviors, clientBehaviors);
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeForm}
      title={
        editingClientDataSheet
          ? "Edit Data Sheet Template"
          : "Add A Data Sheet Template"
      }
      size='md'
    >
      <Form
        onSubmit={onSubmit}
        validationSchema={clientDataSheetValidationSchema}
        spacing='normal'
        initialValues={editingClientDataSheet || { clientId }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <>
            <Grid gap='1rem'>
              {clientDataSheetTableColumns
                // .filter((column) => !column.hideField)
                .map((column) => (
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
              <BehaviorSelector
                behaviors={clientBehaviors}
                selectedBehaviors={selectedBehaviors}
                onChange={handleBehaviorChange}
              />
            </Grid>

            <FormActions justify='center'>
              <Button
                type='submit'
                variant='primary'
                disabled={isSubmitting}
                onClick={() => console.log()}
              >
                {isSubmitting
                  ? "Saving..."
                  : editingClientDataSheet
                  ? "Update Data Sheet Template"
                  : "Save Data Sheet Template"}
              </Button>
              <Button type='button' variant='neutral' onClick={closeForm}>
                Cancel
              </Button>
            </FormActions>
          </>
        )}
      </Form>
    </Modal>
  );
}

export default DataSheetForm;
