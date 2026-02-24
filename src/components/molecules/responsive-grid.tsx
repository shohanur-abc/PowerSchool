import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const ResponsiveGrid = ({ children, cols = 3, gap = 4, variant = 'default', className, classNames: cns }: ResponsiveGridProps) => (
    <div className={cn(gridVariant({ cols, gap, variant }), "@container", className)}>
        {Array.isArray(children) ? children.map((child, i) => (
            <div key={i} className={cns?.item}>{child}</div>
        )) : children}
    </div>
);

const gridVariant = cva("grid", {
    variants: {
        cols: {
            1: "grid-cols-1",
            2: "grid-cols-1 @sm:grid-cols-2",
            3: "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3",
            4: "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4",
            5: "grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5",
            6: "grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-6",
        },
        gap: { 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" },
        variant: { default: "", compact: "gap-1", loose: "gap-8 @lg:gap-12" },
    },
});

interface ResponsiveGridProps {
    children: React.ReactNode; cols?: 1 | 2 | 3 | 4 | 5 | 6; gap?: 2 | 3 | 4 | 6 | 8;
    variant?: 'default' | 'compact' | 'loose';
    className?: string; classNames?: { item?: string };
}
