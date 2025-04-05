"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    income: 1800,
    expenses: 400,
  },
  {
    name: "Feb",
    income: 2200,
    expenses: 450,
  },
  {
    name: "Mar",
    income: 2800,
    expenses: 550,
  },
  {
    name: "Apr",
    income: 2400,
    expenses: 500,
  },
  {
    name: "May",
    income: 2900,
    expenses: 600,
  },
  {
    name: "Jun",
    income: 3500,
    expenses: 700,
  },
  {
    name: "Jul",
    income: 3200,
    expenses: 650,
  },
  {
    name: "Aug",
    income: 3800,
    expenses: 750,
  },
  {
    name: "Sep",
    income: 4000,
    expenses: 800,
  },
  {
    name: "Oct",
    income: 3500,
    expenses: 700,
  },
  {
    name: "Nov",
    income: 3900,
    expenses: 750,
  },
  {
    name: "Dec",
    income: 4200,
    expenses: 850,
  },
]

export function FinancialOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, ""]} cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          name="Income"
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="hsl(var(--destructive))"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          name="Expenses"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

