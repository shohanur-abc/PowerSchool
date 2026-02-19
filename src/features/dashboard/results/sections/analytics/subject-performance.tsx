'use client';

import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
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
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

// ============= MAIN COMPONENT =============
export default function SubjectPerformance({
    title,
    description,
    data,
}: ISubjectPerformance) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <SubjectRadarChart data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SubjectRadarChart = ({ data }: { data: ISubjectScore[] }) => (
    <ChartContainer config={chartConfig} className="h-80 w-full">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="80%">
            <PolarGrid />
            <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 12 }}
            />
            <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fontSize: 10 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Radar
                name="Average Score"
                dataKey="average"
                stroke="var(--color-average)"
                fill="var(--color-average)"
                fillOpacity={0.3}
                strokeWidth={2}
            />
            <Radar
                name="Highest Score"
                dataKey="highest"
                stroke="var(--color-highest)"
                fill="var(--color-highest)"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
            />
        </RadarChart>
    </ChartContainer>
);

// ============= HELPERS =============
const chartConfig = {
    average: {
        label: 'Average Score',
        color: 'hsl(var(--chart-1))',
    },
    highest: {
        label: 'Highest Score',
        color: 'hsl(var(--chart-3))',
    },
} satisfies ChartConfig;

// ============= TYPES =============
interface ISubjectScore {
    subject: string;
    average: number;
    highest: number;
}

interface ISubjectPerformance {
    title: string;
    description?: string;
    data: ISubjectScore[];
}
