import {
  Bell,
  HelpCircle,
  Palette,
  Settings,
  Sparkles,
  User,
  WandSparkles,
  Wrench,
  Home,
  Calendar,
  BarChart3,
  Upload,
  File,
  Database,
} from "lucide-react";
import { ReactNode } from "react";

interface SidebarItem {
  title: string;
  icon?: ReactNode;
  href?: string;
  items?: SidebarItem[]; // recursive nesting
}

interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

interface SidebarData {
  navGroups: SidebarGroup[];
}

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          href: "/dashboard",
          icon: <Home className="text-current-font-size" />,
        },
        {
          title: "Calendar",
          href: "/calendar",
          icon: <Calendar className="text-current-font-size" />,
        },
        {
          title: "Analytics",
          href: "/analytics",
          icon: <BarChart3 className="text-current-font-size" />,
        },
        {
          title: "AI Pin",
          href: "/ai-pin",
          icon: <WandSparkles className="text-current-font-size" />,
        },
        {
          title: "Upload Pins",
          href: "/upload-pins",
          icon: <Upload className="text-current-font-size" />,
        },
        {
          title: "Pages",
          href: "/pages",
          icon: <File className="text-current-font-size" />,
        },
        {
          title: "Playground",
          href: "/playground",
          icon: <Sparkles className="text-current-font-size" />,
        },
        {
          title: "Storage",
          href: "/storage",
          icon: <Database className="text-current-font-size" />,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: <Settings />,
          items: [
            {
              title: "Profile",
              icon: <User />,
              href: "/settings/user-profile",
            },
            {
              title: "Account",
              icon: <Wrench size={18} />,
              href: "/settings/account",
            },
            {
              title: "Appearance",
              icon: <Palette size={18} />,
              href: "/settings/appearance",
            },
            {
              title: "Notifications",
              icon: <Bell size={18} />,
              href: "/settings/notifications-preferences",
            },
          ],
        },
        {
          title: "Help Center",
          href: "/help-center",
          icon: <HelpCircle />,
        },
      ],
    },
  ],
};
