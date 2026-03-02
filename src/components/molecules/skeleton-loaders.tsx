"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Skeleton } from '@/components/ui/skeleton';

export const CardSkeleton = ({ variant = 'default', lines = 3, avatar, className, classNames: cns }: CardSkeletonProps) => (
    <div className={cn(skeletonVariant({ variant }), className)}>
        {avatar && (
            <div className="flex items-center gap-3 mb-4">
                <Skeleton className={cn("size-10 rounded-full", cns?.avatar)} />
                <div className="space-y-2 flex-1">
                    <Skeleton className={cn("h-4 w-1/3", cns?.line)} />
                    <Skeleton className={cn("h-3 w-1/4", cns?.line)} />
                </div>
            </div>
        )}
        <div className="space-y-3">
            {Array.from({ length: lines }, (_, i) => (
                <Skeleton key={i} className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full", cns?.line)} />
            ))}
        </div>
    </div>
);

export const TableSkeleton = ({ rows = 5, cols = 4, className, classNames: cns }: TableSkeletonProps) => (
    <div className={cn("space-y-3", className)}>
        <div className={cn("flex gap-4", cns?.header)}>
            {Array.from({ length: cols }, (_, i) => (
                <Skeleton key={i} className={cn("h-4 flex-1", cns?.headerCell)} />
            ))}
        </div>
        {Array.from({ length: rows }, (_, i) => (
            <div key={i} className={cn("flex gap-4", cns?.row)}>
                {Array.from({ length: cols }, (_, j) => (
                    <Skeleton key={j} className={cn("h-4 flex-1", cns?.cell)} />
                ))}
            </div>
        ))}
    </div>
);

export const ListSkeleton = ({ items = 5, avatar, className, classNames: cns }: ListSkeletonProps) => (
    <div className={cn("space-y-4", className)}>
        {Array.from({ length: items }, (_, i) => (
            <div key={i} className={cn("flex items-center gap-3", cns?.item)}>
                {avatar && <Skeleton className={cn("size-8 rounded-full shrink-0", cns?.avatar)} />}
                <div className="space-y-2 flex-1">
                    <Skeleton className={cn("h-4 w-3/4", cns?.line)} />
                    <Skeleton className={cn("h-3 w-1/2", cns?.line)} />
                </div>
            </div>
        ))}
    </div>
);


// ============= VARIANTS =============
const skeletonVariant = cva("p-6 rounded-xl", {
    variants: {
        variant: {
            default: "border",
            ghost: "",
            filled: "bg-muted/50",
        },
    },
});


// ============= TYPES =============
interface CardSkeletonProps {
    variant?: 'default' | 'ghost' | 'filled';
    lines?: number;
    avatar?: boolean;
    className?: string;
    classNames?: { avatar?: string; line?: string };
}

interface TableSkeletonProps {
    rows?: number;
    cols?: number;
    className?: string;
    classNames?: { header?: string; headerCell?: string; row?: string; cell?: string };
}

interface ListSkeletonProps {
    items?: number;
    avatar?: boolean;
    className?: string;
    classNames?: { item?: string; avatar?: string; line?: string };
}
