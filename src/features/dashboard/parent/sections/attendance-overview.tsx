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
export default function AttendanceOverview({
    title,
    description,
    data,
    children: childrenNames,
}: IAttendanceOverview) {
    const config = buildChartConfig(childrenNames);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {/* TODO: Add date range filter for attendance comparison */}
                <ChartContainer config={config} className="h-75 w-full">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
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
                            domain={[0, 100]}
                            tickFormatter={(v) => `${v}%`}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        {childrenNames.map((child, index) => (
                            <Bar
                                key={child}
                                dataKey={child}
                                fill={CHART_COLORS[index % CHART_COLORS.length]}
                                radius={[4, 4, 0, 0]}
                            />
                        ))}
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

// ============= HELPERS =============
const CHART_COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
];

const buildChartConfig = (childrenNames: string[]): ChartConfig =>
    childrenNames.reduce(
        (acc, name, index) => ({
            ...acc,
            [name]: {
                label: name,
                color: CHART_COLORS[index % CHART_COLORS.length],
            },
        }),
        {} as ChartConfig
    );

// ============= TYPES =============
interface IAttendanceOverview {
    title: string;
    description: string;
    /** Monthly attendance data — each entry has a `month` key plus a key per child name */
    data: Record<string, string | number>[];
    /** Child names used as data keys */
    children: string[];
}
