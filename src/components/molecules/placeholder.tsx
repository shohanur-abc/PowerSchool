"use client";
import { cn } from '@/lib/utils';

export const Placeholder = ({ label, height = 200, dashed = true, icon: Icon, className, classNames: cns }: PlaceholderProps) => (
    <div className={cn("flex flex-col items-center justify-center rounded-lg bg-muted/30 text-muted-foreground", dashed && "border-2 border-dashed", className)} style={{ minHeight: height }}>
        {Icon && <Icon className={cn("size-8 mb-2 opacity-50", cns?.icon)} />}
        {label && <span className={cn("text-sm", cns?.label)}>{label}</span>}
    </div>
);

interface PlaceholderProps {
    label?: string; height?: number | string; dashed?: boolean; icon?: React.ElementType;
    className?: string; classNames?: { icon?: string; label?: string };
}
