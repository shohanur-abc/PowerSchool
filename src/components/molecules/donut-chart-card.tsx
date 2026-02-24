"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const DonutChartCard = ({ title, description, data, colors, innerRadius = 60, outerRadius = 80, height = 250, className, classNames: cns }: DonutChartCardProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cns?.header}>
            <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
            {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
        </CardHeader>
        <CardContent className={cns?.content}>
            <ResponsiveContainer width="100%" height={height}>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={innerRadius} outerRadius={outerRadius} paddingAngle={2}>
                        {data.map((_, i) => <Cell key={i} fill={colors?.[i % (colors?.length || 1)] || `hsl(${i * 60}, 70%, 50%)`} />)}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className={cn("flex flex-wrap justify-center gap-4 mt-2", cns?.legend)}>
                {data.map(({ name }, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs">
                        <span className="size-2.5 rounded-full" style={{ backgroundColor: colors?.[i % (colors?.length || 1)] || `hsl(${i * 60}, 70%, 50%)` }} />
                        <span className="text-muted-foreground">{name}</span>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

interface DonutChartCardProps {
    title: string; description?: string; data: { name: string; value: number }[];
    colors?: string[]; innerRadius?: number; outerRadius?: number; height?: number;
    className?: string; classNames?: { header?: string; title?: string; description?: string; content?: string; legend?: string };
}
