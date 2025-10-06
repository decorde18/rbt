// ==========================================
// FILE 5: components/ui/Input.jsx (EXAMPLE)
// ==========================================
// USAGE EXAMPLES:
// <Input placeholder="Enter text" />
// <Input variant="error" placeholder="Invalid input" />
// <Input size="lg" rounded="lg" />
// <Input className="max-w-md" />

import { cn } from "@/lib/utils";
import { inputVariants, inputDefaults } from "@/utils/componentConfig";

const Input = ({
  variant = inputDefaults.variant,
  size = inputDefaults.size,
  rounded = inputDefaults.rounded,
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        inputDefaults.base,
        inputVariants.variant[variant],
        inputVariants.size[size],
        inputVariants.rounded[rounded],
        className
      )}
      {...props}
    />
  );
};
export default Input;
