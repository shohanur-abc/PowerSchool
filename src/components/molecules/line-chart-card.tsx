import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export const LineChartCard = ({ title, description, data, config, dataKeys, xAxisKey = 'name', dots, curved = true, className, classNames: cns }: LineChartCardProps) => (
    <Card className={cn("@container", className)}>
        {(title || description) && (
            <CardHeader className={cns?.header}>
                {title && <CardTitle className={cns?.title}>{title}</CardTitle>}
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </CardHeader>
        )}
        <CardContent className={cns?.content}>
            <ChartContainer config={config} className={cn("h-[250px] w-full", cns?.chart)}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} fontSize={12} />
                    <YAxis tickLine={false} axisLine={false} fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {dataKeys.map((key) => (
                        <Line
                            key={key}
                            type={curved ? 'monotone' : 'linear'}
                            dataKey={key}
                            stroke={`var(--color-${key})`}
                            strokeWidth={2}
                            dot={dots}
                        />
                    ))}
                </LineChart>
            </ChartContainer>
        </CardContent>
    </Card>
);


// ============= TYPES =============
interface LineChartCardProps {
    title?: string;
    description?: string;
    data: Record<string, unknown>[];
    config: Record<string, { label: string; color: string }>;
    dataKeys: string[];
    xAxisKey?: string;
    dots?: boolean;
    curved?: boolean;
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        description?: string;
        content?: string;
        chart?: string;
    };
}
