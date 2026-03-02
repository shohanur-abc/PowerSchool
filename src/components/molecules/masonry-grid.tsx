"use client";
import { cn } from '@/lib/utils';

export const MasonryGrid = ({ children, cols = 3, gap = 4, className, classNames: cns }: MasonryGridProps) => {
    const gapMap = { 2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 6: 'gap-6', 8: 'gap-8' };
    const colMap = { 2: 'columns-1 @sm:columns-2', 3: 'columns-1 @sm:columns-2 @lg:columns-3', 4: 'columns-1 @sm:columns-2 @lg:columns-3 @xl:columns-4' };

    return (
        <div className={cn("@container", colMap[cols], gapMap[gap], className)}>
            {Array.isArray(children) ? children.map((child, i) => (
                <div key={i} className={cn("break-inside-avoid mb-4", cns?.item)}>{child}</div>
            )) : children}
        </div>
    );
};

interface MasonryGridProps {
    children: React.ReactNode; cols?: 2 | 3 | 4; gap?: 2 | 3 | 4 | 6 | 8;
    className?: string; classNames?: { item?: string };
}
