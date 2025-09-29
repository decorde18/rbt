"use client";

import { ThemeProvider } from "styled-components";
// import { AuthProvider } from "@/contexts/AuthContext";
// import { DataProvider } from "@/contexts/DataContext";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/GlobalStyles";

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
      {/* <AuthProvider> */}
      {/* <DataProvider></DataProvider> */}
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
