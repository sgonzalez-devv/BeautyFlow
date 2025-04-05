"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, LayoutDashboard, Menu, Scissors, DollarSign, Settings, LogOut, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-context"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const routes = [
    {
      href: "/dashboard",
      label: t("dashboard"),
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/appointments",
      label: t("appointments"),
      icon: Calendar,
      active: pathname.includes("/dashboard/appointments"),
    },
    {
      href: "/dashboard/services",
      label: t("services"),
      icon: Scissors,
      active: pathname.includes("/dashboard/services"),
    },
    {
      href: "/dashboard/finances",
      label: t("finances"),
      icon: DollarSign,
      active: pathname.includes("/dashboard/finances"),
    },
    {
      href: "/dashboard/settings",
      label: t("settings"),
      icon: Settings,
      active: pathname.includes("/dashboard/settings"),
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Beauty Paradise</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

