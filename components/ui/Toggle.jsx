// ==========================================
// FILE 9: components/ui/Toggle.jsx (UPDATED WITH INLINE STYLES)
// ==========================================
// USAGE EXAMPLES:
// const [enabled, setEnabled] = useState(false);
// <Toggle checked={enabled} onChange={setEnabled} label="Enable notifications" />
// <Toggle checked={enabled} onChange={setEnabled} variant="success" size="lg" />

import { cn } from "@/lib/utils";
import {
  toggleVariants,
  toggleDefaults,
  toggleSwitchSizes,
} from "@/lib/componentConfig";

export const Toggle = ({
  variant = toggleDefaults.variant,
  size = toggleDefaults.size,
  className,
  label,
  checked = false,
  onChange,
  disabled,
  ...props
}) => {
  const bgColor = checked
    ? toggleVariants.variant[variant]
    : toggleDefaults.bgOff;
  const sizeStyles = toggleVariants.size[size];
  const switchStyles = toggleSwitchSizes[size];

  return (
    <div className='flex items-center gap-2'>
      <button
        type='button'
        role='switch'
        aria-checked={checked}
        className={cn(toggleDefaults.base, className)}
        style={{
          backgroundColor: bgColor,
          width: sizeStyles.width,
          height: sizeStyles.height,
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        onClick={() => !disabled && onChange && onChange(!checked)}
        disabled={disabled}
        {...props}
      >
        <span
          className={toggleDefaults.switchBase}
          style={{
            width: switchStyles.size,
            height: switchStyles.size,
            transform: checked
              ? `translateX(${switchStyles.translateOn})`
              : "translateX(0)",
          }}
        />
      </button>
      {label && <span className={disabled ? "opacity-50" : ""}>{label}</span>}
    </div>
  );
};
