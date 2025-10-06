// ==========================================
// FILE 4: components/ui/Button.jsx (EXAMPLE)
// ==========================================
// USAGE EXAMPLES:
// <Button>Default Primary</Button>
// <Button variant="danger" size="lg">Delete</Button>
// <Button variant="ghost" rounded="full">Icon</Button>
// <Button className="w-full mt-4">Custom classes work too</Button>
import { cn } from "@/lib/utils";
import { buttonVariants, buttonDefaults } from "@/utils/componentConfig";

const Button = ({
  variant = buttonDefaults.variant,
  size = buttonDefaults.size,
  rounded = buttonDefaults.rounded,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonDefaults.base,
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        buttonVariants.rounded[rounded],
        className // Any custom classes override defaults
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
