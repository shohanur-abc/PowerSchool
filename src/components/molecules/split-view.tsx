"use client";
import { cn } from '@/lib/utils';

export const SplitView = ({ left, right, ratio = '1:1', reverse, className, classNames: cns }: SplitViewProps) => {
    const ratioMap = { '1:1': 'grid-cols-1 @lg:grid-cols-2', '1:2': 'grid-cols-1 @lg:grid-cols-3 [&>:last-child]:col-span-2', '2:1': 'grid-cols-1 @lg:grid-cols-3 [&>:first-child]:col-span-2', '1:3': 'grid-cols-1 @lg:grid-cols-4 [&>:last-child]:col-span-3', '3:1': 'grid-cols-1 @lg:grid-cols-4 [&>:first-child]:col-span-3' };

    return (
        <div className={cn("grid gap-6 @container", ratioMap[ratio], className)}>
            <div className={cn(reverse && "@lg:order-2", cns?.left)}>{left}</div>
            <div className={cn(reverse && "@lg:order-1", cns?.right)}>{right}</div>
        </div>
    );
};

interface SplitViewProps {
    left: React.ReactNode; right: React.ReactNode;
    ratio?: '1:1' | '1:2' | '2:1' | '1:3' | '3:1'; reverse?: boolean;
    className?: string; classNames?: { left?: string; right?: string };
}
