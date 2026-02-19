'use client';

import { Cell, Label, Pie, PieChart } from 'recharts';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
export default function FeeOverview({
    title,
    description,
    data,
    totalCollected,
    totalPending,
}: IFeeOverview) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <FeeDonutChart data={data} totalCollected={totalCollected} />
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <FeeSummary
                    totalCollected={totalCollected}
                    totalPending={totalPending}
                />
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FeeDonutChart = ({
    data,
    totalCollected,
}: {
    data: IFeeData[];
    totalCollected: string;
}) => {
    const config = buildChartConfig(data);

    return (
        <ChartContainer config={config} className="mx-auto aspect-square h-62.5">
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="category"
                    innerRadius={60}
                    outerRadius={90}
                    strokeWidth={4}
                    stroke="hsl(var(--background))"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
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
                                            className="fill-foreground text-2xl font-bold"
                                        >
                                            {totalCollected}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 20}
                                            className="fill-muted-foreground text-xs"
                                        >
                                            Collected
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
};

const FeeSummary = ({
    totalCollected,
    totalPending,
}: Pick<IFeeOverview, 'totalCollected' | 'totalPending'>) => (
    <div className="flex w-full justify-between text-sm">
        <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-chart-1" />
            <span className="text-muted-foreground">Collected:</span>
            <span className="font-semibold tabular-nums">{totalCollected}</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-chart-2" />
            <span className="text-muted-foreground">Pending:</span>
            <span className="font-semibold tabular-nums">{totalPending}</span>
        </div>
    </div>
);

// ============= HELPERS =============
const buildChartConfig = (data: IFeeData[]): ChartConfig =>
    data.reduce(
        (acc, item) => ({
            ...acc,
            [item.category]: {
                label: item.category,
                color: item.fill,
            },
        }),
        { amount: { label: 'Amount' } } as ChartConfig
    );

// ============= TYPES =============
interface IFeeData {
    category: string;
    amount: number;
    fill: string;
}

interface IFeeOverview {
    title: string;
    description: string;
    data: IFeeData[];
    totalCollected: string;
    totalPending: string;
}
