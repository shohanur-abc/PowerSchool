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
} from '@/components/ui/chart';

// ============= MAIN COMPONENT =============
export default function ClassPerformance({
    title,
    description,
    data,
}: IClassPerformance) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <PerformanceBarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const PerformanceBarChart = ({ data }: { data: IClassData[] }) => (
    <ChartContainer config={chartConfig} className="h-75 w-full">
        <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
                type="number"
                domain={[0, 100]}
                tickLine={false}
                axisLine={false}
                fontSize={12}
            />
            <YAxis
                dataKey="class"
                type="category"
                tickLine={false}
                axisLine={false}
                fontSize={12}
                width={60}
            />
            <ChartTooltip
                content={
                    <ChartTooltipContent
                        formatter={(value, name, item) => (
                            <div className="flex flex-col gap-0.5">
                                <span className="font-medium">
                                    Avg Score: {value}%
                                </span>
                                <span className="text-muted-foreground text-xs">
                                    Students: {item.payload.students}
                                </span>
                            </div>
                        )}
                    />
                }
            />
            <Bar
                dataKey="avgScore"
                fill="var(--color-avgScore)"
                radius={[0, 4, 4, 0]}
                maxBarSize={32}
            />
        </BarChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    avgScore: {
        label: 'Average Score',
        color: 'hsl(var(--chart-1))',
    },
    students: {
        label: 'Students',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IClassData {
    class: string;
    avgScore: number;
    students: number;
}

interface IClassPerformance {
    title: string;
    description: string;
    data: IClassData[];
}
