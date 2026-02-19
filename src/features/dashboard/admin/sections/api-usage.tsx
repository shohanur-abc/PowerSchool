'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Badge } from '@/components/ui/badge';
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
export default function ApiUsage({
    title,
    description,
    data,
    rateLimit,
}: IApiUsage) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    {rateLimit && <RateLimitInfo {...rateLimit} />}
                </div>
            </CardHeader>
            <CardContent>
                <ApiBarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const RateLimitInfo = ({ used, limit, resetIn }: IRateLimit) => (
    <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-xs gap-1 tabular-nums">
            {used}/{limit} requests
        </Badge>
        {resetIn && (
            <span className="text-xs text-muted-foreground">
                Resets in {resetIn}
            </span>
        )}
    </div>
);

const ApiBarChart = ({ data }: { data: IApiData[] }) => (
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
            <Bar
                dataKey="requests"
                fill="var(--color-requests)"
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    requests: {
        label: 'API Requests',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface IApiData {
    date: string;
    requests: number;
}

interface IRateLimit {
    used: number;
    limit: number;
    resetIn?: string;
}

interface IApiUsage {
    title: string;
    description?: string;
    data: IApiData[];
    rateLimit?: IRateLimit;
}
