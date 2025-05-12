"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { ServiceList } from "@/components/service-list"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("services")}</h2>
        <Button asChild>
          <Link href="/dashboard/services/new">
            <Plus className="mr-2 h-4 w-4" />
            {t("newService")}
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{t("serviceManagement")}</CardTitle>
          <CardDescription>{t("viewManageServices")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceList />
        </CardContent>
      </Card>
    </div>
  )
}

