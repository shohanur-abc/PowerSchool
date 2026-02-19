'use client';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
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
export default function DailyTrend({
    title,
    description,
    data,
}: IDailyTrend) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <TrendLineChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TrendLineChart = ({ data }: { data: IDailyData[] }) => (
    <ChartContainer config={chartConfig} className="h-80 w-full">
        <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
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
            <Line
                dataKey="present"
                type="monotone"
                stroke="var(--color-present)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
            />
            <Line
                dataKey="absent"
                type="monotone"
                stroke="var(--color-absent)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
            />
            <Line
                dataKey="late"
                type="monotone"
                stroke="var(--color-late)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
            />
        </LineChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    present: {
        label: 'Present',
        color: 'hsl(var(--chart-1))',
    },
    absent: {
        label: 'Absent',
        color: 'hsl(var(--chart-2))',
    },
    late: {
        label: 'Late',
        color: 'hsl(var(--chart-3))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IDailyData {
    date: string;
    present: number;
    absent: number;
    late: number;
}

interface IDailyTrend {
    title: string;
    description: string;
    data: IDailyData[];
}
