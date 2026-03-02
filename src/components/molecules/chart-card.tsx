"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

// ============= COMPONENT =============
export function ChartCard({ title, description, config, className, children }: ChartCardProps) {
    return (
        <Card className={cn("@container/card", className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer config={config} className="aspect-auto h-[250px] w-full">
                    {children}
                </ChartContainer>
            </CardContent>
        </Card>
    )
}


// ============= RE-EXPORTS =============
export { ChartTooltip, ChartTooltipContent }
export type { ChartConfig }


// ============= TYPES =============
interface ChartCardProps {
    title: string
    description?: string
    config: ChartConfig
    className?: string
    children: React.ReactElement
}
