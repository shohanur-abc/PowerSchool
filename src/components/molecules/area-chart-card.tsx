"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export const AreaChartCard = ({ title, description, data, config, dataKeys, xAxisKey = 'name', gradient = true, stacked, className, classNames: cns }: AreaChartCardProps) => (
    <Card className={cn("@container", className)}>
        {(title || description) && (
            <CardHeader className={cns?.header}>
                {title && <CardTitle className={cns?.title}>{title}</CardTitle>}
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </CardHeader>
        )}
        <CardContent className={cns?.content}>
            <ChartContainer config={config} className={cn("h-[250px] w-full", cns?.chart)}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} fontSize={12} />
                    <YAxis tickLine={false} axisLine={false} fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {dataKeys.map((key) => (
                        <Area
                            key={key}
                            type="monotone"
                            dataKey={key}
                            stackId={stacked ? '1' : undefined}
                            fill={`var(--color-${key})`}
                            stroke={`var(--color-${key})`}
                            fillOpacity={gradient ? 0.3 : 0.1}
                        />
                    ))}
                </AreaChart>
            </ChartContainer>
        </CardContent>
    </Card>
);


// ============= TYPES =============
interface AreaChartCardProps {
    title?: string;
    description?: string;
    data: Record<string, unknown>[];
    config: Record<string, { label: string; color: string }>;
    dataKeys: string[];
    xAxisKey?: string;
    gradient?: boolean;
    stacked?: boolean;
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        description?: string;
        content?: string;
        chart?: string;
    };
}
