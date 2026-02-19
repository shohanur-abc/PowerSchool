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
export default function ClassComparison({
    title,
    description,
    data,
}: IClassComparison) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <ComparisonBarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ComparisonBarChart = ({ data }: { data: IClassData[] }) => (
    <ChartContainer config={chartConfig} className="h-80 w-full">
        <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
                domain={[0, 100]}
            />
            <YAxis
                type="category"
                dataKey="className"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
                width={80}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
                dataKey="average"
                fill="var(--color-average)"
                radius={[0, 4, 4, 0]}
                barSize={20}
            />
            <Bar
                dataKey="passRate"
                fill="var(--color-passRate)"
                radius={[0, 4, 4, 0]}
                barSize={20}
            />
        </BarChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    average: {
        label: 'Avg Score',
        color: 'hsl(var(--chart-1))',
    },
    passRate: {
        label: 'Pass Rate %',
        color: 'hsl(var(--chart-3))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IClassData {
    className: string;
    average: number;
    passRate: number;
}

interface IClassComparison {
    title: string;
    description?: string;
    data: IClassData[];
}
