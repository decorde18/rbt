// ==========================================
// FILE 3: utils/componentConfig.js (CLEANED UP - USES THEME)
// ==========================================
import { theme } from "@/styles/theme";

// ============================================
// BUTTON CONFIGURATION
// ============================================
export const buttonVariants = {
  variant: {
    primary: {
      bg: theme.colors.primary,
      bgHover: theme.colors.accentHover,
      color: "theme.colors.white",
      focusRing: theme.colors.primary,
    },
    secondary: {
      bg: theme.colors.secondary,
      bgHover: theme.colors.primary,
      color: "theme.colors.white",
      focusRing: theme.colors.secondary,
    },
    accent: {
      bg: theme.colors.accent,
      bgHover: theme.colors.accentHover,
      color: "theme.colors.white",
      focusRing: theme.colors.accent,
    },
    danger: {
      bg: theme.colors.danger,
      bgHover: theme.colors.errorHover,
      color: "theme.colors.white",
      focusRing: theme.colors.danger,
    },
    success: {
      bg: theme.colors.success,
      bgHover: "#059669",
      color: "theme.colors.white",
      focusRing: theme.colors.success,
    },
    neutral: {
      bg: "theme.colors.white",
      bgHover: theme.colors.background,
      color: theme.colors.text,
      border: `1px solid ${theme.colors.border}`,
      focusRing: theme.colors.border,
    },
    ghost: {
      bg: "transparent",
      bgHover: theme.colors.background,
      color: theme.colors.textLabel,
      focusRing: theme.colors.border,
    },
    link: {
      bg: "transparent",
      bgHover: "transparent",
      color: theme.colors.primary,
      colorHover: theme.colors.accentHover,
      focusRing: theme.colors.primary,
      textDecoration: "underline",
    },
  },
  size: {
    xs: "px-2 py-1",
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  },
};

export const buttonDefaults = {
  base: "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  variant: "primary",
  size: "md",
  borderRadius: theme.borderRadius.md,
  fontSize: {
    xs: theme.fontSize.small,
    sm: theme.fontSize.small,
    md: theme.fontSize.body,
    lg: theme.fontSize.medium,
  },
};

// ============================================
// INPUT CONFIGURATION
// ============================================
export const inputVariants = {
  variant: {
    default: {
      borderColor: theme.colors.border,
      focusBorder: theme.colors.primary,
      focusRing: theme.colors.primary,
    },
    error: {
      borderColor: theme.colors.danger,
      focusBorder: theme.colors.danger,
      focusRing: theme.colors.danger,
    },
    success: {
      borderColor: theme.colors.success,
      focusBorder: theme.colors.success,
      focusRing: theme.colors.success,
    },
  },
  size: {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  },
};

export const inputDefaults = {
  base: "w-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
  variant: "default",
  size: "md",
  bgColor: theme.colors.surface,
  disabledBg: theme.colors.background,
  borderRadius: theme.borderRadius.md,
  fontSize: {
    sm: theme.fontSize.small,
    md: theme.fontSize.body,
    lg: theme.fontSize.medium,
  },
};

// ============================================
// SELECT CONFIGURATION
// ============================================
export const selectVariants = inputVariants;

export const selectDefaults = {
  base: "w-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
  variant: "default",
  size: "md",
  bgColor: theme.colors.surface,
  disabledBg: theme.colors.background,
  borderRadius: theme.borderRadius.md,
  fontSize: {
    sm: theme.fontSize.small,
    md: theme.fontSize.body,
    lg: theme.fontSize.medium,
  },
};

// ============================================
// TEXTAREA CONFIGURATION
// ============================================
export const textareaVariants = inputVariants;

export const textareaDefaults = {
  base: "w-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-y disabled:cursor-not-allowed disabled:opacity-60",
  variant: "default",
  size: "md",
  bgColor: theme.colors.surface,
  disabledBg: theme.colors.background,
  borderRadius: theme.borderRadius.md,
  fontSize: {
    sm: theme.fontSize.small,
    md: theme.fontSize.body,
    lg: theme.fontSize.medium,
  },
};

// ============================================
// CHECKBOX CONFIGURATION
// ============================================
export const checkboxVariants = {
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

export const checkboxDefaults = {
  base: "rounded transition-all duration-200 focus:ring-2 focus:ring-offset-0 cursor-pointer",
  variant: "primary",
  size: "md",
  borderColor: theme.colors.border,
};

// ============================================
// TOGGLE/SWITCH CONFIGURATION
// ============================================
export const toggleVariants = {
  variant: {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    success: theme.colors.success,
    danger: theme.colors.danger,
  },
  size: {
    sm: { width: "2.25rem", height: "1.25rem" },
    md: { width: "2.75rem", height: "1.5rem" },
    lg: { width: "3.5rem", height: "1.75rem" },
  },
};

export const toggleDefaults = {
  base: "relative inline-flex items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
  switchBase:
    "inline-block transform rounded-full bg-white shadow-sm transition-all duration-200",
  variant: "primary",
  size: "md",
  bgOff: "#d1d5db",
};

// Helper to get switch sizes and translations
export const toggleSwitchSizes = {
  sm: { size: "1rem", translateOn: "1rem" },
  md: { size: "1.25rem", translateOn: "1.25rem" },
  lg: { size: "1.5rem", translateOn: "1.75rem" },
};

// ============================================
// LABEL CONFIGURATION
// ============================================
export const labelVariants = {
  size: {
    sm: theme.fontSize.small,
    md: theme.fontSize.body,
    lg: theme.fontSize.medium,
  },
};

export const labelDefaults = {
  base: "block font-medium mb-1",
  size: "md",
  color: theme.colors.textLabel,
  requiredColor: theme.colors.danger,
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
    // lg: "max-w-2xl",
    // xl: "max-w-4xl",
    // full: "max-w-full mx-4",
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
// ============================================
// FORM CONFIGURATION
// ============================================
export const formVariants = {
  layout: {
    vertical: "flex flex-col",
    horizontal: "flex flex-row items-center",
    inline: "flex flex-row items-center gap-4",
  },
  spacing: {
    compact: "gap-2",
    normal: "gap-4",
    relaxed: "gap-6",
  },
};

export const formDefaults = {
  base: "w-full",
  layout: "vertical",
  spacing: "normal",
  fieldWrapper: "flex flex-col",
  errorColor: theme.colors.danger,
  errorFontSize: theme.fontSize.small,
};

// ============================================
// FORM FIELD CONFIGURATION
// ============================================
export const formFieldDefaults = {
  wrapper: "flex flex-col gap-1",
  helperTextColor: theme.colors.muted,
  helperTextSize: theme.fontSize.small,
  errorColor: theme.colors.danger,
  errorSize: theme.fontSize.small,
};
