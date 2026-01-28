"use client";
// ============================================
// components/ui/FormField.jsx
// ============================================
// USAGE:
// <FormField
//   label="Email Address"
//   htmlFor="email"
//   required
//   error={errors.email}
//   helperText="We'll never share your email"
// >
//   <Input name="email" />
// </FormField>

import styled from "styled-components";
import { FormGroup, FormLabel } from "@/lib/styled";

const HelperText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const ErrorText = styled.p`
  font-size: 0.875rem;
  color: #ef4444;
  font-weight: 500;
  margin: 0;
`;

const FormField = ({
  label,
  htmlFor,
  error,
  helperText,
  required,
  children,
  className,
  ...props
}) => {
  return (
    <FormGroup className={className} {...props}>
      {label && (
        <FormLabel htmlFor={htmlFor} required={required}>
          {label}
        </FormLabel>
      )}

      {children}

      {helperText && !error && <HelperText>{helperText}</HelperText>}

      {error && <ErrorText>{error}</ErrorText>}
    </FormGroup>
  );
};

export default FormField;
