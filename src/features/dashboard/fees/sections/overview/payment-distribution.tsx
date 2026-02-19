'use client';

import { Cell, Label, Pie, PieChart } from 'recharts';
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
export default function PaymentDistribution({
    title,
    description,
    data,
}: IPaymentDistribution) {
    const total = data.reduce((sum, d) => sum + d.amount, 0);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <DistributionDonut data={data} total={total} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const DistributionDonut = ({
    data,
    total,
}: {
    data: IPaymentMethod[];
    total: number;
}) => (
    <ChartContainer config={buildChartConfig(data)} className="h-72 w-full">
        <PieChart>
            <ChartTooltip
                content={<ChartTooltipContent nameKey="method" />}
            />
            <ChartLegend content={<ChartLegendContent nameKey="method" />} />
            <Pie
                data={data}
                dataKey="amount"
                nameKey="method"
                innerRadius={60}
                outerRadius={90}
                strokeWidth={2}
                paddingAngle={2}
            >
                {data.map((entry, index) => (
                    <Cell
                        key={entry.method}
                        fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                ))}
                <Label
                    content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                            return (
                                <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                >
                                    <tspan
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        className="fill-foreground text-2xl font-bold tabular-nums"
                                    >
                                        {formatCompact(total)}
                                    </tspan>
                                    <tspan
                                        x={viewBox.cx}
                                        y={(viewBox.cy || 0) + 20}
                                        className="fill-muted-foreground text-xs"
                                    >
                                        Total
                                    </tspan>
                                </text>
                            );
                        }
                    }}
                />
            </Pie>
        </PieChart>
    </ChartContainer>
);

// ============= HELPERS =============
// TODO: Derive colors from CSS variables for theme consistency
const CHART_COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
];

const buildChartConfig = (data: IPaymentMethod[]): ChartConfig =>
    Object.fromEntries(
        data.map((d, i) => [
            d.method,
            {
                label: d.method,
                color: CHART_COLORS[i % CHART_COLORS.length],
            },
        ])
    );

const formatCompact = (value: number) => {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value}`;
};

// ============= TYPES =============
interface IPaymentMethod {
    method: string;
    amount: number;
}

interface IPaymentDistribution {
    title: string;
    description: string;
    data: IPaymentMethod[];
}
