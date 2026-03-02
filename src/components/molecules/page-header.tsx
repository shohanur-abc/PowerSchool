"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const PageHeader = ({ title, description, breadcrumb, actions, eyebrow, variant = 'default', className, classNames: cns }: PageHeaderProps) => (
    <div className={cn(headerVariant({ variant }), "@container", className)}>
        {breadcrumb && <div className={cn("mb-2", cns?.breadcrumb)}>{breadcrumb}</div>}
        <div className="flex flex-col @md:flex-row @md:items-center justify-between gap-4">
            <div>
                {eyebrow && <p className={cn("text-sm text-primary font-medium mb-1", cns?.eyebrow)}>{eyebrow}</p>}
                <h1 className={cn("text-2xl @md:text-3xl font-bold tracking-tight", cns?.title)}>{title}</h1>
                {description && <p className={cn("text-muted-foreground mt-1", cns?.description)}>{description}</p>}
            </div>
            {actions && <div className={cn("flex items-center gap-2 shrink-0", cns?.actions)}>{actions}</div>}
        </div>
    </div>
);


// ============= VARIANTS =============
const headerVariant = cva("", {
    variants: {
        variant: {
            default: "pb-6 border-b mb-6",
            clean: "pb-6",
            compact: "pb-4",
        },
    },
});


// ============= TYPES =============
interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumb?: React.ReactNode;
    actions?: React.ReactNode;
    eyebrow?: string;
    variant?: 'default' | 'clean' | 'compact';
    className?: string;
    classNames?: {
        breadcrumb?: string;
        eyebrow?: string;
        title?: string;
        description?: string;
        actions?: string;
    };
}
