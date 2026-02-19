'use client';

import {
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
} from 'recharts';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// ============= MAIN COMPONENT =============
export default function ComparativeCharts({
    title,
    description,
    comparisons,
}: IComparativeCharts) {
    const defaultTab = comparisons[0]?.id ?? '';

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={defaultTab}>
                    <TabsList className="flex-wrap h-auto">
                        {comparisons.map((comp) => (
                            <TabsTrigger key={comp.id} value={comp.id}>
                                {comp.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {comparisons.map((comp) => (
                        <TabsContent
                            key={comp.id}
                            value={comp.id}
                            className="mt-4"
                        >
                            {comp.chartType === 'bar' ? (
                                <ComparisonBarChart
                                    data={comp.data}
                                    series={comp.series}
                                    xAxisKey={comp.xAxisKey}
                                />
                            ) : (
                                <ComparisonLineChart
                                    data={comp.data}
                                    series={comp.series}
                                    xAxisKey={comp.xAxisKey}
                                />
                            )}
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ComparisonBarChart = ({
    data,
    series,
    xAxisKey,
}: {
    data: IChartDataPoint[];
    series: IChartSeries[];
    xAxisKey: string;
}) => {
    const config = buildChartConfig(series);

    return (
        <ChartContainer config={config} className="h-80 w-full">
            <BarChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey={xAxisKey}
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
                {series.map((s, i) => (
                    <Bar
                        key={s.dataKey}
                        dataKey={s.dataKey}
                        name={s.label}
                        fill={
                            s.color || CHART_COLORS[i % CHART_COLORS.length]
                        }
                        radius={[4, 4, 0, 0]}
                    />
                ))}
            </BarChart>
        </ChartContainer>
    );
};

const ComparisonLineChart = ({
    data,
    series,
    xAxisKey,
}: {
    data: IChartDataPoint[];
    series: IChartSeries[];
    xAxisKey: string;
}) => {
    const config = buildChartConfig(series);

    return (
        <ChartContainer config={config} className="h-80 w-full">
            <LineChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey={xAxisKey}
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
                {series.map((s, i) => (
                    <Line
                        key={s.dataKey}
                        type="monotone"
                        dataKey={s.dataKey}
                        name={s.label}
                        stroke={
                            s.color || CHART_COLORS[i % CHART_COLORS.length]
                        }
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                ))}
            </LineChart>
        </ChartContainer>
    );
};

// ============= HELPERS =============
const CHART_COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
];

const buildChartConfig = (series: IChartSeries[]): ChartConfig =>
    series.reduce<ChartConfig>((acc, s, i) => {
        acc[s.dataKey] = {
            label: s.label,
            color: s.color || CHART_COLORS[i % CHART_COLORS.length],
        };
        return acc;
    }, {});

// ============= TYPES =============
interface IChartDataPoint {
    [key: string]: string | number;
}

interface IChartSeries {
    dataKey: string;
    label: string;
    color?: string;
}

interface IComparison {
    id: string;
    label: string;
    chartType: 'bar' | 'line';
    xAxisKey: string;
    data: IChartDataPoint[];
    series: IChartSeries[];
}

interface IComparativeCharts {
    title: string;
    description?: string;
    comparisons: IComparison[];
}
