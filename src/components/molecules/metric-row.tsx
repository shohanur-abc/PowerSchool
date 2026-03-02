"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const MetricRow = ({ items, className, classNames: cns, divider = true }: MetricRowProps) => (
    <div className={cn("flex flex-wrap items-center", divider && "divide-x", className)}>
        {items.map(({ label, value, change, icon: Icon }, i) => (
            <div key={i} className={cn("flex-1 min-w-[120px] px-4 first:pl-0 last:pr-0 py-2", cns?.item)}>
                <div className="flex items-center gap-2">
                    {Icon && <Icon className={cn("size-4 text-muted-foreground", cns?.icon)} />}
                    <span className={cn("text-xs text-muted-foreground", cns?.label)}>{label}</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                    <span className={cn("text-xl font-bold tabular-nums", cns?.value)}>{value}</span>
                    {change && <span className={cn(changeVariant({ type: change.type }), cns?.change)}>{change.value}</span>}
                </div>
            </div>
        ))}
    </div>
);


// ============= VARIANTS =============
const changeVariant = cva("text-xs font-medium", {
    variants: {
        type: {
            positive: "text-green-600 dark:text-green-400",
            negative: "text-red-600 dark:text-red-400",
            neutral: "text-muted-foreground",
        },
    },
});


// ============= TYPES =============
interface MetricRowProps {
    items: {
        label: string;
        value: string | number;
        icon?: React.ElementType;
        change?: { value: string; type: 'positive' | 'negative' | 'neutral' };
    }[];
    divider?: boolean;
    className?: string;
    classNames?: {
        item?: string;
        icon?: string;
        label?: string;
        value?: string;
        change?: string;
    };
}
