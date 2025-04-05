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

const transactions = [
  {
    id: "1",
    type: "income",
    description: "Facial Treatment - Sophia Anderson",
    amount: 120,
    date: "2025-02-26",
    category: "Service",
  },
  {
    id: "2",
    type: "income",
    description: "Lash Extensions - Emma Johnson",
    amount: 150,
    date: "2025-02-26",
    category: "Service",
  },
  {
    id: "3",
    type: "expense",
    description: "Facial Products Restock",
    amount: 250,
    date: "2025-02-25",
    category: "Supplies",
  },
  {
    id: "4",
    type: "income",
    description: "Brow Lamination - Olivia Williams",
    amount: 80,
    date: "2025-02-25",
    category: "Service",
  },
  {
    id: "5",
    type: "expense",
    description: "Rent Payment",
    amount: 1200,
    date: "2025-02-01",
    category: "Rent",
  },
  {
    id: "6",
    type: "expense",
    description: "Utilities",
    amount: 180,
    date: "2025-02-05",
    category: "Utilities",
  },
  {
    id: "7",
    type: "income",
    description: "Massage - Ava Brown",
    amount: 100,
    date: "2025-02-24",
    category: "Service",
  },
  {
    id: "8",
    type: "expense",
    description: "Marketing - Social Media Ads",
    amount: 150,
    date: "2025-02-15",
    category: "Marketing",
  },
  {
    id: "9",
    type: "expense",
    description: "Insurance Payment",
    amount: 200,
    date: "2025-02-10",
    category: "Insurance",
  },
  {
    id: "10",
    type: "income",
    description: "Makeup Application - Isabella Davis",
    amount: 90,
    date: "2025-02-23",
    category: "Service",
  },
]

export function ExpenseList({ type = "all" }: { type?: "all" | "income" | "expense" }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesType = type === "all" || transaction.type === type
    const matchesSearch = transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || transaction.category === categoryFilter

    return matchesType && matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(transactions.map((t) => t.category)))

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all" onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredTransactions.map((transaction) => (
          <Card key={transaction.id} className="p-4">
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4">
                <Avatar className="hidden sm:flex h-9 w-9">
                  <AvatarFallback className={transaction.type === "income" ? "bg-primary/10" : "bg-destructive/10"}>
                    {transaction.type === "income" ? "+" : "-"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">{transaction.description}</div>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span>{new Date(transaction.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{transaction.category}</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-end">
                <div
                  className={`text-lg font-bold ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
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
                      Edit Transaction
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" />
                      Delete Transaction
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

