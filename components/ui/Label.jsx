// ============================================
// components/ui/Label.jsx
// ============================================
// USAGE:
// <Label htmlFor="email">Email Address</Label>
// <Label htmlFor="name" required>Full Name</Label>
// <Label size="lg">Large Label</Label>

import { cn } from "@/lib/utils";
import { theme } from "@/styles/theme";
import { labelVariants, labelDefaults } from "@/lib/componentConfig";

const Label = ({
  size = labelDefaults.size,
  className,
  required,
  children,
  htmlFor,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block font-medium mb-1",
        labelVariants.size[size],
        className
      )}
      style={{ color: theme.colors.textLabel }}
      {...props}
    >
      {children}
      {required && (
        <span style={{ color: theme.colors.danger }} className='ml-1'>
          *
        </span>
      )}
    </label>
  );
};

export default Label;
