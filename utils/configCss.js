// utils/config.js
// Component configurations using your custom theme

import { tailwindTheme, theme } from "@/styles/theme";

// ============================================
// BUTTON CONFIGURATION
// ============================================
export const btnDefaults = {
  size: {
    xs: `${tailwindTheme.sizes.xs.padding} ${tailwindTheme.sizes.xs.text}`,
    sm: `${tailwindTheme.sizes.sm.padding} ${tailwindTheme.sizes.sm.text}`,
    md: `${tailwindTheme.sizes.md.padding} ${tailwindTheme.sizes.md.text}`,
    lg: `${tailwindTheme.sizes.lg.padding} ${tailwindTheme.sizes.lg.text}`,
  },
  color: {
    primary: `${tailwindTheme.colors.primary.base} ${tailwindTheme.colors.primary.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.primary.focus} ${tailwindTheme.focus.outline}`,
    secondary: `${tailwindTheme.colors.secondary.base} ${tailwindTheme.colors.secondary.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.secondary.focus} ${tailwindTheme.focus.outline}`,
    accent: `${tailwindTheme.colors.accent.base} ${tailwindTheme.colors.accent.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.accent.focus} ${tailwindTheme.focus.outline}`,
    danger: `${tailwindTheme.colors.danger.base} ${tailwindTheme.colors.danger.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.danger.focus} ${tailwindTheme.focus.outline}`,
    success: `${tailwindTheme.colors.success.base} ${tailwindTheme.colors.success.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.success.focus} ${tailwindTheme.focus.outline}`,
    neutral: `${tailwindTheme.colors.neutral.base} ${tailwindTheme.colors.neutral.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.neutral.focus} ${tailwindTheme.focus.outline}`,
    ghost: `${tailwindTheme.colors.ghost.base} ${tailwindTheme.colors.ghost.hover} ${tailwindTheme.focus.ring} ${tailwindTheme.colors.ghost.focus} ${tailwindTheme.focus.outline}`,
    link: `${tailwindTheme.colors.link.base} ${tailwindTheme.colors.link.hover}`,
  },
  rounded: tailwindTheme.rounded,
  shadow: tailwindTheme.shadow,
  type: "button",
  transition: tailwindTheme.transitions.base,
};

export const btnPresets = {
  submit: {
    type: "submit",
    variant: "primary",
    size: "md",
  },
  cancel: {
    type: "button",
    variant: "neutral",
    size: "md",
  },
  delete: {
    type: "button",
    variant: "danger",
    size: "md",
  },
  save: {
    type: "button",
    variant: "success",
    size: "md",
  },
};

// ============================================
// INPUT CONFIGURATION
// ============================================
export const inputDefaults = {
  size: {
    sm: `${tailwindTheme.sizes.sm.padding} ${tailwindTheme.sizes.sm.text}`,
    md: `${tailwindTheme.sizes.md.padding} ${tailwindTheme.sizes.md.text}`,
    lg: `${tailwindTheme.sizes.lg.padding} ${tailwindTheme.sizes.lg.text}`,
  },
  variant: {
    default: `bg-white ${tailwindTheme.colors.neutral.border} ${tailwindTheme.colors.primary.focus} ${tailwindTheme.focus.ring} focus:ring-offset-0`,
    error: `bg-white ${tailwindTheme.colors.danger.border} ${tailwindTheme.colors.danger.focus} ${tailwindTheme.focus.ring} focus:ring-offset-0`,
    success: `bg-white ${tailwindTheme.colors.success.border} ${tailwindTheme.colors.success.focus} ${tailwindTheme.focus.ring} focus:ring-offset-0`,
    disabled: "bg-[#f8fafc] border-[#6f85a0] cursor-not-allowed opacity-60",
  },
  rounded: tailwindTheme.rounded,
  base: `border ${tailwindTheme.transitions.base} ${tailwindTheme.focus.outline} w-full`,
};

// ============================================
// SELECT CONFIGURATION
// ============================================
export const selectDefaults = {
  size: inputDefaults.size,
  variant: inputDefaults.variant,
  rounded: tailwindTheme.rounded,
  base: `border ${tailwindTheme.transitions.base} ${tailwindTheme.focus.outline} w-full appearance-none cursor-pointer`,
};

// ============================================
// TOGGLE/CHECKBOX CONFIGURATION
// ============================================
export const toggleDefaults = {
  size: {
    sm: "h-5 w-9",
    md: "h-6 w-11",
    lg: "h-7 w-14",
  },
  switchSize: {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  },
  translate: {
    sm: "translate-x-4",
    md: "translate-x-5",
    lg: "translate-x-7",
  },
  variant: {
    primary: "bg-[#091f3a]",
    secondary: "bg-[#274870]",
    accent: "bg-[#fdd835]",
    success: "bg-[#10b981]",
    danger: "bg-[#ef4444]",
  },
  base: `relative inline-flex items-center rounded-full ${tailwindTheme.transitions.base} ${tailwindTheme.focus.outline} ${tailwindTheme.focus.ring}`,
  switchBase: `inline-block transform rounded-full bg-white shadow-sm ${tailwindTheme.transitions.base}`,
};

export const checkboxDefaults = {
  size: {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  },
  variant: {
    primary: `${tailwindTheme.colors.primary.text} ${tailwindTheme.colors.primary.focus}`,
    secondary: `${tailwindTheme.colors.secondary.text} ${tailwindTheme.colors.secondary.focus}`,
    accent: `${tailwindTheme.colors.accent.text} ${tailwindTheme.colors.accent.focus}`,
    success: `${tailwindTheme.colors.success.text} ${tailwindTheme.colors.success.focus}`,
    danger: `${tailwindTheme.colors.danger.text} ${tailwindTheme.colors.danger.focus}`,
  },
  base: `rounded border-[#6f85a0] ${tailwindTheme.transitions.base} ${tailwindTheme.focus.ring} focus:ring-offset-0`,
};

// ============================================
// TEXTAREA CONFIGURATION
// ============================================
export const textareaDefaults = {
  size: inputDefaults.size,
  variant: inputDefaults.variant,
  rounded: tailwindTheme.rounded,
  base: `border ${tailwindTheme.transitions.base} ${tailwindTheme.focus.outline} w-full resize-y`,
};

// ============================================
// LABEL CONFIGURATION
// ============================================
export const labelDefaults = {
  size: {
    sm: tailwindTheme.sizes.sm.text,
    md: tailwindTheme.sizes.md.text,
    lg: tailwindTheme.sizes.lg.text,
  },
  base: `block font-medium text-[${theme.colors.textLabel}] mb-1`,
  required: `${tailwindTheme.colors.danger.text} ml-1`,
};

// Export theme for direct access in components if needed
export { theme, tailwindTheme };
