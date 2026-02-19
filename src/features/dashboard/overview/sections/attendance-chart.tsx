'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from '@/components/ui/chart';

// ============= MAIN COMPONENT =============
export default function AttendanceChart({ title, description, data, }: IAttendanceChart) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <AttendanceAreaChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const AttendanceAreaChart = ({ data }: { data: IAttendanceData[] }) => (
    <ChartContainer config={chartConfig} className="h-75 w-full">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="fillPresent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-present)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-present)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillAbsent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-absent)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-absent)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillLate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-late)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-late)" stopOpacity={0.1} />
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
                dataKey="present"
                type="monotone"
                fill="url(#fillPresent)"
                stroke="var(--color-present)"
                strokeWidth={2}
                stackId="a"
            />
            <Area
                dataKey="absent"
                type="monotone"
                fill="url(#fillAbsent)"
                stroke="var(--color-absent)"
                strokeWidth={2}
                stackId="a"
            />
            <Area
                dataKey="late"
                type="monotone"
                fill="url(#fillLate)"
                stroke="var(--color-late)"
                strokeWidth={2}
                stackId="a"
            />
        </AreaChart>
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
interface IAttendanceData {
    date: string;
    present: number;
    absent: number;
    late: number;
}

interface IAttendanceChart {
    title: string;
    description: string;
    data: IAttendanceData[];
}
