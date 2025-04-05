"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const services = [
  {
    name: "Facial Treatments",
    value: 34,
    icon: "FT",
    color: "bg-primary/10",
  },
  {
    name: "Lash Extensions",
    value: 27,
    icon: "LE",
    color: "bg-secondary/10",
  },
  {
    name: "Massages",
    value: 21,
    icon: "MS",
    color: "bg-accent/10",
  },
  {
    name: "Brow Lamination",
    value: 13,
    icon: "BL",
    color: "bg-primary/10",
  },
  {
    name: "Makeup Application",
    value: 5,
    icon: "MA",
    color: "bg-secondary/10",
  },
]

export function TopServices() {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.name} className="p-0 overflow-hidden border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center p-4">
              <Avatar className="h-9 w-9 mr-4">
                <AvatarFallback className={service.color}>{service.icon}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{service.value}%</p>
                </div>
                <Progress value={service.value} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

