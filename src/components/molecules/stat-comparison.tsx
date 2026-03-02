"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const StatComparison = ({ label, current, previous, format: fmt, className, classNames: cns }: StatComparisonProps) => {
    const change = previous !== 0 ? ((current - previous) / previous) * 100 : 0;
    const direction = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';

    return (
        <div className={cn("@container", className)}>
            <p className={cn("text-sm text-muted-foreground", cns?.label)}>{label}</p>
            <div className="flex items-baseline gap-3 mt-1">
                <span className={cn("text-2xl font-bold tabular-nums", cns?.current)}>{fmt ? fmt(current) : current}</span>
                <span className={cn("text-sm text-muted-foreground line-through tabular-nums", cns?.previous)}>{fmt ? fmt(previous) : previous}</span>
                <span className={cn(changeVariant({ direction }), cns?.change)}>
                    {direction === 'up' ? '↑' : direction === 'down' ? '↓' : '→'} {Math.abs(change).toFixed(1)}%
                </span>
            </div>
        </div>
    );
};

const changeVariant = cva("text-xs font-medium px-1.5 py-0.5 rounded", {
    variants: {
        direction: {
            up: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            down: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
            neutral: "bg-muted text-muted-foreground",
        },
    },
});

interface StatComparisonProps {
    label: string;
    current: number;
    previous: number;
    format?: (value: number) => string;
    className?: string;
    classNames?: { label?: string; current?: string; previous?: string; change?: string };
}
