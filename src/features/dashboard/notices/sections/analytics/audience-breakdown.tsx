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
export default function AudienceBreakdown({
    title,
    description,
    data,
}: IAudienceBreakdown) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <AudienceDonutChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const AudienceDonutChart = ({ data }: { data: IAudienceSegment[] }) => {
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
                    nameKey="role"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    strokeWidth={2}
                    stroke="hsl(var(--background))"
                >
                    {data.map((segment, i) => (
                        <Cell
                            key={segment.role}
                            fill={segment.color || CHART_COLORS[i % CHART_COLORS.length]}
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
                    Total Reads
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

const buildChartConfig = (data: IAudienceSegment[]): ChartConfig =>
    data.reduce<ChartConfig>((acc, segment, i) => {
        acc[segment.role] = {
            label: segment.role,
            color: segment.color || CHART_COLORS[i % CHART_COLORS.length],
        };
        return acc;
    }, {});

// ============= TYPES =============
interface IAudienceSegment {
    role: string;
    count: number;
    color?: string;
}

interface IAudienceBreakdown {
    title: string;
    description?: string;
    data: IAudienceSegment[];
}
