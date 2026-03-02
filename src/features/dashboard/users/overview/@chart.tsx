"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartCard, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/molecules/chart-card"


export function UserOverviewCharts({ roleCounts }: { roleCounts: { role: string; count: number }[] }) {
    return (
        <ChartCard title="Users by Role" description="Distribution of users across roles" config={roleConfig}>
            <BarChart data={roleCounts} className="-ml-5">
                <CartesianGrid vertical={false} />
                <XAxis dataKey="role" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ChartCard>
    )
}



// ============= ROLE DISTRIBUTION CHART =============
const roleConfig = {
    count: { label: "Users", color: "var(--primary)" },
} satisfies ChartConfig
