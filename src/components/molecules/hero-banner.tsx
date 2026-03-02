"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';

export const HeroBanner = ({ eyebrow, title, highlight, description, actions, variant = 'default', className, classNames: cns }: HeroBannerProps) => (
    <div className={cn(heroVariant({ variant }), "@container", className)}>
        {eyebrow && <Badge variant="ghost" className={cn("mb-4", cns?.eyebrow)}>{eyebrow}</Badge>}
        <h1 className={cn("text-3xl @sm:text-4xl @lg:text-5xl @2xl:text-6xl font-bold tracking-tight", cns?.title)}>
            {title}
            {highlight && <span className={cn("text-primary", cns?.highlight)}> {highlight}</span>}
        </h1>
        {description && <p className={cn("text-lg @lg:text-xl text-muted-foreground mt-4 max-w-2xl", variant === 'centered' && "mx-auto", cns?.description)}>{description}</p>}
        {actions && <div className={cn("flex flex-wrap gap-3 mt-8", variant === 'centered' && "justify-center", cns?.actions)}>{actions}</div>}
    </div>
);

const heroVariant = cva("py-16 @md:py-24 @xl:py-32", {
    variants: {
        variant: {
            default: "",
            centered: "text-center",
            gradient: "text-center bg-gradient-to-b from-primary/5 to-transparent",
        },
    },
});

interface HeroBannerProps {
    eyebrow?: string;
    title: string;
    highlight?: string;
    description?: string;
    actions?: React.ReactNode;
    variant?: 'default' | 'centered' | 'gradient';
    className?: string;
    classNames?: { eyebrow?: string; title?: string; highlight?: string; description?: string; actions?: string };
}
