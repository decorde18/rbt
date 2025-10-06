// ============================================
// components/ui/FormField.jsx
// ============================================
// USAGE:
// <FormField
//   label="Email Address"
//   name="email"
//   required
//   error={errors.email}
//   helperText="We'll never share your email"
// >
//   <Input name="email" />
// </FormField>

import { cn } from "@/lib/utils";
import { formFieldDefaults } from "@/lib/componentConfig";
import Label from "./Label";

const FormField = ({
  label,
  name,
  error,
  helperText,
  required,
  children,
  className,
  labelSize,
  ...props
}) => {
  return (
    <div className={cn(formFieldDefaults.wrapper, className)} {...props}>
      {label && (
        <Label htmlFor={name} required={required} size={labelSize}>
          {label}
        </Label>
      )}

      {children}

      {helperText && !error && (
        <p
          className='text-sm'
          style={{
            color: formFieldDefaults.helperTextColor,
            fontSize: formFieldDefaults.helperTextSize,
          }}
        >
          {helperText}
        </p>
      )}

      {error && (
        <p
          className='text-sm font-medium'
          style={{
            color: formFieldDefaults.errorColor,
            fontSize: formFieldDefaults.errorSize,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};
export default FormField;
