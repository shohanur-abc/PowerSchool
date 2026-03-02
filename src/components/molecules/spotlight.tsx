"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Spotlight = ({ number, title, description, variant = 'default', className, classNames: cns }: SpotlightProps) => (
    <div className={cn(spotlightVariant({ variant }), "@container", className)}>
        <div className={cn("text-6xl @sm:text-7xl font-bold text-primary/10", cns?.number)}>{String(number).padStart(2, '0')}</div>
        <h3 className={cn("text-xl font-semibold -mt-4 ml-2", cns?.title)}>{title}</h3>
        {description && <p className={cn("text-sm text-muted-foreground mt-2 ml-2", cns?.description)}>{description}</p>}
    </div>
);

const spotlightVariant = cva("p-6", {
    variants: { variant: { default: "", bordered: "border rounded-xl", filled: "bg-muted rounded-xl" } },
});

interface SpotlightProps {
    number: number; title: string; description?: string; variant?: 'default' | 'bordered' | 'filled';
    className?: string; classNames?: { number?: string; title?: string; description?: string };
}
