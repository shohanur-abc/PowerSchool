"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { cva } from 'class-variance-authority';

export const MetricCard = ({ label, value, icon: Icon, trend, variant = 'default', description, footer, className, classNames: cns }: MetricCardProps) => (
    <Card className={cn(metricVariant({ variant }), "@container", className)}>
        <CardContent className={cn("pt-6", cns?.content)}>
            <div className="flex items-start justify-between">
                <div>
                    <p className={cn("text-sm text-muted-foreground", cns?.label)}>{label}</p>
                    <p className={cn("text-2xl @sm:text-3xl font-bold mt-1 tabular-nums", cns?.value)}>{value}</p>
                </div>
                {Icon && <div className={cn("p-2 rounded-lg bg-primary/10", cns?.iconWrapper)}><Icon className={cn("size-5 text-primary", cns?.icon)} /></div>}
            </div>
            {trend && (
                <div className={cn("flex items-center gap-1 mt-2 text-xs", trend.direction === 'up' ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400", cns?.trend)}>
                    <span>{trend.direction === 'up' ? '↑' : '↓'} {trend.value}</span>
                    {trend.label && <span className="text-muted-foreground">{trend.label}</span>}
                </div>
            )}
            {description && <p className={cn("text-xs text-muted-foreground mt-2", cns?.description)}>{description}</p>}
            {footer && <div className={cn("mt-3 pt-3 border-t", cns?.footer)}>{footer}</div>}
        </CardContent>
    </Card>
);

const metricVariant = cva("", {
    variants: { variant: { default: "", highlight: "border-primary/30 bg-primary/5", minimal: "border-0 shadow-none bg-muted" } },
});

interface MetricCardProps {
    label: string; value: string | number; icon?: React.ElementType;
    trend?: { direction: 'up' | 'down'; value: string; label?: string };
    variant?: 'default' | 'highlight' | 'minimal'; description?: string; footer?: React.ReactNode;
    className?: string; classNames?: { content?: string; label?: string; value?: string; iconWrapper?: string; icon?: string; trend?: string; description?: string; footer?: string };
}
