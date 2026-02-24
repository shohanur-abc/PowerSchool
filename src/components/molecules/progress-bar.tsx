import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Progress } from '@/components/ui/progress';

export const ProgressBar = ({ value, max = 100, label, showValue, size = 'default', variant = 'default', className, classNames: cns }: ProgressBarProps) => {
    const percentage = Math.round((value / max) * 100);

    return (
        <div className={cn("@container space-y-1.5", className)}>
            {(label || showValue) && (
                <div className={cn("flex items-center justify-between text-sm", cns?.labelWrapper)}>
                    {label && <span className={cn("font-medium", cns?.label)}>{label}</span>}
                    {showValue && <span className={cn("text-muted-foreground tabular-nums", cns?.value)}>{percentage}%</span>}
                </div>
            )}
            <Progress value={percentage} className={cn(progressVariant({ size, variant }), cns?.bar)} />
        </div>
    );
};


// ============= VARIANTS =============
const progressVariant = cva("", {
    variants: {
        size: {
            sm: "h-1",
            default: "h-2",
            lg: "h-3",
            xl: "h-4",
        },
        variant: {
            default: "",
            success: "[&>[data-slot=progress-indicator]]:bg-green-500",
            warning: "[&>[data-slot=progress-indicator]]:bg-yellow-500",
            danger: "[&>[data-slot=progress-indicator]]:bg-red-500",
        },
    },
});


// ============= TYPES =============
interface ProgressBarProps {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    size?: 'sm' | 'default' | 'lg' | 'xl';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    className?: string;
    classNames?: {
        labelWrapper?: string;
        label?: string;
        value?: string;
        bar?: string;
    };
}
