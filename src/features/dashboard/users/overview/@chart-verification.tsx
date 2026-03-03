"use client"

import { Pie, PieChart, Cell } from "recharts"
import { ChartCard, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/molecules/chart-card"

const COLORS = ["hsl(142, 71%, 45%)", "hsl(0, 84%, 60%)"]

const chartConfig = {
    verified: { label: "Verified", color: COLORS[0] },
    unverified: { label: "Unverified", color: COLORS[1] },
} satisfies ChartConfig

export function UserVerificationChart({ verified, unverified }: { verified: number; unverified: number }) {
    const data = [
        { name: "Verified", value: verified },
        { name: "Unverified", value: unverified },
    ]

    return (
        <ChartCard title="Verification Status" description="Email verification breakdown" config={chartConfig}>
            <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {data.map((entry, i) => (
                        <Cell key={entry.name} fill={COLORS[i]} />
                    ))}
                </Pie>
            </PieChart>
        </ChartCard>
    )
}
