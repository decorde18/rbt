import { theme } from "./styles/theme.js";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // if using app router
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background.replace("##", "#"), // fix typo
        surface: theme.colors.surface,
        text: theme.colors.text,
        textLabel: theme.colors.textLabel,
        muted: theme.colors.muted,
        success: theme.colors.success,
        danger: theme.colors.danger,
        border: theme.colors.border,
      },
      borderRadius: {
        sm: theme.borderRadius.sm,
        md: theme.borderRadius.md,
        lg: theme.borderRadius.lg,
      },
      spacing: {
        sm: theme.spacing.sm,
        md: theme.spacing.md,
        lg: theme.spacing.lg,
      },
      fontFamily: {
        body: theme.fonts.body,
        heading: theme.fonts.heading,
        main: theme.fonts.main,
      },
      fontSize: {
        title: theme.fontSize.title,
        subtitle: theme.fontSize.subtitle,
        small: theme.fontSize.small,
        medium: theme.fontSize.medium,
        large: theme.fontSize.large,
        xlarge: theme.fontSize.xlarge,
        body: theme.fontSize.body,
        input: theme.fontSize.input,
        label: theme.fontSize.label,
        button: theme.fontSize.button,
      },
      boxShadow: {
        custom: theme.colors.shadow,
        light: theme.colors.shadowLight,
        primary: theme.colors.shadowPrimary,
        secondary: theme.colors.shadowSecondary,
      },
    },
  },
  plugins: [],
};
