"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartCard, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/molecules/chart-card"

const chartConfig = {
    count: { label: "Registrations", color: "var(--primary)" },
} satisfies ChartConfig

export function UserRegistrationTrendChart({ data }: { data: { month: string; count: number }[] }) {
    return (
        <ChartCard title="Registration Trend" description="Monthly new user registrations" config={chartConfig}>
            <AreaChart data={data} className="-ml-5">
                <defs>
                    <linearGradient id="userTrendFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                    type="monotone"
                    dataKey="count"
                    stroke="var(--primary)"
                    fill="url(#userTrendFill)"
                    strokeWidth={2}
                />
            </AreaChart>
        </ChartCard>
    )
}
