import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonProfile = ({ variant = 'card', className, classNames: cns }: SkeletonProfileProps) => {
    if (variant === 'inline') {
        return (
            <div className={cn("flex items-center gap-3", className)}>
                <Skeleton className={cn("size-10 rounded-full", cns?.avatar)} />
                <div className="space-y-1.5">
                    <Skeleton className={cn("h-4 w-28", cns?.name)} />
                    <Skeleton className={cn("h-3 w-20", cns?.subtitle)} />
                </div>
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col items-center gap-3 p-6", className)}>
            <Skeleton className={cn("size-20 rounded-full", cns?.avatar)} />
            <Skeleton className={cn("h-5 w-32", cns?.name)} />
            <Skeleton className={cn("h-3 w-24", cns?.subtitle)} />
            <div className="flex gap-2 mt-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
            </div>
        </div>
    );
};

interface SkeletonProfileProps {
    variant?: 'card' | 'inline';
    className?: string; classNames?: { avatar?: string; name?: string; subtitle?: string };
}
