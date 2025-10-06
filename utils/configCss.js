export const buttonVariants = {
  variant: {
    primary: "bg-[#091f3a] text-white hover:bg-[#274870] focus:ring-[#091f3a]",
    secondary:
      "bg-[#274870] text-white hover:bg-[#091f3a] focus:ring-[#274870]",
    accent:
      "bg-[#fdd835] text-[#091f3a] hover:bg-[#274870] hover:text-white focus:ring-[#fdd835]",
    danger: "bg-[#ef4444] text-white hover:bg-[#dc2626] focus:ring-[#ef4444]",
    success: "bg-[#10b981] text-white hover:bg-[#059669] focus:ring-[#10b981]",
    neutral:
      "bg-white text-[#1a202c] border border-[#6f85a0] hover:bg-[#f8fafc] focus:ring-[#6f85a0]",
    ghost:
      "bg-transparent text-[#577190] hover:bg-[#f8fafc] focus:ring-[#6f85a0]",
    link: "bg-transparent text-[#091f3a] hover:text-[#274870] hover:underline focus:ring-[#091f3a]",
  },
  size: {
    xs: "px-2 py-1 text-[1rem]",
    sm: "px-3 py-1.5 text-[1rem]",
    md: "px-4 py-2 text-[1.25rem]",
    lg: "px-6 py-3 text-[1.75rem]",
  },
  rounded: {
    none: "rounded-none",
    sm: "rounded-[6px]",
    md: "rounded-[12px]",
    lg: "rounded-[20px]",
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
    default: "border-[#6f85a0] focus:border-[#091f3a] focus:ring-[#091f3a]",
    error: "border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]",
    success: "border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]",
  },
  size: {
    sm: "px-3 py-1.5 text-[1rem]",
    md: "px-4 py-2 text-[1.25rem]",
    lg: "px-6 py-3 text-[1.75rem]",
  },
  rounded: {
    sm: "rounded-[6px]",
    md: "rounded-[12px]",
    lg: "rounded-[20px]",
  },
};

export const inputDefaults = {
  base: "w-full bg-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-60",
  variant: "default",
  size: "md",
  rounded: "md",
};

// ============================================
// SELECT CONFIGURATION
// ============================================
export const selectVariants = inputVariants;

export const selectDefaults = {
  base: "w-full bg-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 appearance-none cursor-pointer disabled:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-60",
  variant: "default",
  size: "md",
  rounded: "md",
};

// ============================================
// TEXTAREA CONFIGURATION
// ============================================
export const textareaVariants = inputVariants;

export const textareaDefaults = {
  base: "w-full bg-white border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-y disabled:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-60",
  variant: "default",
  size: "md",
  rounded: "md",
};

// ============================================
// LABEL CONFIGURATION
// ============================================
export const labelVariants = {
  size: {
    sm: "text-[1rem]",
    md: "text-[1.25rem]",
    lg: "text-[1.75rem]",
  },
};

export const labelDefaults = {
  base: "block font-medium text-[#577190] mb-1",
  size: "md",
};

// ============================================
// CHECKBOX CONFIGURATION
// ============================================
export const checkboxVariants = {
  variant: {
    primary: "text-[#091f3a] focus:ring-[#091f3a]",
    secondary: "text-[#274870] focus:ring-[#274870]",
    accent: "text-[#fdd835] focus:ring-[#fdd835]",
    success: "text-[#10b981] focus:ring-[#10b981]",
    danger: "text-[#ef4444] focus:ring-[#ef4444]",
  },
  size: {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  },
};

export const checkboxDefaults = {
  base: "rounded border-[#6f85a0] transition-all duration-200 focus:ring-2 focus:ring-offset-0 cursor-pointer",
  variant: "primary",
  size: "md",
};

// ============================================
// TOGGLE/SWITCH CONFIGURATION
// ============================================
export const toggleVariants = {
  variant: {
    primary: "bg-[#091f3a]",
    secondary: "bg-[#274870]",
    accent: "bg-[#fdd835]",
    success: "bg-[#10b981]",
    danger: "bg-[#ef4444]",
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
