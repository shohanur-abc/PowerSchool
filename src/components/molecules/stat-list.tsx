"use client";
import { cn } from '@/lib/utils';

export const StatList = ({ stats, variant = 'default', className, classNames: cns }: StatListProps) => (
    <div className={cn("@container", variant === 'horizontal' ? "flex flex-wrap gap-6" : "space-y-3", className)}>
        {stats.map(({ label, value, icon: Icon, suffix }, i) => (
            <div key={i} className={cn("flex items-center gap-3", variant === 'horizontal' ? "flex-col text-center" : "justify-between py-2 border-b last:border-b-0", cns?.item)}>
                {Icon && <Icon className={cn("size-4 text-muted-foreground", cns?.icon)} />}
                <span className={cn("text-sm text-muted-foreground", variant === 'horizontal' && "order-2", cns?.label)}>{label}</span>
                <span className={cn("font-semibold tabular-nums", variant === 'horizontal' && "order-1 text-2xl", cns?.value)}>{value}{suffix}</span>
            </div>
        ))}
    </div>
);

interface StatListProps {
    stats: { label: string; value: string | number; icon?: React.ElementType; suffix?: string }[];
    variant?: 'default' | 'horizontal';
    className?: string; classNames?: { item?: string; icon?: string; label?: string; value?: string };
}
