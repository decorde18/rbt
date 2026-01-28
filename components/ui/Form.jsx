"use client";
// ============================================
// components/ui/Form.jsx
// ============================================

import { FormContainer } from "@/lib/styled";
import { useState } from "react";

const Form = ({
  onSubmit,
  children,
  className,
  spacing = "normal",
  initialValues = {},
  validationSchema,
  ...props
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = (name, value) => {
    if (!validationSchema || !validationSchema[name]) return null;

    const fieldSchema = validationSchema[name];

    // Required validation
    if (fieldSchema.required && !value) {
      return fieldSchema.requiredMessage || `${name} is required`;
    }

    // Type validation for numbers
    if (fieldSchema.type === "number") {
      const numValue = parseFloat(value);
      if (isNaN(numValue) && value !== "") {
        return `${name} must be a number`;
      }

      // Min validation
      if (fieldSchema.min !== undefined && numValue < fieldSchema.min) {
        return `${name} must be at least ${fieldSchema.min}`;
      }

      // Max validation
      if (fieldSchema.max !== undefined && numValue > fieldSchema.max) {
        return `${name} must be no more than ${fieldSchema.max}`;
      }
    }

    // Min length validation
    if (fieldSchema.minLength && value.length < fieldSchema.minLength) {
      return (
        fieldSchema.minLengthMessage ||
        `${name} must be at least ${fieldSchema.minLength} characters`
      );
    }

    // Max length validation
    if (fieldSchema.maxLength && value.length > fieldSchema.maxLength) {
      return (
        fieldSchema.maxLengthMessage ||
        `${name} must be no more than ${fieldSchema.maxLength} characters`
      );
    }

    // Pattern validation
    if (fieldSchema.pattern && !fieldSchema.pattern.test(value)) {
      return fieldSchema.patternMessage || `${name} format is invalid`;
    }

    // Custom validation
    if (fieldSchema.validate) {
      const customError = fieldSchema.validate(value, values);
      if (customError) return customError;
    }

    return null;
  };

  // Validate all fields
  const validateForm = () => {
    if (!validationSchema) return {};

    const newErrors = {};
    Object.keys(validationSchema).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) newErrors[name] = error;
    });

    return newErrors;
  };

  // Handle input change
  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle input blur
  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur
    const error = validateField(name, values[name]);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(validationSchema || {}).reduce(
      (acc, key) => {
        acc[key] = true;
        return acc;
      },
      {}
    );
    setTouched(allTouched);

    // Validate form
    const newErrors = validateForm();
    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Submit form
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Inject form context into children
  const childrenWithProps =
    typeof children === "function"
      ? children({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          setFieldValue: (name, value) => handleChange(name, value),
          setFieldError: (name, error) =>
            setErrors((prev) => ({ ...prev, [name]: error })),
        })
      : children;

  return (
    <FormContainer
      onSubmit={handleSubmit}
      spacing={spacing}
      className={className}
      {...props}
    >
      {childrenWithProps}
    </FormContainer>
  );
};

export default Form;
