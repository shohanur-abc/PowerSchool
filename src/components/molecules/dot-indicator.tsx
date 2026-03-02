"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const DotIndicator = ({ status, label, size = 'default', pulse, className, classNames: cns }: DotIndicatorProps) => (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
        <span className={cn("relative", dotVariant({ status, size }), cns?.dot)}>
            {pulse && <span className={cn("absolute inset-0 rounded-full animate-ping opacity-75", dotVariant({ status, size }))} />}
        </span>
        {label && <span className={cn("text-sm", cns?.label)}>{label}</span>}
    </span>
);

const dotVariant = cva("rounded-full inline-block", {
    variants: {
        status: {
            online: "bg-green-500",
            offline: "bg-gray-400",
            busy: "bg-red-500",
            away: "bg-yellow-500",
            active: "bg-primary",
        },
        size: { sm: "size-2", default: "size-2.5", lg: "size-3" },
    },
});

interface DotIndicatorProps {
    status: 'online' | 'offline' | 'busy' | 'away' | 'active'; label?: string;
    size?: 'sm' | 'default' | 'lg'; pulse?: boolean;
    className?: string; classNames?: { dot?: string; label?: string };
}
