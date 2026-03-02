"use client";
import { cn } from '@/lib/utils';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-react';

export const PercentageChange = ({ value, showIcon = true, showSign = true, size = 'default', className, classNames: cns }: PercentageChangeProps) => {
    const direction = value > 0 ? 'up' : value < 0 ? 'down' : 'neutral';
    const colors = { up: "text-green-600 dark:text-green-400", down: "text-red-600 dark:text-red-400", neutral: "text-muted-foreground" };
    const icons = { up: TrendingUpIcon, down: TrendingDownIcon, neutral: MinusIcon };
    const Icon = icons[direction];

    return (
        <span className={cn("inline-flex items-center gap-1", colors[direction], size === 'sm' ? "text-xs" : "text-sm", className)}>
            {showIcon && <Icon className={cn(size === 'sm' ? "size-3" : "size-3.5", cns?.icon)} />}
            <span className={cn("font-medium tabular-nums", cns?.value)}>
                {showSign && value > 0 && '+'}{value.toFixed(1)}%
            </span>
        </span>
    );
};

interface PercentageChangeProps {
    value: number; showIcon?: boolean; showSign?: boolean; size?: 'sm' | 'default';
    className?: string; classNames?: { icon?: string; value?: string };
}
