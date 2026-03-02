"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const CtaSection = ({ title, description, actions, variant = 'default', className, classNames: cns }: CtaSectionProps) => (
    <div className={cn(ctaVariant({ variant }), "text-center @container", className)}>
        <h2 className={cn("text-2xl @md:text-3xl @lg:text-4xl font-bold", cns?.title)}>{title}</h2>
        {description && <p className={cn("text-muted-foreground mt-3 max-w-xl mx-auto", cns?.description)}>{description}</p>}
        {actions && <div className={cn("flex justify-center gap-3 mt-8", cns?.actions)}>{actions}</div>}
    </div>
);

const ctaVariant = cva("py-16 @md:py-20 px-4 rounded-xl", {
    variants: {
        variant: {
            default: "bg-muted",
            primary: "bg-primary text-primary-foreground [&_p]:text-primary-foreground/80",
            outline: "border-2",
            gradient: "bg-gradient-to-r from-primary/10 to-primary/5",
        },
    },
});

interface CtaSectionProps {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    variant?: 'default' | 'primary' | 'outline' | 'gradient';
    className?: string;
    classNames?: { title?: string; description?: string; actions?: string };
}
