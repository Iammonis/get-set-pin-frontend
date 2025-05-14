"use client";

import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layouts/dashboard/dashboard-sidebar";
import { getCookie } from "cookies-next/client";

// Define props type
interface DashboardLayoutProps {
  children: ReactNode;
  [key: string]: any; // for spreading additional props
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children, ...rest } = props;
  const defaultOpen = getCookie("sidebar_state") !== "false";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar {...rest}>{children}</DashboardSidebar>
    </SidebarProvider>
  );
};

export default DashboardLayout;
