import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Alert = ({ title, description, icon: Icon, variant = 'info', action, dismissible, onDismiss, className, classNames: cns }: AlertProps) => (
    <div className={cn(alertVariant({ variant }), "@container", className)} role="alert">
        <div className="flex gap-3">
            {Icon && <Icon className={cn("size-5 shrink-0 mt-0.5", cns?.icon)} />}
            <div className="flex-1">
                {title && <h5 className={cn("text-sm font-semibold", cns?.title)}>{title}</h5>}
                {description && <p className={cn("text-sm mt-0.5", cns?.description)}>{description}</p>}
                {action && <div className={cn("mt-3", cns?.action)}>{action}</div>}
            </div>
            {dismissible && (
                <button onClick={onDismiss} className={cn("shrink-0 text-current opacity-70 hover:opacity-100", cns?.dismiss)} aria-label="Dismiss">
                    ✕
                </button>
            )}
        </div>
    </div>
);


// ============= VARIANTS =============
const alertVariant = cva("p-4 rounded-lg border", {
    variants: {
        variant: {
            info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300",
            success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-950/30 dark:border-green-800 dark:text-green-300",
            warning: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950/30 dark:border-yellow-800 dark:text-yellow-300",
            error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-950/30 dark:border-red-800 dark:text-red-300",
            neutral: "bg-muted border-border text-foreground",
        },
    },
});


// ============= TYPES =============
interface AlertProps {
    title?: string;
    description?: string;
    icon?: React.ElementType;
    variant?: 'info' | 'success' | 'warning' | 'error' | 'neutral';
    action?: React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
    classNames?: {
        icon?: string;
        title?: string;
        description?: string;
        action?: string;
        dismiss?: string;
    };
}
