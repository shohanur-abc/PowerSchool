import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const ProgressRing = ({ value, max = 100, size = 'default', label, showValue, variant = 'default', className, classNames: cns }: ProgressRingProps) => {
    const percentage = Math.round((value / max) * 100);
    const sizes = { sm: 60, default: 80, lg: 120 };
    const s = sizes[size];
    const strokeWidth = size === 'lg' ? 8 : 6;
    const radius = (s - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className={cn("inline-flex flex-col items-center gap-1", className)}>
            <div className="relative" style={{ width: s, height: s }}>
                <svg width={s} height={s} className="-rotate-90">
                    <circle cx={s / 2} cy={s / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={cn("text-muted", cns?.track)} />
                    <circle cx={s / 2} cy={s / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className={cn(ringVariant({ variant }), "transition-all duration-500", cns?.ring)} />
                </svg>
                {showValue && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={cn("font-bold tabular-nums", size === 'sm' ? "text-xs" : size === 'lg' ? "text-xl" : "text-sm", cns?.value)}>{percentage}%</span>
                    </div>
                )}
            </div>
            {label && <span className={cn("text-xs text-muted-foreground", cns?.label)}>{label}</span>}
        </div>
    );
};

const ringVariant = cva("", {
    variants: {
        variant: {
            default: "text-primary",
            success: "text-green-500",
            warning: "text-yellow-500",
            danger: "text-red-500",
        },
    },
});

interface ProgressRingProps {
    value: number;
    max?: number;
    size?: 'sm' | 'default' | 'lg';
    label?: string;
    showValue?: boolean;
    variant?: 'default' | 'success' | 'warning' | 'danger';
    className?: string;
    classNames?: { track?: string; ring?: string; value?: string; label?: string };
}
