"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

export const RadialChartCard = ({ title, description, data, height = 250, className, classNames: cns }: RadialChartCardProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cns?.header}>
            <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
            {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
        </CardHeader>
        <CardContent className={cns?.content}>
            <ResponsiveContainer width="100%" height={height}>
                <RadialBarChart innerRadius="30%" outerRadius="90%" data={data} startAngle={180} endAngle={0}>
                    <RadialBar dataKey="value" background cornerRadius={4} />
                    <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
                </RadialBarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);

interface RadialChartCardProps {
    title: string; description?: string; data: { name: string; value: number; fill: string }[];
    height?: number; className?: string; classNames?: { header?: string; title?: string; description?: string; content?: string };
}
