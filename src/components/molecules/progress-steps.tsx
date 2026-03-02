"use client";
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import { cva } from 'class-variance-authority';

export const ProgressSteps = ({ steps, current, variant = 'default', className, classNames: cns }: ProgressStepsProps) => (
    <div className={cn("@container", className)}>
        <div className={cn("flex items-center", variant === 'vertical' ? "flex-col gap-0" : "gap-0", cns?.track)}>
            {steps.map(({ label, description }, i) => {
                const status = i < current ? 'completed' : i === current ? 'active' : 'upcoming';
                return (
                    <div key={i} className={cn("flex items-center", variant === 'vertical' ? "flex-row gap-3" : "flex-1", i < steps.length - 1 && variant !== 'vertical' && "gap-0")}>
                        <div className="flex flex-col items-center">
                            <div className={cn(stepVariant({ status }), cns?.dot)}>
                                {status === 'completed' ? <CheckIcon className="size-3.5" /> : <span className="text-xs font-medium">{i + 1}</span>}
                            </div>
                        </div>
                        {variant !== 'vertical' && i < steps.length - 1 && (
                            <div className={cn("flex-1 h-0.5 mx-2", status === 'completed' ? "bg-primary" : "bg-muted", cns?.connector)} />
                        )}
                        {variant === 'vertical' && (
                            <div className={cn(cns?.stepText)}>
                                <span className={cn("text-sm font-medium", status === 'upcoming' && "text-muted-foreground", cns?.label)}>{label}</span>
                                {description && <p className={cn("text-xs text-muted-foreground", cns?.description)}>{description}</p>}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
        {variant !== 'vertical' && (
            <div className={cn("flex justify-between mt-2", cns?.labels)}>
                {steps.map(({ label }, i) => (
                    <span key={i} className={cn("text-xs flex-1 text-center", i <= current ? "text-foreground font-medium" : "text-muted-foreground", cns?.label)}>{label}</span>
                ))}
            </div>
        )}
    </div>
);

const stepVariant = cva("flex items-center justify-center size-8 rounded-full transition-colors shrink-0", {
    variants: {
        status: {
            completed: "bg-primary text-primary-foreground",
            active: "bg-primary/20 text-primary border-2 border-primary",
            upcoming: "bg-muted text-muted-foreground",
        },
    },
});

interface ProgressStepsProps {
    steps: { label: string; description?: string }[]; current: number;
    variant?: 'default' | 'vertical';
    className?: string; classNames?: { track?: string; dot?: string; connector?: string; labels?: string; label?: string; description?: string; stepText?: string };
}
