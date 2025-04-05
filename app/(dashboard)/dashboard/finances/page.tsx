"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Plus } from "lucide-react"
import { FinancialOverview } from "@/components/financial-overview"
import { ExpenseList } from "@/components/expense-list"
import { RevenueByService } from "@/components/revenue-by-service"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function FinancesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("finances")}</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            {t("export")}
          </Button>
          <Button asChild>
            <Link href="/dashboard/finances/new">
              <Plus className="mr-2 h-4 w-4" />
              {t("newTransaction")}
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
          <TabsTrigger value="income">{t("income")}</TabsTrigger>
          <TabsTrigger value="expenses">{t("expense")}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t("totalRevenue")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$15,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t("totalExpenses")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,567.32</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t("netProfit")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$10,664.57</div>
                <p className="text-xs text-muted-foreground">+27.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t("profitMargin")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">70.1%</div>
                <p className="text-xs text-muted-foreground">+3.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>{t("financialOverview")}</CardTitle>
                <CardDescription>Monthly income and expenses for the current year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <FinancialOverview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>{t("revenueByService")}</CardTitle>
                <CardDescription>Breakdown of revenue by service category</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueByService />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("incomeTransactions")}</CardTitle>
              <CardDescription>View all income transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ExpenseList type="income" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("expenseTransactions")}</CardTitle>
              <CardDescription>View all expense transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ExpenseList type="expense" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

