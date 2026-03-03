"use client"

import { Pie, PieChart, Cell } from "recharts"
import { ChartCard, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/molecules/chart-card"

const COLORS = [
    "hsl(142, 71%, 45%)",
    "hsl(221, 83%, 53%)",
    "hsl(45, 93%, 47%)",
    "hsl(0, 84%, 60%)",
]

const chartConfig = {
    View: { label: "View", color: COLORS[0] },
    Create: { label: "Create", color: COLORS[1] },
    Edit: { label: "Edit", color: COLORS[2] },
    Delete: { label: "Delete", color: COLORS[3] },
} satisfies ChartConfig

// Pre-computed from the PERMISSIONS matrix across all roles
const data = [
    { action: "View", count: 29 },
    { action: "Create", count: 22 },
    { action: "Edit", count: 22 },
    { action: "Delete", count: 23 },
]

export function RoleAccessChart() {
    return (
        <ChartCard title="Access Type Distribution" description="Granted permissions by action type" config={chartConfig}>
            <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Pie data={data} dataKey="count" nameKey="action" cx="50%" cy="50%" outerRadius={80} label>
                    {data.map((entry, i) => (
                        <Cell key={entry.action} fill={COLORS[i]} />
                    ))}
                </Pie>
            </PieChart>
        </ChartCard>
    )
}
