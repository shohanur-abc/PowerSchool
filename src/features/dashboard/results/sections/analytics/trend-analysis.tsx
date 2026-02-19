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
export default function TrendAnalysis({
    title,
    description,
    data,
    lines,
}: ITrendAnalysis) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <TrendLineChart data={data} lines={lines} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TrendLineChart = ({
    data,
    lines,
}: {
    data: ITrendData[];
    lines: ITrendLine[];
}) => {
    const config = buildChartConfig(lines);

    return (
        <ChartContainer config={config} className="h-80 w-full">
            <LineChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="exam"
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
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                {lines.map((line, i) => (
                    <Line
                        key={line.dataKey}
                        type="monotone"
                        dataKey={line.dataKey}
                        name={line.label}
                        stroke={
                            line.color || CHART_COLORS[i % CHART_COLORS.length]
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

const buildChartConfig = (lines: ITrendLine[]): ChartConfig =>
    lines.reduce<ChartConfig>((acc, line, i) => {
        acc[line.dataKey] = {
            label: line.label,
            color: line.color || CHART_COLORS[i % CHART_COLORS.length],
        };
        return acc;
    }, {});

// ============= TYPES =============
interface ITrendData {
    exam: string;
    [key: string]: string | number;
}

interface ITrendLine {
    dataKey: string;
    label: string;
    color?: string;
}

interface ITrendAnalysis {
    title: string;
    description?: string;
    data: ITrendData[];
    lines: ITrendLine[];
}
