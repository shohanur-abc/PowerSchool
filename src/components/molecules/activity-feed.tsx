import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const ActivityFeed = ({ items, className, classNames: cns }: ActivityFeedProps) => (
    <div className={cn("@container space-y-0", className)}>
        {items.map(({ icon: Icon, title, description, time, actor, variant = 'default' }, i) => (
            <div key={i} className={cn("flex gap-3 py-3 border-b last:border-0", cns?.item)}>
                <div className={cn(activityDotVariant({ variant }), cns?.dot)}>
                    {Icon ? <Icon className="size-3.5" /> : null}
                </div>
                <div className="flex-1 min-w-0">
                    <p className={cn("text-sm", cns?.title)}>
                        {actor && <span className="font-medium">{actor} </span>}
                        {title}
                    </p>
                    {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
                </div>
                {time && <time className={cn("text-xs text-muted-foreground shrink-0", cns?.time)}>{time}</time>}
            </div>
        ))}
    </div>
);


// ============= VARIANTS =============
const activityDotVariant = cva("flex items-center justify-center size-7 rounded-full shrink-0 mt-0.5", {
    variants: {
        variant: {
            default: "bg-muted text-muted-foreground",
            success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
            warning: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
            error: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
            info: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        },
    },
});


// ============= TYPES =============
interface ActivityFeedProps {
    items: {
        icon?: React.ElementType;
        title: string;
        description?: string;
        time?: string;
        actor?: string;
        variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    }[];
    className?: string;
    classNames?: {
        item?: string;
        dot?: string;
        title?: string;
        description?: string;
        time?: string;
    };
}
