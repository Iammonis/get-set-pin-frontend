// Stick to a consistent naming convention. In your code:
// Constants: UPPER_SNAKE_CASE → e.g., DEFAULT_THEME
// Variables: camelCase → e.g., sidebarData, protectedRoutes
// Types/Interfaces: PascalCase → e.g., NavItem, NavGroup

import { sidebarData } from "@/constants/sidebar";

// Interfaces
interface NavItem {
  href?: string;
  items?: NavItem[];
}

interface NavGroup {
  items: NavItem[];
}

// Helper function to recursively extract hrefs
function extractUrls(items: NavItem[]): string[] {
  return items.flatMap((item) => {
    if (item.href) {
      return [item.href];
    }
    if (item.items) {
      return extractUrls(item.items); // Recursively extract nested Urls
    }
    return [];
  });
}

export const defaultDashboardUrl = "/dashboard";

export const protectedUrls: string[] = [
  defaultDashboardUrl,
  ...sidebarData.navGroups.flatMap((group: NavGroup) =>
    extractUrls(group.items)
  ),
];

export const publicUrls: string[] = ["/", "/pricing", "/features"];

export const authUrls: string[] = ["/login", "/register"];
