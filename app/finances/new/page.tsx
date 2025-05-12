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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

const categories = {
  income: ["Service", "Product Sale", "Gift Card", "Other Income"],
  expense: ["Supplies", "Rent", "Utilities", "Marketing", "Insurance", "Salary", "Equipment", "Other Expense"],
}

export default function NewTransactionPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const [date, setDate] = useState<Date>()
  const [transactionType, setTransactionType] = useState<"income" | "expense">("income")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would save the transaction to your database
    setTimeout(() => {
      router.push("/dashboard/finances")
    }, 1000)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard/finances">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">{t("newTransaction")}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>{t("transactionDetails")}</CardTitle>
            <CardDescription>{t("recordNewTransaction")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>{t("transactionType")}</Label>
              <RadioGroup
                defaultValue="income"
                className="flex gap-4"
                onValueChange={(value) => setTransactionType(value as "income" | "expense")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="income" id="income" />
                  <Label htmlFor="income" className="cursor-pointer">
                    {t("income")}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expense" id="expense" />
                  <Label htmlFor="expense" className="cursor-pointer">
                    {t("expense")}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">{t("description")}</Label>
              <Input id="description" placeholder="Enter transaction description" required />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="amount">{t("amount")} ($)</Label>
                <Input id="amount" type="number" min="0" step="0.01" placeholder="0.00" required />
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
              <div className="space-y-2">
                <Label htmlFor="category">{t("category")}</Label>
                <Select required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories[transactionType].map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">{t("notes")} (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Add any additional notes about this transaction"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/dashboard/finances">{t("cancel")}</Link>
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

