// ==========================================
// FILE 3: utils/componentConfig.js (CLEANED UP - USES THEME)
// ==========================================
import { theme } from "@/styles/theme";

// ============================================
// BUTTON CONFIGURATION
// ============================================
export const buttonVariants = {
  variant: {
    primary: `bg-[${theme.colors.primary}] text-white hover:bg-[${theme.colors.accentHover}] focus:ring-[${theme.colors.primary}]`,
    secondary: `bg-[${theme.colors.secondary}] text-white hover:bg-[${theme.colors.primary}] focus:ring-[${theme.colors.secondary}]`,
    accent: `bg-[${theme.colors.accent}] text-white hover:bg-[${theme.colors.accentHover}] focus:ring-[${theme.colors.accent}]`,
    danger: `bg-[${theme.colors.danger}] text-white hover:bg-[${theme.colors.errorHover}] focus:ring-[${theme.colors.danger}]`,
    success: `bg-[${theme.colors.success}] text-white hover:brightness-90 focus:ring-[${theme.colors.success}]`,
    neutral: `bg-white text-[${theme.colors.text}] border border-[${theme.colors.border}] hover:bg-[${theme.colors.background}] focus:ring-[${theme.colors.border}]`,
    ghost: `bg-transparent text-[${theme.colors.textLabel}] hover:bg-[${theme.colors.background}] focus:ring-[${theme.colors.border}]`,
    link: `bg-transparent text-[${theme.colors.primary}] hover:text-[${theme.colors.accentHover}] hover:underline focus:ring-[${theme.colors.primary}]`,
  },
  size: {
    xs: `px-2 py-1 text-[${theme.fontSize.small}]`,
    sm: `px-3 py-1.5 text-[${theme.fontSize.small}]`,
    md: `px-4 py-2 text-[${theme.fontSize.body}]`,
    lg: `px-6 py-3 text-[${theme.fontSize.medium}]`,
  },
  rounded: {
    none: "rounded-none",
    sm: `rounded-[${theme.borderRadius.sm}]`,
    md: `rounded-[${theme.borderRadius.md}]`,
    lg: `rounded-[${theme.borderRadius.lg}]`,
    full: "rounded-full",
  },
};

export const buttonDefaults = {
  base: "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  variant: "primary",
  size: "md",
  rounded: "md",
};

// ============================================
// INPUT CONFIGURATION
// ============================================
export const inputVariants = {
  variant: {
    default: `border-[${theme.colors.border}] focus:border-[${theme.colors.primary}] focus:ring-[${theme.colors.primary}]`,
    error: `border-[${theme.colors.danger}] focus:border-[${theme.colors.danger}] focus:ring-[${theme.colors.danger}]`,
    success: `border-[${theme.colors.success}] focus:border-[${theme.colors.success}] focus:ring-[${theme.colors.success}]`,
  },
  size: {
    sm: `px-3 py-1.5 text-[${theme.fontSize.small}]`,
    md: `px-4 py-2 text-[${theme.fontSize.body}]`,
    lg: `px-6 py-3 text-[${theme.fontSize.medium}]`,
  },
  rounded: {
    sm: `rounded-[${theme.borderRadius.sm}]`,
    md: `rounded-[${theme.borderRadius.md}]`,
    lg: `rounded-[${theme.borderRadius.lg}]`,
  },
};

export const inputDefaults = {
  base: `w-full bg-[${theme.colors.surface}] border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-[${theme.colors.background}] disabled:cursor-not-allowed disabled:opacity-60`,
  variant: "default",
  size: "md",
  rounded: "md",
};

// ============================================
// SELECT CONFIGURATION
// ============================================
export const selectVariants = inputVariants;

export const selectDefaults = {
  base: `w-full bg-[${theme.colors.surface}] border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 appearance-none cursor-pointer disabled:bg-[${theme.colors.background}] disabled:cursor-not-allowed disabled:opacity-60`,
  variant: "default",
  size: "md",
  rounded: "md",
};

// ============================================
// TEXTAREA CONFIGURATION
// ============================================
export const textareaVariants = inputVariants;

export const textareaDefaults = {
  base: `w-full bg-[${theme.colors.surface}] border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-y disabled:bg-[${theme.colors.background}] disabled:cursor-not-allowed disabled:opacity-60`,
  variant: "default",
  size: "md",
  rounded: "md",
};

// ============================================
// LABEL CONFIGURATION
// ============================================
export const labelVariants = {
  size: {
    sm: `text-[${theme.fontSize.small}]`,
    md: `text-[${theme.fontSize.body}]`,
    lg: `text-[${theme.fontSize.medium}]`,
  },
};

export const labelDefaults = {
  base: `block font-medium text-[${theme.colors.textLabel}] mb-1`,
  size: "md",
};

