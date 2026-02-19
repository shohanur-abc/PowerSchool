'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

// ============= MAIN COMPONENT =============
export default function PerformanceSummary({
    title,
    description,
    data,
}: IPerformanceSummary) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <PerformanceBarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const PerformanceBarChart = ({ data }: { data: IClassPerformance[] }) => (
    <ChartContainer config={chartConfig} className="h-80 w-full">
        <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
                dataKey="className"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
                dataKey="pass"
                fill="var(--color-pass)"
                radius={[4, 4, 0, 0]}
                stackId="stack"
            />
            <Bar
                dataKey="distinction"
                fill="var(--color-distinction)"
                radius={[4, 4, 0, 0]}
                stackId="stack"
            />
            <Bar
                dataKey="fail"
                fill="var(--color-fail)"
                radius={[4, 4, 0, 0]}
                stackId="stack"
            />
        </BarChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    pass: {
        label: 'Pass',
        color: 'hsl(var(--chart-1))',
    },
    distinction: {
        label: 'Distinction',
        color: 'hsl(var(--chart-3))',
    },
    fail: {
        label: 'Fail',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IClassPerformance {
    className: string;
    pass: number;
    distinction: number;
    fail: number;
}

interface IPerformanceSummary {
    title: string;
    description?: string;
    data: IClassPerformance[];
}
