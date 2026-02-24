import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const StatPill = ({ label, value, icon: Icon, variant = 'default', className, classNames: cns }: StatPillProps) => (
    <div className={cn(statPillVariant({ variant }), "inline-flex items-center gap-2", className)}>
        {Icon && <Icon className={cn("size-4", cns?.icon)} />}
        <span className={cn("text-xs text-muted-foreground", cns?.label)}>{label}</span>
        <span className={cn("text-sm font-semibold tabular-nums", cns?.value)}>{value}</span>
    </div>
);

const statPillVariant = cva("px-3 py-1.5 rounded-full", {
    variants: { variant: { default: "bg-muted", outline: "border", primary: "bg-primary/10 text-primary", success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" } },
});

interface StatPillProps {
    label: string; value: string | number; icon?: React.ElementType; variant?: 'default' | 'outline' | 'primary' | 'success';
    className?: string; classNames?: { icon?: string; label?: string; value?: string };
}
