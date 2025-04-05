"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, MoreHorizontal, Search, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const appointments = [
  {
    id: "1",
    client: "Sophia Anderson",
    service: "Facial Treatment",
    date: "2025-02-26",
    time: "10:00 AM",
    duration: "60 min",
    deposit: true,
    status: "confirmed",
    phone: "+1 (555) 123-4567",
    notes: "First-time client, sensitive skin",
  },
  {
    id: "2",
    client: "Emma Johnson",
    service: "Lash Extensions",
    date: "2025-02-26",
    time: "11:30 AM",
    duration: "90 min",
    deposit: true,
    status: "confirmed",
    phone: "+1 (555) 234-5678",
    notes: "Prefers classic lashes",
  },
  {
    id: "3",
    client: "Olivia Williams",
    service: "Brow Lamination",
    date: "2025-02-26",
    time: "1:30 PM",
    duration: "45 min",
    deposit: false,
    status: "pending",
    phone: "+1 (555) 345-6789",
    notes: "",
  },
  {
    id: "4",
    client: "Ava Brown",
    service: "Massage",
    date: "2025-02-27",
    time: "3:00 PM",
    duration: "60 min",
    deposit: true,
    status: "confirmed",
    phone: "+1 (555) 456-7890",
    notes: "Medium pressure preferred",
  },
  {
    id: "5",
    client: "Isabella Davis",
    service: "Makeup Application",
    date: "2025-02-27",
    time: "4:30 PM",
    duration: "75 min",
    deposit: false,
    status: "pending",
    phone: "+1 (555) 567-8901",
    notes: "Wedding guest makeup",
  },
  {
    id: "6",
    client: "Mia Miller",
    service: "Waxing",
    date: "2025-02-28",
    time: "9:00 AM",
    duration: "30 min",
    deposit: true,
    status: "confirmed",
    phone: "+1 (555) 678-9012",
    notes: "",
  },
  {
    id: "7",
    client: "Charlotte Wilson",
    service: "Eyebrow Micropigmentation",
    date: "2025-02-28",
    time: "10:00 AM",
    duration: "120 min",
    deposit: true,
    status: "confirmed",
    phone: "+1 (555) 789-0123",
    notes: "Follow-up session",
  },
]

export function AppointmentList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.service.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search appointments..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all" onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
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
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span>{new Date(appointment.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{appointment.time}</span>
                    <span className="text-muted-foreground">({appointment.duration})</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{appointment.phone}</div>
                  {appointment.notes && (
                    <div className="text-sm italic text-muted-foreground mt-1">"{appointment.notes}"</div>
                  )}
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Appointment
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" />
                      Cancel Appointment
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

