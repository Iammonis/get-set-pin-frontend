import {
  Home,
  Calendar,
  BarChart3,
  WandSparkles,
  Settings,
  HelpCircle,
  Bookmark,
  PlusSquare,
  Link,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
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
          title: "Home",
          href: "/dashboard",
          icon: <Home className="text-current-font-size" />,
        },
        {
          title: "My Pins",
          href: "/dashboard/pins",
          icon: <Bookmark className="text-current-font-size" />, // Using Bookmark for "Pins"
        },
        {
          title: "My Boards",
          href: "/dashboard/boards",
          icon: <BarChart3 className="text-current-font-size" />, // Or use <LayoutGrid /> for boards
        },
        {
          title: "Create/Schedule Pin",
          href: "/dashboard/create-pin",
          icon: <PlusSquare className="text-current-font-size" />, // Or <WandSparkles /> for "Create"
        },
        {
          title: "Connect Pinterest Accounts",
          href: "/dashboard/connect-accounts",
          icon: <Link className="text-current-font-size" />, // Using Link for "Connect"
        },
        {
          title: "Settings",
          href: "/dashboard/settings",
          icon: <Settings className="text-current-font-size" />,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Help Center",
          href: "/dashboard/help-center",
          icon: <HelpCircle className="text-current-font-size" />,
        },
      ],
    },
  ],
};
