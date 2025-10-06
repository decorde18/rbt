"use client";
// ==========================================
// FILE 6: components/ui/Select.jsx (EXAMPLE)
// ==========================================
// USAGE EXAMPLES:
// <Select>
//   <option>Option 1</option>
//   <option>Option 2</option>
// </Select>
// <Select variant="error" size="lg">...</Select>
import { cn } from "@/lib/utils";
import { selectVariants, selectDefaults } from "@/lib/componentConfig";
import { useState } from "react";

const Select = ({
  variant = selectDefaults.variant,
  size = selectDefaults.size,
  className,
  children,
  disabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const variantStyles = selectVariants.variant[variant];

  const baseStyles = {
    backgroundColor: disabled
      ? selectDefaults.disabledBg
      : selectDefaults.bgColor,
    borderColor: isFocused
      ? variantStyles.focusBorder
      : variantStyles.borderColor,
    borderRadius: selectDefaults.borderRadius,
    fontSize: selectDefaults.fontSize[size],
    paddingRight: "2.5rem",
    ...(isFocused && {
      boxShadow: `0 0 0 2px ${variantStyles.focusRing}40`,
    }),
  };

  return (
    <div className='relative'>
      <select
        className={cn(
          selectDefaults.base,
          selectVariants.size[size],
          className
        )}
        style={baseStyles}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
};
export default Select;
