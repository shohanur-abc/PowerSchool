"use client";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { cva } from 'class-variance-authority';

export const StatusBadge = ({ status, label, dot = true, className, classNames: cns }: StatusBadgeProps) => (
    <Badge variant="outline" className={cn(statusVariant({ status }), className)}>
        {dot && <span className={cn(dotVariant({ status }), cns?.dot)} />}
        <span className={cns?.label}>{label || status}</span>
    </Badge>
);


// ============= VARIANTS =============
const statusVariant = cva("gap-1.5 capitalize", {
    variants: {
        status: {
            online: "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400",
            offline: "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-400",
            busy: "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400",
            away: "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-400",
            active: "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400",
            inactive: "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-400",
            pending: "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-400",
            error: "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400",
        },
    },
});

const dotVariant = cva("size-2 rounded-full shrink-0", {
    variants: {
        status: {
            online: "bg-green-500",
            offline: "bg-gray-400",
            busy: "bg-red-500",
            away: "bg-yellow-500",
            active: "bg-green-500",
            inactive: "bg-gray-400",
            pending: "bg-yellow-500",
            error: "bg-red-500",
        },
    },
});


// ============= TYPES =============
interface StatusBadgeProps {
    status: 'online' | 'offline' | 'busy' | 'away' | 'active' | 'inactive' | 'pending' | 'error';
    label?: string;
    dot?: boolean;
    className?: string;
    classNames?: {
        dot?: string;
        label?: string;
    };
}
