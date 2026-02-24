import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Stack = ({ children, direction = 'vertical', gap = 4, align, justify, wrap, className }: StackProps) => (
    <div className={cn(stackVariant({ direction, gap, align, justify, wrap: !!wrap }), className)}>
        {children}
    </div>
);

const stackVariant = cva("flex", {
    variants: {
        direction: { vertical: "flex-col", horizontal: "flex-row" },
        gap: { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" },
        align: { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch", baseline: "items-baseline" },
        justify: { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between", around: "justify-around" },
        wrap: { true: "flex-wrap", false: "" },
    },
    defaultVariants: { direction: 'vertical', gap: 4 },
});

interface StackProps {
    children: React.ReactNode; direction?: 'vertical' | 'horizontal'; gap?: 0 | 1 | 2 | 3 | 4 | 6 | 8;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'; justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    wrap?: boolean; className?: string;
}
