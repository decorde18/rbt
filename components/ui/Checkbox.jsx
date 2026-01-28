// ==========================================
// FILE 8: components/ui/Checkbox.jsx (UPDATED WITH INLINE STYLES)
// ==========================================
// USAGE EXAMPLES:
// <Checkbox label="Accept terms" />
// <Checkbox label="Subscribe" variant="success" size="lg" />

import { cn } from "@/lib/utils";
import { checkboxVariants, checkboxDefaults } from "@/lib/componentConfig";

const Checkbox = ({
  variant = checkboxDefaults.variant,
  size = checkboxDefaults.size,
  fontSize = checkboxDefaults.fontSize,
  className,
  label,
  id,
  ...props
}) => {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const accentColor = checkboxVariants.variant[variant];

  return (
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        id={checkboxId}
        className={cn(
          checkboxDefaults.base,
          checkboxVariants.size[size],

          className
        )}
        style={{
          accentColor: accentColor,
          borderColor: checkboxDefaults.borderColor,
        }}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className='cursor-pointer'
          style={{ fontSize: fontSize }}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
