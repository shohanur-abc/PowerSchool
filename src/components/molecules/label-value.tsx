"use client";
import { cn } from '@/lib/utils';

export const LabelValue = ({ label, value, size = 'default', direction = 'vertical', colon, className, classNames: cns }: LabelValueProps) => (
    <div className={cn(direction === 'horizontal' ? "flex items-center gap-2" : "flex flex-col gap-0.5", className)}>
        <span className={cn("text-muted-foreground", size === 'sm' ? "text-xs" : "text-sm", cns?.label)}>
            {label}{colon && ':'}
        </span>
        <span className={cn("font-medium", size === 'sm' ? "text-sm" : "text-base", cns?.value)}>
            {value}
        </span>
    </div>
);

interface LabelValueProps {
    label: string; value: React.ReactNode; size?: 'sm' | 'default'; direction?: 'vertical' | 'horizontal';
    colon?: boolean; className?: string; classNames?: { label?: string; value?: string };
}
