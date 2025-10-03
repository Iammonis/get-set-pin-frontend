"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup as UISidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

interface SidebarItem {
  title: string;
  href?: string;
  icon?: ReactNode;
  badge?: string;
  items?: SidebarItem[];
}

interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

interface NavGroupProps {
  title: string;
  items: SidebarItem[];
}

interface NavItem {
  href?: string;
  items?: NavItem[];
}

export function checkIsActive(
  href: string | undefined,
  item: NavItem | undefined,
  mainNav: boolean = false
): boolean {
  if (!href || !item) return false;

  return (
    href === item.href || // /endpoint?search=param
    href.split("?")[0] === item.href || // endpoint
    !!item?.items?.filter((i) => i.href === href).length || // if child nav is active
    (mainNav &&
      href.split("/")[1] !== "" &&
      href.split("/")[1] === item?.href?.split("/")[1])
  );
}

export function NavGroup({ title, items }: NavGroupProps) {
  const { state } = useSidebar();
  const href = usePathname();

  return (
    <UISidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu className={`${state === "collapsed" ? "gap-2" : ""}`}>
        {items.map((item) => {
          const key = `${item.title}-${item.href || "no-link"}`;

          if (!item.items)
            return <SidebarMenuLink key={key} item={item} href={href} />;

          if (state === "collapsed")
            return (
              <SidebarMenuCollapsedDropdown key={key} item={item} href={href} />
            );

          return <SidebarMenuCollapsible key={key} item={item} href={href} />;
        })}
      </SidebarMenu>
    </UISidebarGroup>
  );
}

// Badge
const NavBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge className="text-xs rounded-full px-1 py-0">{children}</Badge>
);

// SidebarMenuLink
const SidebarMenuLink = ({
  item,
  href,
}: {
  item: SidebarItem;
  href: string;
}) => {
  const { setOpenMobile, state } = useSidebar();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
      >
        <Link
          className={`h-full flex items-center${state === "collapsed" ? " border" : ""}`}
          href={item.href ?? "#"}
          onClick={() => setOpenMobile(false)}
        >
          {item.icon}
          <Typography type="span">{item.title}</Typography>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

// SidebarMenuCollapsible
const SidebarMenuCollapsible = ({
  item,
  href,
}: {
  item: SidebarItem;
  href: string;
}) => {
  const { setOpenMobile } = useSidebar();

  return (
    <Collapsible
      asChild
      defaultOpen={checkIsActive(href, item, true)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger
          asChild
          className="hover:cursor-pointer h-full flex items-center"
        >
          <SidebarMenuButton tooltip={item.title}>
            {item.icon}
            <Typography type="span">{item.title}</Typography>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  isActive={checkIsActive(href, subItem)}
                >
                  <Link
                    href={subItem.href ?? "#"}
                    onClick={() => setOpenMobile(false)}
                    className="flex items-center"
                  >
                    {subItem.icon}
                    <Typography type="span">{subItem.title}</Typography>
                    {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

// SidebarMenuCollapsedDropdown
const SidebarMenuCollapsedDropdown = ({
  item,
  href,
}: {
  item: SidebarItem;
  href: string;
}) => {
  const { state } = useSidebar();
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
            className={`${state === "collapsed" ? " border" : ""}`}
          >
            {item.icon}
            <Typography type="span">{item.title}</Typography>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={4}>
          <DropdownMenuLabel>
            <Typography type="span">{item.title}</Typography>
            {item.badge ? `(${item.badge})` : ""}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.items?.map((sub) => (
            <DropdownMenuItem
              key={`${sub.title}-${sub.href || "no-link"}`}
              asChild
            >
              <Link
                href={sub.href ?? "#"}
                className={`${checkIsActive(href, sub) ? "bg-secondary" : ""}`}
              >
                {sub.icon}
                <span className="max-w-52 text-wrap text-current-font-size">
                  {sub.title}
                </span>
                {sub.badge && (
                  <span className="ml-auto text-xs">{sub.badge}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};
