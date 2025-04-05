"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { AppointmentList } from "@/components/appointment-list"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function AppointmentsPage() {
  const { t } = useLanguage()

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("appointments")}</h2>
        <Button asChild>
          <Link href="/dashboard/appointments/new">
            <Plus className="mr-2 h-4 w-4" />
            {t("newAppointment")}
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-5">
          <CardHeader>
            <CardTitle>{t("upcomingAppointments")}</CardTitle>
            <CardDescription>{t("viewManageAppointments")}</CardDescription>
          </CardHeader>
          <CardContent>
            <AppointmentList />
          </CardContent>
        </Card>
        <Card className="col-span-7 md:col-span-2">
          <CardHeader>
            <CardTitle>{t("calendar")}</CardTitle>
            <CardDescription>{t("selectDate")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

