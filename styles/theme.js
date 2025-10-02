// utils/theme.js
// Your existing theme with hex colors and custom values

export const theme = {
  colors: {
    primary: "#091f3a",
    secondary: "#274870",
    accent: "#fdd835",
    background: "#f8fafc",
    surface: "#ffffff",
    text: "#1a202c",
    textLabel: "#577190",
    white: "#f0f4f8",
    muted: "#718096",
    success: "#10b981",
    danger: "#ef4444",
    error: "#ef4444",
    errorHover: "#dc2626",
    accentHover: "#274870",
    border: "#6f85a0",
    shadow: "rgba(0, 0, 0, 0.2)",
    shadowLight: "rgba(255, 255, 255, 0.2)",
    shadowPrimary: "rgba(9, 31, 58, 0.4)",
    shadowSecondary: "rgba(39, 72, 112, 0.25)",
    purple: "#8b5cf6",
  },
  borderRadius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    default: "0.8rem",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    paddingSmall: "0.8rem",
    paddingMedium: "1.2rem",
    paddingLarge: "1.6rem",
    paddingXLarge: "2.4rem",
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
    main: "'Arial', sans-serif",
  },
  fontSize: {
    title: "2rem",
    subtitle: "1.5rem",
    small: "1rem",
    medium: "1.75rem",
    large: "2rem",
    xlarge: "2.4rem",
    body: "1.25rem",
    input: "1.75rem",
    label: "1.75rem",
    button: "1.4rem",
  },
  fontWeight: {
    bold: 700,
  },
  logo: {
    width: "8rem",
    widthSmall: "5rem",
  },
  dark: {
    background: "#030a13",
    text: "#f0f4f8",
    primary: "#274870",
    secondary: "#091f3a",
    accent: "#3f5d80",
    accentHover: "#274870",
    shadow: "rgba(255, 255, 255, 0.2)",
  },
};

// Helper function to convert hex to Tailwind-compatible inline styles
export const getColorStyle = (colorKey) => {
  return {
    backgroundColor: theme.colors[colorKey],
  };
};

// Tailwind class mappings for your theme
// These build Tailwind classes that reference your custom colors
export const tailwindTheme = {
  colors: {
    primary: {
      base: "bg-[#091f3a] text-white",
      hover: "hover:bg-[#274870]",
      focus: "focus:ring-[#091f3a]",
      border: "border-[#091f3a]",
      text: "text-[#091f3a]",
    },
    secondary: {
      base: "bg-[#274870] text-white",
      hover: "hover:bg-[#091f3a]",
      focus: "focus:ring-[#274870]",
      border: "border-[#274870]",
      text: "text-[#274870]",
    },
    accent: {
      base: "bg-[#fdd835] text-[#091f3a]",
      hover: "hover:bg-[#274870] hover:text-white",
      focus: "focus:ring-[#fdd835]",
      border: "border-[#fdd835]",
      text: "text-[#fdd835]",
    },
    danger: {
      base: "bg-[#ef4444] text-white",
      hover: "hover:bg-[#dc2626]",
      focus: "focus:ring-[#ef4444]",
      border: "border-[#ef4444]",
      text: "text-[#ef4444]",
    },
    success: {
      base: "bg-[#10b981] text-white",
      hover: "hover:bg-[#059669]",
      focus: "focus:ring-[#10b981]",
      border: "border-[#10b981]",
      text: "text-[#10b981]",
    },
    neutral: {
      base: "bg-white text-[#1a202c] border border-[#6f85a0]",
      hover: "hover:bg-[#f8fafc]",
      focus: "focus:ring-[#6f85a0]",
      border: "border-[#6f85a0]",
      text: "text-[#1a202c]",
    },
    ghost: {
      base: "bg-transparent text-[#577190]",
      hover: "hover:bg-[#f8fafc]",
      focus: "focus:ring-[#6f85a0]",
      border: "border-transparent",
      text: "text-[#577190]",
    },
    link: {
      base: "bg-transparent text-[#091f3a]",
      hover: "hover:text-[#274870] hover:underline",
      focus: "focus:ring-[#091f3a]",
      border: "border-transparent",
      text: "text-[#091f3a]",
    },
  },

  sizes: {
    xs: {
      padding: "px-2 py-1",
      text: "text-[1rem]",
    },
    sm: {
      padding: "px-3 py-1.5",
      text: "text-[1rem]",
    },
    md: {
      padding: "px-4 py-2",
      text: "text-[1.25rem]",
    },
    lg: {
      padding: "px-6 py-3",
      text: "text-[1.75rem]",
    },
  },

  rounded: {
    none: "rounded-none",
    sm: "rounded-[6px]",
    md: "rounded-[12px]",
    lg: "rounded-[20px]",
  },

  shadow: {
    none: "",
    sm: "shadow-sm",
    md: "shadow-[0_4px_6px_rgba(0,0,0,0.2)]",
    lg: "shadow-[0_10px_15px_rgba(0,0,0,0.2)]",
  },

  transitions: {
    base: "transition-all duration-200 ease-in-out",
    fast: "transition-all duration-150 ease-in-out",
    slow: "transition-all duration-300 ease-in-out",
  },

  focus: {
    ring: "focus:ring-2 focus:ring-offset-2",
    outline: "focus:outline-none",
  },
};
