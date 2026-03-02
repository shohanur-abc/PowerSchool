"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Banner = ({ title, description, action, icon: Icon, variant = 'default', dismissible, onDismiss, className, classNames: cns }: BannerProps) => (
    <div className={cn(bannerVariant({ variant }), "@container", className)} role="banner">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                {Icon && <Icon className={cn("size-5 shrink-0", cns?.icon)} />}
                <div className="flex-1 min-w-0">
                    {title && <p className={cn("text-sm font-medium truncate", cns?.title)}>{title}</p>}
                    {description && <p className={cn("text-xs opacity-90 truncate", cns?.description)}>{description}</p>}
                </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                {action && <div className={cns?.action}>{action}</div>}
                {dismissible && (
                    <button onClick={onDismiss} className={cn("opacity-70 hover:opacity-100 transition-opacity", cns?.dismiss)} aria-label="Dismiss">
                        ✕
                    </button>
                )}
            </div>
        </div>
    </div>
);


// ============= VARIANTS =============
const bannerVariant = cva("w-full", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground",
            info: "bg-blue-600 text-white",
            success: "bg-green-600 text-white",
            warning: "bg-yellow-500 text-yellow-950",
            error: "bg-red-600 text-white",
            neutral: "bg-muted text-foreground border-b",
        },
    },
});


// ============= TYPES =============
interface BannerProps {
    title?: string;
    description?: string;
    action?: React.ReactNode;
    icon?: React.ElementType;
    variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
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
