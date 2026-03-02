"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const StepIndicator = ({ steps, current, variant = 'default', className, classNames: cns }: StepIndicatorProps) => (
    <div className={cn("@container", className)}>
        <ol className={cn("flex items-center gap-2", variant === 'vertical' && "flex-col items-start", cns?.list)}>
            {steps.map(({ label, description }, i) => {
                const status = i < current ? 'completed' : i === current ? 'current' : 'pending';
                return (
                    <li key={i} className={cn("flex items-center gap-3 flex-1", variant === 'vertical' && "flex-none w-full pb-6 last:pb-0", cns?.item)}>
                        <div className={cn(stepDotVariant({ status }), cns?.dot)}>
                            {status === 'completed' ? '✓' : i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className={cn("text-sm font-medium truncate", status === 'pending' && "text-muted-foreground", cns?.label)}>{label}</p>
                            {description && <p className={cn("text-xs text-muted-foreground truncate", cns?.description)}>{description}</p>}
                        </div>
                        {variant !== 'vertical' && i < steps.length - 1 && (
                            <div className={cn("flex-1 h-px bg-border min-w-8", status === 'completed' && "bg-primary", cns?.connector)} />
                        )}
                    </li>
                );
            })}
        </ol>
    </div>
);


// ============= VARIANTS =============
const stepDotVariant = cva("flex items-center justify-center size-8 rounded-full text-xs font-semibold shrink-0", {
    variants: {
        status: {
            completed: "bg-primary text-primary-foreground",
            current: "border-2 border-primary text-primary",
            pending: "border-2 border-muted-foreground/30 text-muted-foreground",
        },
    },
});


// ============= TYPES =============
interface StepIndicatorProps {
    steps: { label: string; description?: string }[];
    current: number;
    variant?: 'default' | 'vertical';
    className?: string;
    classNames?: {
        list?: string;
        item?: string;
        dot?: string;
        label?: string;
        description?: string;
        connector?: string;
    };
}
