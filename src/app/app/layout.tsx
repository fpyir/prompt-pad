"use client";
import { ApplicationShell } from "@/features/application-shell/ApplicationShell";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationShell>{children}</ApplicationShell>
    </QueryClientProvider>
  );
};

export default Layout;
