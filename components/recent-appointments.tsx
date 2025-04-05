"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Clock, X } from "lucide-react"

const appointments = [
  {
    id: "1",
    client: "Sophia Anderson",
    service: "Facial Treatment",
    time: "10:00 AM",
    duration: "60 min",
    deposit: true,
    status: "confirmed",
  },
  {
    id: "2",
    client: "Emma Johnson",
    service: "Lash Extensions",
    time: "11:30 AM",
    duration: "90 min",
    deposit: true,
    status: "confirmed",
  },
  {
    id: "3",
    client: "Olivia Williams",
    service: "Brow Lamination",
    time: "1:30 PM",
    duration: "45 min",
    deposit: false,
    status: "pending",
  },
  {
    id: "4",
    client: "Ava Brown",
    service: "Massage",
    time: "3:00 PM",
    duration: "60 min",
    deposit: true,
    status: "confirmed",
  },
  {
    id: "5",
    client: "Isabella Davis",
    service: "Makeup Application",
    time: "4:30 PM",
    duration: "75 min",
    deposit: false,
    status: "pending",
  },
]

export function RecentAppointments() {
  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <Card key={appointment.id} className="p-4">
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback className="bg-primary/10">
                  {appointment.client
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{appointment.client}</div>
                <div className="text-sm text-muted-foreground">{appointment.service}</div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{appointment.time}</span>
                  <span className="text-muted-foreground">({appointment.duration})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={appointment.deposit ? "default" : "outline"}>
                    {appointment.deposit ? "Deposit Paid" : "No Deposit"}
                  </Badge>
                  <Badge variant={appointment.status === "confirmed" ? "secondary" : "outline"}>
                    {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Cancel</span>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Check className="h-4 w-4" />
                <span className="sr-only">Confirm</span>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

