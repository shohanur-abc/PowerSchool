import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export const BarChartCard = ({ title, description, data, config, dataKeys, xAxisKey = 'name', horizontal, stacked, className, classNames: cns }: BarChartCardProps) => (
    <Card className={cn("@container", className)}>
        {(title || description) && (
            <CardHeader className={cns?.header}>
                {title && <CardTitle className={cns?.title}>{title}</CardTitle>}
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </CardHeader>
        )}
        <CardContent className={cns?.content}>
            <ChartContainer config={config} className={cn("h-[250px] w-full", cns?.chart)}>
                <BarChart data={data} layout={horizontal ? 'vertical' : 'horizontal'}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    {horizontal ? (
                        <>
                            <YAxis dataKey={xAxisKey} type="category" tickLine={false} axisLine={false} fontSize={12} />
                            <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
                        </>
                    ) : (
                        <>
                            <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} fontSize={12} />
                            <YAxis tickLine={false} axisLine={false} fontSize={12} />
                        </>
                    )}
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {dataKeys.map((key) => (
                        <Bar
                            key={key}
                            dataKey={key}
                            stackId={stacked ? '1' : undefined}
                            fill={`var(--color-${key})`}
                            radius={[4, 4, 0, 0]}
                        />
                    ))}
                </BarChart>
            </ChartContainer>
        </CardContent>
    </Card>
);


// ============= TYPES =============
interface BarChartCardProps {
    title?: string;
    description?: string;
    data: Record<string, unknown>[];
    config: Record<string, { label: string; color: string }>;
    dataKeys: string[];
    xAxisKey?: string;
    horizontal?: boolean;
    stacked?: boolean;
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        description?: string;
        content?: string;
        chart?: string;
    };
}
