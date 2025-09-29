"use client";

import { AuthProvider } from "./AuthContext";
import ClientProviders from "./ClientProviders";

// This is a client component
// import { FilterProvider } from "@/providers/FilterProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import React from "react";

// const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <AuthProvider>
      <ClientProviders>{children}</ClientProviders>
    </AuthProvider>

    // <QueryClientProvider client={queryClient}>
    //   <FilterProvider>
    // <ReactQueryDevtools initialIsOpen={false} />
    //   </FilterProvider>
    // </QueryClientProvider>
  );
}
