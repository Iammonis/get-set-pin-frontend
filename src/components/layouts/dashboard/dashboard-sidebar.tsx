import React, { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Typography } from "@/components/ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DashboardHeader from "@/components/layouts/dashboard/dashboard-header";
import { sidebarData } from "@/constants/sidebar";
import { NavGroup } from "@/components/ui/nav-group";
import { FooterOptions } from "@/components/layouts/dashboard/sidebar-footer-options";

interface DashboardSidebarProps {
  children: ReactNode;
  [key: string]: any; // allow spreading additional props
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  children,
  ...props
}) => {
  const { open } = useSidebar();

  return (
    <>
      <Sidebar collapsible="icon" variant="floating" {...props}>
        <SidebarHeader className={open ? "p-4 pb-0" : "pl-2"}>
          {open ? (
            <Tooltip>
              <TooltipTrigger>Get Set Pin</TooltipTrigger>
              <TooltipContent>
                <p>Get Set Pin</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Tooltip>
              <TooltipTrigger>
                <Typography className="text-[12px] font-bold">G S P</Typography>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get Set Pin</p>
              </TooltipContent>
            </Tooltip>
          )}
        </SidebarHeader>

        <SidebarContent>
          <ScrollArea className="h-full">
            {sidebarData.navGroups.map((menu) => (
              <NavGroup key={menu.title} {...menu} />
            ))}
          </ScrollArea>
        </SidebarContent>

        <SidebarFooter>
          <FooterOptions />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset className="border-l">
        <DashboardHeader />
        <div className="p-2 lg:p-4 bg-secondary min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </SidebarInset>
    </>
  );
};

export default DashboardSidebar;
