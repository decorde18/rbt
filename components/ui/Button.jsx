"use client";
// ==========================================
// FILE 4: components/ui/Button.jsx (EXAMPLE)
// ==========================================
// USAGE EXAMPLES:
// <Button>Default Primary</Button>
// <Button variant="danger" size="lg">Delete</Button>
// <Button variant="ghost" rounded="full">Icon</Button>
// <Button className="w-full mt-4">Custom classes work too</Button>
import { cn } from "@/lib/utils";
import { buttonVariants, buttonDefaults } from "@/lib/componentConfig";
import { useState } from "react";

const Button = ({
  variant = buttonDefaults.variant,
  size = buttonDefaults.size,
  className,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const variantStyles = buttonVariants.variant[variant];

  const baseStyles = {
    backgroundColor: isHovered ? variantStyles.bgHover : variantStyles.bg,
    color:
      isHovered && variantStyles.colorHover
        ? variantStyles.colorHover
        : variantStyles.color,
    border: variantStyles.border || "none",
    borderRadius: buttonDefaults.borderRadius,
    fontSize: buttonDefaults.fontSize[size],
    ...(isHovered &&
      variantStyles.textDecoration && {
        textDecoration: variantStyles.textDecoration,
      }),
  };

  return (
    <button
      className={cn(buttonDefaults.base, buttonVariants.size[size], className)}
      style={baseStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
