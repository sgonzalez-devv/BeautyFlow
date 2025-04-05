"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    total: 1800,
  },
  {
    name: "Feb",
    total: 2200,
  },
  {
    name: "Mar",
    total: 2800,
  },
  {
    name: "Apr",
    total: 2400,
  },
  {
    name: "May",
    total: 2900,
  },
  {
    name: "Jun",
    total: 3500,
  },
  {
    name: "Jul",
    total: 3200,
  },
  {
    name: "Aug",
    total: 3800,
  },
  {
    name: "Sep",
    total: 4000,
  },
  {
    name: "Oct",
    total: 3500,
  },
  {
    name: "Nov",
    total: 3900,
  },
  {
    name: "Dec",
    total: 4200,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

