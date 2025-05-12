"use client";

import * as React from "react";
import {
  Snowflake,
  LayoutDashboard,
  Calendar,
  Scissors,
  CreditCard,
  Settings,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Calendar,
    },
    {
      title: "Services",
      url: "/services",
      icon: Scissors,
    },
    {
      title: "Finances",
      url: "/finances",
      icon: CreditCard,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <section>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                  <Snowflake className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-md">Beaty Paradise</span>
                  <span className="text-xs">Salon Management</span>
                </div>
              </section>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
