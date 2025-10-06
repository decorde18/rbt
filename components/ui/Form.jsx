"use client";
// ============================================
// components/ui/Form.jsx
// ============================================

import { cn } from "@/lib/utils";
import { formVariants, formDefaults } from "@/lib/componentConfig";
import { useState } from "react";

const Form = ({
  onSubmit,
  children,
  className,
  layout = formDefaults.layout,
  spacing = formDefaults.spacing,
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
    <form
      onSubmit={handleSubmit}
      className={cn(
        formDefaults.base,
        formVariants.layout[layout],
        formVariants.spacing[spacing],
        className
      )}
      {...props}
    >
      {childrenWithProps}
    </form>
  );
};
export default Form;

// USAGE EXAMPLE 1: Basic Form with Validation
// const validationSchema = {
//   email: {
//     required: true,
//     pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     patternMessage: 'Please enter a valid email address',
//   },
//   password: {
//     required: true,
//     minLength: 8,
//     minLengthMessage: 'Password must be at least 8 characters',
//   },
//   confirmPassword: {
//     required: true,
//     validate: (value, values) => {
//       return value === values.password ? null : 'Passwords must match';
//     },
//   },
// };

// <Form
//   onSubmit={(values) => console.log('Form submitted:', values)}
//   initialValues={{ email: '', password: '', confirmPassword: '' }}
//   validationSchema={validationSchema}
//   spacing="normal"
// >
//   {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
//     <>
//       <FormField
//         label="Email"
//         name="email"
//         required
//         error={touched.email && errors.email}
//       >
//         <Input
//           name="email"
//           type="email"
//           value={values.email || ''}
//           onChange={(e) => handleChange('email', e.target.value)}
//           onBlur={() => handleBlur('email')}
//           variant={touched.email && errors.email ? 'error' : 'default'}
//         />
//       </FormField>

//       <FormField
//         label="Password"
//         name="password"
//         required
//         error={touched.password && errors.password}
//       >
//         <Input
//           name="password"
//           type="password"
//           value={values.password || ''}
//           onChange={(e) => handleChange('password', e.target.value)}
//           onBlur={() => handleBlur('password')}
//           variant={touched.password && errors.password ? 'error' : 'default'}
//         />
//       </FormField>

//       <FormField
//         label="Confirm Password"
//         name="confirmPassword"
//         required
//         error={touched.confirmPassword && errors.confirmPassword}
//       >
//         <Input
//           name="confirmPassword"
//           type="password"
//           value={values.confirmPassword || ''}
//           onChange={(e) => handleChange('confirmPassword', e.target.value)}
//           onBlur={() => handleBlur('confirmPassword')}
//           variant={touched.confirmPassword && errors.confirmPassword ? 'error' : 'default'}
//         />
//       </FormField>

//       <Button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Submitting...' : 'Submit'}
//       </Button>
//     </>
//   )}
// </Form>

// ============================================
// USAGE EXAMPLE 2: Simple Form (No Validation)
// ============================================
/*
import { Form, FormField } from '@/components/ui/Form';
import { Input, Select, Textarea, Checkbox, Button } from '@/components/ui';

const MyForm = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    // API call here
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ 
        name: '', 
        email: '', 
        role: 'user',
        bio: '',
        subscribe: false 
      }}
      spacing="relaxed"
    >
      {({ values, handleChange, isSubmitting }) => (
        <>
          <FormField label="Full Name" name="name" required>
            <Input
              name="name"
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="John Doe"
            />
          </FormField>

          <FormField 
            label="Email Address" 
            name="email" 
            required
            helperText="We'll never share your email"
          >
            <Input
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="john@example.com"
            />
          </FormField>

          <FormField label="Role" name="role">
            <Select
              name="role"
              value={values.role}
              onChange={(e) => handleChange('role', e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </Select>
          </FormField>

          <FormField 
            label="Bio" 
            name="bio"
            helperText="Tell us about yourself"
          >
            <Textarea
              name="bio"
              value={values.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              rows={4}
              placeholder="I am a..."
            />
          </FormField>

          <Checkbox
            name="subscribe"
            checked={values.subscribe}
            onChange={(e) => handleChange('subscribe', e.target.checked)}
            label="Subscribe to newsletter"
          />

          <div className="flex gap-2">
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button type="button" variant="neutral">
              Cancel
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};
*/

// ============================================
// USAGE EXAMPLE 3: Complex Validation Schema
// ============================================
/*
const complexValidationSchema = {
  username: {
    required: true,
    requiredMessage: 'Username is required',
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
    patternMessage: 'Username can only contain letters, numbers, and underscores',
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    patternMessage: 'Please enter a valid email address',
  },
  age: {
    required: true,
    validate: (value) => {
      const age = parseInt(value);
      if (isNaN(age)) return 'Age must be a number';
      if (age < 18) return 'You must be at least 18 years old';
      if (age > 120) return 'Please enter a valid age';
      return null;
    },
  },
  website: {
    pattern: /^https?:\/\/.+/,
    patternMessage: 'Website must start with http:// or https://',
  },
  terms: {
    validate: (value) => value ? null : 'You must accept the terms and conditions',
  },
};
*/
