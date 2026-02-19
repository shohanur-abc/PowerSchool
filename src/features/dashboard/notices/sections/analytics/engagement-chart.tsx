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
export default function EngagementChart({
    title,
    description,
    data,
}: IEngagementChart) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <ViewsAreaChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ViewsAreaChart = ({ data }: { data: IDailyView[] }) => (
    <ChartContainer config={chartConfig} className="h-80 w-full">
        <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
            <defs>
                <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="var(--color-views)"
                        stopOpacity={0.3}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-views)"
                        stopOpacity={0.05}
                    />
                </linearGradient>
                <linearGradient
                    id="fillUniqueReaders"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="5%"
                        stopColor="var(--color-uniqueReaders)"
                        stopOpacity={0.3}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-uniqueReaders)"
                        stopOpacity={0.05}
                    />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
                dataKey="date"
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
            <Area
                dataKey="views"
                type="monotone"
                stroke="var(--color-views)"
                strokeWidth={2}
                fill="url(#fillViews)"
            />
            <Area
                dataKey="uniqueReaders"
                type="monotone"
                stroke="var(--color-uniqueReaders)"
                strokeWidth={2}
                fill="url(#fillUniqueReaders)"
            />
        </AreaChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    views: {
        label: 'Total Views',
        color: 'hsl(var(--chart-1))',
    },
    uniqueReaders: {
        label: 'Unique Readers',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IDailyView {
    date: string;
    views: number;
    uniqueReaders: number;
}

interface IEngagementChart {
    title: string;
    description?: string;
    data: IDailyView[];
}