// ============================================
// CHECKBOX CONFIGURATION
// ============================================
export const checkboxVariants = {
  variant: {
    primary: `text-[${theme.colors.primary}] focus:ring-[${theme.colors.primary}]`,
    secondary: `text-[${theme.colors.secondary}] focus:ring-[${theme.colors.secondary}]`,
    accent: `text-[${theme.colors.accent}] focus:ring-[${theme.colors.accent}]`,
    success: `text-[${theme.colors.success}] focus:ring-[${theme.colors.success}]`,
    danger: `text-[${theme.colors.danger}] focus:ring-[${theme.colors.danger}]`,
  },
  size: {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  },
};

export const checkboxDefaults = {
  base: `rounded border-[${theme.colors.border}] transition-all duration-200 focus:ring-2 focus:ring-offset-0 cursor-pointer`,
  variant: "primary",
  size: "md",
};

// ============================================
// TOGGLE/SWITCH CONFIGURATION
// ============================================
export const toggleVariants = {
  variant: {
    primary: `bg-[${theme.colors.primary}]`,
    secondary: `bg-[${theme.colors.secondary}]`,
    accent: `bg-[${theme.colors.accent}]`,
    success: `bg-[${theme.colors.success}]`,
    danger: `bg-[${theme.colors.danger}]`,
  },
  size: {
    sm: "h-5 w-9",
    md: "h-6 w-11",
    lg: "h-7 w-14",
  },
};

export const toggleDefaults = {
  base: "relative inline-flex items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
  switchBase:
    "inline-block transform rounded-full bg-white shadow-sm transition-all duration-200",
  variant: "primary",
  size: "md",
  bgOff: "bg-gray-300",
};

// Helper to get switch sizes and translations
export const toggleSwitchSizes = {
  sm: { switchClass: "h-4 w-4", translateOn: "translate-x-4" },
  md: { switchClass: "h-5 w-5", translateOn: "translate-x-5" },
  lg: { switchClass: "h-6 w-6", translateOn: "translate-x-7" },
};

// ============================================
// RADIO CONFIGURATION
// ============================================
export const radioVariants = {
  variant: {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    success: theme.colors.success,
    danger: theme.colors.danger,
  },
  size: {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  },
};

export const radioDefaults = {
  base: "transition-all duration-200 focus:ring-2 focus:ring-offset-0 cursor-pointer",
  variant: "primary",
  size: "md",
  borderColor: theme.colors.border,
};

// ============================================
// TABLE CONFIGURATION
// ============================================
export const tableVariants = {
  variant: {
    default: { borderColor: theme.colors.border },
    striped: { borderColor: theme.colors.border },
    bordered: { borderColor: theme.colors.border, borderWidth: "2px" },
  },
  size: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
};

export const tableDefaults = {
  base: "w-full border-collapse",
  variant: "default",
  size: "md",
  headerBg: theme.colors.primary,
  headerText: theme.colors.white,
  rowHoverBg: theme.colors.background,
  stripedRowBg: theme.colors.background,
  borderColor: theme.colors.border,
};

// ============================================
// MODAL CONFIGURATION
// ============================================
export const modalVariants = {
  size: {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  },
};

export const modalDefaults = {
  overlay:
    "fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4",
  container: "shadow-xl z-50 w-full",
  header: "px-6 py-4 border-b",
  body: "px-6 py-4",
  footer: "px-6 py-4 border-t flex justify-end gap-2",
  size: "md",
  bgColor: theme.colors.surface,
  borderColor: theme.colors.border,
  borderRadius: theme.borderRadius.lg,
};

// ============================================
// CARD CONFIGURATION
// ============================================
export const cardVariants = {
  variant: {
    default: {
      bg: theme.colors.surface,
      border: `1px solid ${theme.colors.border}`,
    },
    elevated: {
      bg: theme.colors.surface,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
    outlined: {
      bg: "transparent",
      border: `2px solid ${theme.colors.border}`,
    },
  },
};

export const cardDefaults = {
  base: "overflow-hidden",
  variant: "default",
  headerBorder: `1px solid ${theme.colors.border}`,
  footerBorder: `1px solid ${theme.colors.border}`,
  borderRadius: theme.borderRadius.md,
};

// ============================================
// BADGE CONFIGURATION
// ============================================
export const badgeVariants = {
  variant: {
    primary: { bg: theme.colors.primary, color: theme.colors.white },
    secondary: { bg: theme.colors.secondary, color: theme.colors.white },
    success: { bg: theme.colors.success, color: theme.colors.white },
    danger: { bg: theme.colors.danger, color: theme.colors.white },
    warning: { bg: theme.colors.accent, color: theme.colors.white },
    neutral: { bg: theme.colors.background, color: theme.colors.text },
  },
  size: {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  },
};

export const badgeDefaults = {
  base: "inline-flex items-center font-medium",
  variant: "primary",
  size: "md",
  borderRadius: theme.borderRadius.md,
};

// ============================================
// TABS CONFIGURATION
// ============================================
export const tabsDefaults = {
  container: "w-full",
  tabList: "flex gap-1",
  tab: "px-4 py-2 font-medium transition-all duration-200 cursor-pointer",
  borderColor: theme.colors.border,
  activeColor: theme.colors.primary,
  inactiveColor: theme.colors.muted,
  textColor: theme.colors.text,
  tabPanel: "py-4",
};
