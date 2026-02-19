'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
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
export default function CollectionTrend({
    title,
    description,
    data,
}: ICollectionTrend) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <TrendAreaChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TrendAreaChart = ({ data }: { data: ICollectionData[] }) => (
    <ChartContainer config={chartConfig} className="h-80 w-full">
        <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
            <defs>
                <linearGradient id="fillCollected" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="var(--color-collected)"
                        stopOpacity={0.3}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-collected)"
                        stopOpacity={0.05}
                    />
                </linearGradient>
                <linearGradient id="fillExpected" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="var(--color-expected)"
                        stopOpacity={0.2}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-expected)"
                        stopOpacity={0.02}
                    />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
                dataKey="month"
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
                tickFormatter={formatAxisValue}
            />
            <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
                dataKey="expected"
                type="monotone"
                stroke="var(--color-expected)"
                strokeWidth={2}
                fill="url(#fillExpected)"
            />
            <Area
                dataKey="collected"
                type="monotone"
                stroke="var(--color-collected)"
                strokeWidth={2}
                fill="url(#fillCollected)"
            />
        </AreaChart>
    </ChartContainer>
);

// ============= HELPERS =============
// TODO: Support configurable chart colors from theme
const chartConfig = {
    collected: {
        label: 'Collected',
        color: 'hsl(var(--chart-1))',
    },
    expected: {
        label: 'Expected',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

const formatAxisValue = (value: number) => {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value}`;
};

// ============= TYPES =============
interface ICollectionData {
    month: string;
    collected: number;
    expected: number;
}

interface ICollectionTrend {
    title: string;
    description: string;
    data: ICollectionData[];
}
