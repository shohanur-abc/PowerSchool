"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Timeline = ({ items, variant = 'default', className, classNames: cns }: TimelineProps) => (
    <div className={cn("relative @container", className)}>
        {items.map(({ title, description, date, icon: Icon, status }, i) => (
            <div key={i} className={cn("flex gap-4 pb-8 last:pb-0", cns?.item)}>
                <div className="flex flex-col items-center">
                    <div className={cn(dotVariant({ status, variant }), cns?.dot)}>
                        {Icon ? <Icon className={cn("size-4", cns?.icon)} /> : null}
                    </div>
                    {i < items.length - 1 && <div className={cn("w-px flex-1 bg-border mt-2", cns?.line)} />}
                </div>
                <div className="flex-1 pt-0.5">
                    {date && <time className={cn("text-xs text-muted-foreground", cns?.date)}>{date}</time>}
                    <h4 className={cn("text-sm font-semibold", cns?.title)}>{title}</h4>
                    {description && <p className={cn("text-sm text-muted-foreground mt-1", cns?.description)}>{description}</p>}
                </div>
            </div>
        ))}
    </div>
);


// ============= VARIANTS =============
const dotVariant = cva("flex items-center justify-center size-8 rounded-full shrink-0", {
    variants: {
        status: {
            completed: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
            current: "bg-primary text-primary-foreground",
            pending: "bg-muted text-muted-foreground",
            error: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        },
        variant: {
            default: "",
            minimal: "size-3 border-2 border-primary",
        },
    },
    defaultVariants: { status: 'pending' },
});


// ============= TYPES =============
interface TimelineProps {
    items: {
        title: string;
        description?: string;
        date?: string;
        icon?: React.ElementType;
        status?: 'completed' | 'current' | 'pending' | 'error';
    }[];
    variant?: 'default' | 'minimal';
    className?: string;
    classNames?: {
        item?: string;
        dot?: string;
        icon?: string;
        line?: string;
        date?: string;
        title?: string;
        description?: string;
    };
}
