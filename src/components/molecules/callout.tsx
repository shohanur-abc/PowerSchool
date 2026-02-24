import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';

export const Callout = ({ title, description, icon: Icon, variant = 'default', badge, children, className, classNames: cns }: CalloutProps) => (
    <div className={cn(calloutVariant({ variant }), "@container", className)}>
        <div className="flex items-start gap-3">
            {Icon && <Icon className={cn("size-5 shrink-0 mt-0.5", cns?.icon)} />}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    {title && <h4 className={cn("text-sm font-semibold", cns?.title)}>{title}</h4>}
                    {badge && <Badge variant="secondary" className={cns?.badge}>{badge}</Badge>}
                </div>
                {description && <p className={cn("text-sm mt-1 opacity-90", cns?.description)}>{description}</p>}
                {children && <div className={cn("mt-3", cns?.content)}>{children}</div>}
            </div>
        </div>
    </div>
);


// ============= VARIANTS =============
const calloutVariant = cva("p-4 rounded-lg", {
    variants: {
        variant: {
            default: "border bg-muted/50",
            tip: "border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20",
            warning: "border-l-4 border-l-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/20",
            danger: "border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20",
            note: "border-l-4 border-l-primary bg-primary/5",
        },
    },
});


// ============= TYPES =============
interface CalloutProps {
    title?: string;
    description?: string;
    icon?: React.ElementType;
    variant?: 'default' | 'tip' | 'warning' | 'danger' | 'note';
    badge?: string;
    children?: React.ReactNode;
    className?: string;
    classNames?: {
        icon?: string;
        title?: string;
        badge?: string;
        description?: string;
        content?: string;
    };
}
