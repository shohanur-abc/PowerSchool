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
export default function ClassCollectionSummary({
    title,
    description,
    data,
}: IClassCollectionSummary) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <CollectionBarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const CollectionBarChart = ({ data }: { data: IClassData[] }) => (
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
                tickFormatter={formatAxisValue}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
                dataKey="collected"
                stackId="fees"
                fill="var(--color-collected)"
                radius={[0, 0, 4, 4]}
            />
            <Bar
                dataKey="pending"
                stackId="fees"
                fill="var(--color-pending)"
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    </ChartContainer>
);

// ============= HELPERS =============
// TODO: Add drill-down on bar click to view class-specific details
const chartConfig = {
    collected: {
        label: 'Collected',
        color: 'hsl(var(--chart-1))',
    },
    pending: {
        label: 'Pending',
        color: 'hsl(var(--chart-3))',
    },
} satisfies ChartConfig;

const formatAxisValue = (value: number) => {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value}`;
};

// ============= TYPES =============
interface IClassData {
    className: string;
    collected: number;
    pending: number;
}

interface IClassCollectionSummary {
    title: string;
    description: string;
    data: IClassData[];
}
