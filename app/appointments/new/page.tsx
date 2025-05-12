"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

const services = [
  { id: "1", name: "Facial Treatment", duration: "60 min", price: "$120" },
  { id: "2", name: "Lash Extensions", duration: "90 min", price: "$150" },
  { id: "3", name: "Brow Lamination", duration: "45 min", price: "$80" },
  { id: "4", name: "Massage", duration: "60 min", price: "$100" },
  { id: "5", name: "Makeup Application", duration: "75 min", price: "$90" },
  { id: "6", name: "Waxing", duration: "30 min", price: "$50" },
  { id: "7", name: "Eyebrow Micropigmentation", duration: "120 min", price: "$250" },
  { id: "8", name: "Lip Micropigmentation", duration: "90 min", price: "$200" },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
]

export default function NewAppointmentPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [date, setDate] = useState<Date>()
  const [depositPaid, setDepositPaid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would save the appointment to your database
    setTimeout(() => {
      router.push("/dashboard/appointments")
    }, 1000)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard/appointments">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">{t("newAppointment")}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>{t("appointmentDetails")}</CardTitle>
            <CardDescription>{t("createNewAppointment")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="client-name">{t("clientName")}</Label>
                <Input id="client-name" placeholder="Enter client name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-phone">{t("phoneNumber")}</Label>
                <Input id="client-phone" placeholder="Enter phone number" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="service">{t("service")}</Label>
                <Select required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} ({service.duration}) - {service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t("date")}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="time">{t("time")}</Label>
                <Select required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="deposit">{t("depositPaid")}</Label>
                  <Switch id="deposit" checked={depositPaid} onCheckedChange={setDepositPaid} />
                </div>
                <p className="text-sm text-muted-foreground">Toggle if the client has paid a deposit</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">{t("notes")}</Label>
              <Textarea
                id="notes"
                placeholder="Add any special requests or notes about the appointment"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/dashboard/appointments">{t("cancel")}</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : t("create")}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

