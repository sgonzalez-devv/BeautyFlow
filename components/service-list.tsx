"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Edit, MoreHorizontal, Search, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "1",
    name: "Facial Treatment",
    duration: "60 min",
    price: 120,
    description: "Deep cleansing facial with premium products tailored to your skin type.",
    category: "Facial",
  },
  {
    id: "2",
    name: "Lash Extensions",
    duration: "90 min",
    price: 150,
    description: "Full set of premium lash extensions for a glamorous look.",
    category: "Lashes",
  },
  {
    id: "3",
    name: "Brow Lamination",
    duration: "45 min",
    price: 80,
    description: "Restructure your brow hairs to keep them in the desired shape.",
    category: "Brows",
  },
  {
    id: "4",
    name: "Massage",
    duration: "60 min",
    price: 100,
    description: "Relaxing full-body massage to relieve tension and stress.",
    category: "Body",
  },
  {
    id: "5",
    name: "Makeup Application",
    duration: "75 min",
    price: 90,
    description: "Professional makeup application for any occasion.",
    category: "Makeup",
  },
  {
    id: "6",
    name: "Waxing",
    duration: "30 min",
    price: 50,
    description: "Hair removal using premium wax for smooth results.",
    category: "Body",
  },
  {
    id: "7",
    name: "Eyebrow Micropigmentation",
    duration: "120 min",
    price: 250,
    description: "Semi-permanent eyebrow enhancement for defined brows.",
    category: "Brows",
  },
  {
    id: "8",
    name: "Lip Micropigmentation",
    duration: "90 min",
    price: 200,
    description: "Semi-permanent lip color enhancement for a natural look.",
    category: "Micropigmentation",
  },
]

export function ServiceList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search services..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <Badge variant="outline" className="mt-1">
                      {service.category}
                    </Badge>
                  </div>
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
                        Edit Service
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Service
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{service.description}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-medium">${service.price}</div>
                  <div className="text-sm text-muted-foreground">{service.duration}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

