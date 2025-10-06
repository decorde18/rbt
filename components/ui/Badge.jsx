// ============================================
// components/ui/Badge.jsx
// ============================================
// // USAGE:
// <Badge>Default</Badge>
// <Badge variant="success" size="lg">Success</Badge>
// <Badge variant="danger" rounded="full">3</Badge>
//
import { cn } from "@/lib/utils";
import { badgeVariants, badgeDefaults } from "@/lib/componentConfig";

const Badge = ({
  variant = badgeDefaults.variant,
  size = badgeDefaults.size,
  className,
  children,
  ...props
}) => {
  const variantStyles = badgeVariants.variant[variant];

  return (
    <span
      className={cn(badgeDefaults.base, badgeVariants.size[size], className)}
      style={{
        backgroundColor: variantStyles.bg,
        color: variantStyles.color,
        borderRadius: badgeDefaults.borderRadius,
      }}
      {...props}
    >
      {children}
    </span>
  );
};
export default Badge;
