import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonForm = ({ fields = 4, columns = 1, hasActions = true, className, classNames: cns }: SkeletonFormProps) => (
    <div className={cn("@container space-y-6", className)}>
        <div className={cn("grid gap-4", columns === 2 ? "grid-cols-1 @sm:grid-cols-2" : "", cns?.fields)}>
            {Array.from({ length: fields }).map((_, i) => (
                <div key={i} className={cn("space-y-2", cns?.field)}>
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                </div>
            ))}
        </div>
        {hasActions && (
            <div className={cn("flex justify-end gap-3", cns?.actions)}>
                <Skeleton className="h-9 w-20" />
                <Skeleton className="h-9 w-24" />
            </div>
        )}
    </div>
);

interface SkeletonFormProps {
    fields?: number; columns?: 1 | 2; hasActions?: boolean;
    className?: string; classNames?: { fields?: string; field?: string; actions?: string };
}
