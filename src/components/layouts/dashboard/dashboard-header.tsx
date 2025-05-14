import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "../../ui/button";
import { Bell } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "next-themes";

type Props = {};

const DashboardHeader = (props: Props) => {
  const { setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 border-b bg-sidebar h-14">
      <nav className="border-gray-200 px-4 lg:px-1 xl:px-4 py-2 h-full flex items-center">
        <div className="flex gap-2 justify-between items-center w-full mx-auto">
          <div className="flex items-center gap-2">
            <SidebarTrigger
              variant="outline"
              className="scale-125 sm:scale-100"
            />
            <Separator orientation="vertical" className="h-6" />
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher defaultValue="system" onChange={setTheme} />
            <Button variant="secondary">
              <Bell />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
