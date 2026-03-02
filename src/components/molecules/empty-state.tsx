"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const EmptyState = ({ icon: Icon, title, description, action, className, classNames: cns, size = 'default' }: EmptyStateProps) => (
    <div className={cn(emptyVariant({ size }), "flex flex-col items-center justify-center text-center @container", className)}>
        {Icon && (
            <div className={cn("flex items-center justify-center size-16 rounded-full bg-muted mb-4", cns?.iconWrapper)}>
                <Icon className={cn("size-8 text-muted-foreground", cns?.icon)} />
            </div>
        )}
        <h3 className={cn("font-semibold mb-1", cns?.title)}>{title}</h3>
        {description && <p className={cn("text-sm text-muted-foreground max-w-sm mb-4", cns?.description)}>{description}</p>}
        {action && <div className={cns?.action}>{action}</div>}
    </div>
);


// ============= VARIANTS =============
const emptyVariant = cva("", {
    variants: {
        size: {
            sm: "py-8",
            default: "py-16",
            lg: "py-24",
            full: "min-h-[50vh]",
        },
    },
});


// ============= TYPES =============
interface EmptyStateProps {
    icon?: React.ElementType;
    title: string;
    description?: string;
    action?: React.ReactNode;
    size?: 'sm' | 'default' | 'lg' | 'full';
    className?: string;
    classNames?: {
        iconWrapper?: string;
        icon?: string;
        title?: string;
        description?: string;
        action?: string;
    };
}
