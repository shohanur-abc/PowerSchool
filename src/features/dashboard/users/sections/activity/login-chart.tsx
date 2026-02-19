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
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from '@/components/ui/chart';

// ============= MAIN COMPONENT =============
export default function LoginChart({
    title,
    description,
    data,
}: ILoginChart) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <LoginBarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const LoginBarChart = ({ data }: { data: ILoginData[] }) => (
    <ChartContainer config={chartConfig} className="h-75 w-full">
        <BarChart
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
            <Bar
                dataKey="success"
                fill="var(--color-success)"
                radius={[4, 4, 0, 0]}
            />
            <Bar
                dataKey="failed"
                fill="var(--color-failed)"
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    success: {
        label: 'Successful',
        color: 'hsl(var(--chart-1))',
    },
    failed: {
        label: 'Failed',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface ILoginData {
    date: string;
    success: number;
    failed: number;
}

interface ILoginChart {
    title: string;
    description?: string;
    data: ILoginData[];
}
