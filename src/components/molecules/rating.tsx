"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Rating = ({ value, max = 5, size = 'default', showValue, className, classNames: cns }: RatingProps) => (
    <div className={cn("flex items-center gap-1", className)}>
        {Array.from({ length: max }, (_, i) => {
            const filled = i < Math.floor(value);
            const half = !filled && i < value;
            return (
                <span key={i} className={cn(starVariant({ size }), filled ? "text-yellow-400" : half ? "text-yellow-400/50" : "text-muted-foreground/30", cns?.star)}>
                    ★
                </span>
            );
        })}
        {showValue && <span className={cn("text-sm text-muted-foreground ml-1 tabular-nums", cns?.value)}>{value.toFixed(1)}</span>}
    </div>
);


// ============= VARIANTS =============
const starVariant = cva("", {
    variants: {
        size: {
            sm: "text-sm",
            default: "text-lg",
            lg: "text-2xl",
            xl: "text-3xl",
        },
    },
});


// ============= TYPES =============
interface RatingProps {
    value: number;
    max?: number;
    size?: 'sm' | 'default' | 'lg' | 'xl';
    showValue?: boolean;
    className?: string;
    classNames?: { star?: string; value?: string };
}
