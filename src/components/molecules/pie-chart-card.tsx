import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';

export const PieChartCard = ({ title, description, data, config, dataKey = 'value', nameKey = 'name', donut, className, classNames: cns }: PieChartCardProps) => (
    <Card className={cn("@container", className)}>
        {(title || description) && (
            <CardHeader className={cns?.header}>
                {title && <CardTitle className={cns?.title}>{title}</CardTitle>}
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </CardHeader>
        )}
        <CardContent className={cns?.content}>
            <ChartContainer config={config} className={cn("h-[250px] w-full", cns?.chart)}>
                <PieChart>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Pie
                        data={data}
                        dataKey={dataKey}
                        nameKey={nameKey}
                        cx="50%"
                        cy="50%"
                        innerRadius={donut ? 60 : 0}
                        outerRadius={80}
                    >
                        {data.map((_, i) => (
                            <Cell key={i} fill={`var(--color-${data[i][nameKey] as string})`} />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
        </CardContent>
    </Card>
);


// ============= TYPES =============
interface PieChartCardProps {
    title?: string;
    description?: string;
    data: Record<string, unknown>[];
    config: Record<string, { label: string; color: string }>;
    dataKey?: string;
    nameKey?: string;
    donut?: boolean;
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        description?: string;
        content?: string;
        chart?: string;
    };
}
