"use client";
import { cn } from '@/lib/utils';

export const GridContainer = ({ children, cols = 3, gap = 4, className, classNames: cns }: GridContainerProps) => (
    <div className={cn("@container", cns?.outer)}>
        <div className={cn(
            "grid grid-cols-1",
            cols >= 2 && "@md:grid-cols-2",
            cols >= 3 && "@xl:grid-cols-3",
            cols >= 4 && "@3xl:grid-cols-4",
            cols >= 5 && "@5xl:grid-cols-5",
            cols >= 6 && "@6xl:grid-cols-6",
            `gap-${gap}`,
            className
        )}>
            {children}
        </div>
    </div>
);


// ============= TYPES =============
interface GridContainerProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: 2 | 3 | 4 | 6 | 8;
    className?: string;
    classNames?: { outer?: string };
}
