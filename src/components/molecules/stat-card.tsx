"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const StatCard = ({ title, value, description, icon: Icon, trend, className, classNames: cns }: StatCardProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cns?.header}>
            <div className="flex items-center justify-between">
                <CardTitle className={cn("text-sm font-medium text-muted-foreground", cns?.title)}>{title}</CardTitle>
                {Icon && <Icon className={cn("size-4 text-muted-foreground", cns?.icon)} />}
            </div>
        </CardHeader>
        <CardContent className={cns?.content}>
            <div className={cn("text-2xl @sm:text-3xl font-bold", cns?.value)}>{value}</div>
            {(description || trend) && (
                <div className="flex items-center gap-2 mt-1">
                    {trend && (
                        <Badge variant="secondary" className={cn(trendVariant({ direction: trend.direction }), cns?.trend)}>
                            {trend.direction === 'up' ? '↑' : trend.direction === 'down' ? '↓' : '→'} {trend.value}
                        </Badge>
                    )}
                    {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
                </div>
            )}
        </CardContent>
    </Card>
);


// ============= VARIANTS =============
const trendVariant = cva("text-xs", {
    variants: {
        direction: {
            up: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
            down: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
            neutral: "text-muted-foreground",
        },
    },
});


// ============= TYPES =============
interface StatCardProps {
    title: string;
    value: string | number;
    description?: string;
    icon?: React.ElementType;
    trend?: { value: string; direction: 'up' | 'down' | 'neutral' };
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        icon?: string;
        content?: string;
        value?: string;
        description?: string;
        trend?: string;
    };
}
