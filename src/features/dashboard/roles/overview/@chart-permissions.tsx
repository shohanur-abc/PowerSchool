"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts"
import { ChartCard, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/molecules/chart-card"

const ROLE_COLORS: Record<string, string> = {
    Administrator: "hsl(0, 84%, 60%)",
    Principal: "hsl(45, 93%, 47%)",
    Teacher: "hsl(221, 83%, 53%)",
    Student: "hsl(142, 71%, 45%)",
    Parent: "hsl(280, 67%, 51%)",
}

const chartConfig = {
    permissions: { label: "Permissions", color: "var(--primary)" },
} satisfies ChartConfig

const data = [
    { role: "Administrator", permissions: 36 },
    { role: "Principal", permissions: 28 },
    { role: "Teacher", permissions: 18 },
    { role: "Student", permissions: 8 },
    { role: "Parent", permissions: 6 },
]

export function RolePermissionsChart() {
    return (
        <ChartCard title="Permissions by Role" description="Number of granted permissions per role" config={chartConfig}>
            <BarChart data={data} className="-ml-5">
                <CartesianGrid vertical={false} />
                <XAxis dataKey="role" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="permissions" radius={[4, 4, 0, 0]}>
                    {data.map((entry) => (
                        <Cell key={entry.role} fill={ROLE_COLORS[entry.role] ?? "var(--primary)"} />
                    ))}
                </Bar>
            </BarChart>
        </ChartCard>
    )
}
