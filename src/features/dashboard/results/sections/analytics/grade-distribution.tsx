'use client';

import { Cell, Pie, PieChart } from 'recharts';
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
export default function GradeDistribution({
    title,
    description,
    data,
}: IGradeDistribution) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <GradeDonutChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const GradeDonutChart = ({ data }: { data: IGradeSegment[] }) => {
    const config = buildChartConfig(data);
    const total = data.reduce((sum, d) => sum + d.count, 0);

    return (
        <ChartContainer config={config} className="h-80 w-full">
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="grade"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    strokeWidth={2}
                    stroke="hsl(var(--background))"
                >
                    {data.map((segment, i) => (
                        <Cell
                            key={segment.grade}
                            fill={
                                segment.color ||
                                GRADE_COLORS[segment.grade] ||
                                CHART_COLORS[i % CHART_COLORS.length]
                            }
                        />
                    ))}
                </Pie>
                <text
                    x="50%"
                    y="48%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-foreground text-2xl font-bold"
                >
                    {total}
                </text>
                <text
                    x="50%"
                    y="58%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-muted-foreground text-xs"
                >
                    Students
                </text>
            </PieChart>
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

const GRADE_COLORS: Record<string, string> = {
    'A+': '#059669',
    A: '#10b981',
    'B+': '#3b82f6',
    B: '#0ea5e9',
    C: '#f59e0b',
    F: '#dc2626',
};

const buildChartConfig = (data: IGradeSegment[]): ChartConfig =>
    data.reduce<ChartConfig>((acc, segment, i) => {
        acc[segment.grade] = {
            label: segment.grade,
            color:
                segment.color ||
                GRADE_COLORS[segment.grade] ||
                CHART_COLORS[i % CHART_COLORS.length],
        };
        return acc;
    }, {});

// ============= TYPES =============
interface IGradeSegment {
    grade: string;
    count: number;
    color?: string;
}

interface IGradeDistribution {
    title: string;
    description?: string;
    data: IGradeSegment[];
}
