"use client";
// ==========================================
// FILE 5: components/ui/Input.jsx (EXAMPLE)
// ==========================================
// USAGE EXAMPLES:
// <Input placeholder="Enter text" />
// <Input variant="error" placeholder="Invalid input" />
// <Input size="lg" rounded="lg" />
// <Input className="max-w-md" />

import { cn } from "@/lib/utils";
import { inputVariants, inputDefaults } from "@/lib/componentConfig";
import { useState } from "react";

const Input = ({
  variant = inputDefaults.variant,
  size = inputDefaults.size,
  className,
  disabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const variantStyles = inputVariants.variant[variant];

  const baseStyles = {
    backgroundColor: disabled
      ? inputDefaults.disabledBg
      : inputDefaults.bgColor,
    borderColor: isFocused
      ? variantStyles.focusBorder
      : variantStyles.borderColor,
    borderRadius: inputDefaults.borderRadius,
    fontSize: inputDefaults.fontSize[size],
    ...(isFocused && {
      boxShadow: `0 0 0 2px ${variantStyles.focusRing}40`,
    }),
  };

  return (
    <input
      className={cn(inputDefaults.base, inputVariants.size[size], className)}
      style={baseStyles}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
