"use client";
// ==========================================
// FILE 7: components/ui/Textarea.jsx (UPDATED WITH INLINE STYLES)
// ==========================================
// USAGE EXAMPLES:
// <Textarea placeholder="Enter description" rows={4} />
// <Textarea variant="error" />
// <Textarea size="lg" />

import { cn } from "@/lib/utils";
import { textareaVariants, textareaDefaults } from "@/lib/componentConfig";
import { useState } from "react";

const Textarea = ({
  variant = textareaDefaults.variant,
  size = textareaDefaults.size,
  className,
  disabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const variantStyles = textareaVariants.variant[variant];

  const baseStyles = {
    backgroundColor: disabled
      ? textareaDefaults.disabledBg
      : textareaDefaults.bgColor,
    borderColor: isFocused
      ? variantStyles.focusBorder
      : variantStyles.borderColor,
    borderRadius: textareaDefaults.borderRadius,
    fontSize: textareaDefaults.fontSize[size],
    ...(isFocused && {
      boxShadow: `0 0 0 2px ${variantStyles.focusRing}40`,
    }),
  };

  return (
    <textarea
      className={cn(
        textareaDefaults.base,
        textareaVariants.size[size],
        className
      )}
      style={baseStyles}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={disabled}
      {...props}
    />
  );
};
export default Textarea;
