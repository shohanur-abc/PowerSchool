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
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

// ============= MAIN COMPONENT =============
export default function UserGrowth({
    title,
    description,
    data,
}: IUserGrowth) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <GrowthChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const GrowthChart = ({ data }: { data: IUserGrowthData[] }) => (
    <ChartContainer config={chartConfig} className="h-75 w-full">
        <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
            <defs>
                <linearGradient id="fillNewUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="5%"
                        stopColor="var(--color-newUsers)"
                        stopOpacity={0.8}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-newUsers)"
                        stopOpacity={0.1}
                    />
                </linearGradient>
                <linearGradient
                    id="fillTotalUsers"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="5%"
                        stopColor="var(--color-totalUsers)"
                        stopOpacity={0.8}
                    />
                    <stop
                        offset="95%"
                        stopColor="var(--color-totalUsers)"
                        stopOpacity={0.1}
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
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <Area
                dataKey="totalUsers"
                type="monotone"
                fill="url(#fillTotalUsers)"
                stroke="var(--color-totalUsers)"
                strokeWidth={2}
            />
            <Area
                dataKey="newUsers"
                type="monotone"
                fill="url(#fillNewUsers)"
                stroke="var(--color-newUsers)"
                strokeWidth={2}
            />
        </AreaChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    newUsers: {
        label: 'New Users',
        color: 'hsl(var(--chart-1))',
    },
    totalUsers: {
        label: 'Total Users',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IUserGrowthData {
    date: string;
    newUsers: number;
    totalUsers: number;
}

interface IUserGrowth {
    title: string;
    description?: string;
    data: IUserGrowthData[];
}
