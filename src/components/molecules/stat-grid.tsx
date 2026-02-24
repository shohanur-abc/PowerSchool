import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const StatGrid = ({ stats, cols = 4, variant = 'default', className, classNames: cns }: StatGridProps) => (
    <div className={cn("@container grid gap-4", cols === 2 && "grid-cols-1 @md:grid-cols-2", cols === 3 && "grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3", cols === 4 && "grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-4", className)}>
        {stats.map(({ label, value, icon: Icon, change, description }, i) => (
            <div key={i} className={cn(statVariant({ variant }), cns?.card)}>
                <div className="flex items-center justify-between">
                    <span className={cn("text-sm text-muted-foreground", cns?.label)}>{label}</span>
                    {Icon && <Icon className={cn("size-4 text-muted-foreground", cns?.icon)} />}
                </div>
                <div className={cn("text-2xl font-bold mt-2 tabular-nums", cns?.value)}>{value}</div>
                {(change || description) && (
                    <div className="flex items-center gap-2 mt-1">
                        {change && <span className={cn("text-xs font-medium", change.startsWith('+') || change.startsWith('↑') ? "text-green-600 dark:text-green-400" : change.startsWith('-') || change.startsWith('↓') ? "text-red-600 dark:text-red-400" : "text-muted-foreground", cns?.change)}>{change}</span>}
                        {description && <span className={cn("text-xs text-muted-foreground", cns?.description)}>{description}</span>}
                    </div>
                )}
            </div>
        ))}
    </div>
);

const statVariant = cva("p-4 rounded-lg", {
    variants: {
        variant: {
            default: "border bg-card",
            filled: "bg-muted",
            ghost: "",
            outline: "border-2",
        },
    },
});

interface StatGridProps {
    stats: { label: string; value: string | number; icon?: React.ElementType; change?: string; description?: string }[];
    cols?: 2 | 3 | 4;
    variant?: 'default' | 'filled' | 'ghost' | 'outline';
    className?: string;
    classNames?: { card?: string; label?: string; icon?: string; value?: string; change?: string; description?: string };
}
