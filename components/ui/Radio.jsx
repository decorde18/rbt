// ============================================
// components/ui/Radio.jsx
// ============================================
// USAGE:
// <Radio name="option" value="1" label="Option 1" />
// <Radio name="option" value="2" label="Option 2" variant="success" size="lg" />

import { cn } from "@/lib/utils";
import { radioVariants, radioDefaults } from "@/utils/componentConfig";

const Radio = ({
  variant = radioDefaults.variant,
  size = radioDefaults.size,
  className,
  label,
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const accentColor = radioVariants.variant[variant];

  return (
    <div className='flex items-center gap-2'>
      <input
        type='radio'
        id={radioId}
        className={cn(radioDefaults.base, radioVariants.size[size], className)}
        style={{
          accentColor: accentColor,
          borderColor: radioDefaults.borderColor,
        }}
        {...props}
      />
      {label && (
        <label htmlFor={radioId} className='cursor-pointer'>
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
