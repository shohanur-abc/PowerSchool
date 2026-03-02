"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { AlertCircleIcon, CheckCircleIcon, InfoIcon, AlertTriangleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ErrorPage = ({ code, title, description, action, variant = 'default', icon: CustomIcon, className, classNames: cns }: ErrorPageProps) => {
    const Icon = CustomIcon || statusIcons[variant];

    return (
        <div className={cn("flex flex-col items-center justify-center min-h-[50vh] text-center px-4 @container", className)}>
            {Icon && (
                <div className={cn(iconContainerVariant({ variant }), cns?.iconWrapper)}>
                    <Icon className={cn("size-10", cns?.icon)} />
                </div>
            )}
            {code && <span className={cn("text-7xl @sm:text-8xl font-bold text-muted-foreground/20 mb-4", cns?.code)}>{code}</span>}
            <h1 className={cn("text-2xl @sm:text-3xl font-bold mb-2", cns?.title)}>{title}</h1>
            {description && <p className={cn("text-muted-foreground max-w-md mb-8", cns?.description)}>{description}</p>}
            {action && (
                <div className={cn("flex gap-3", cns?.actions)}>
                    {Array.isArray(action) ? action.map((a, i) => (
                        <Button key={i} variant={i === 0 ? 'default' : 'outline'} asChild={!!a.href}>
                            {a.href ? <a href={a.href}>{a.label}</a> : <span onClick={a.onClick}>{a.label}</span>}
                        </Button>
                    )) : (
                        <Button asChild={!!action.href}>
                            {action.href ? <a href={action.href}>{action.label}</a> : <span onClick={action.onClick}>{action.label}</span>}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};


// ============= HELPERS =============
const statusIcons: Record<string, React.ElementType> = {
    default: AlertCircleIcon,
    success: CheckCircleIcon,
    warning: AlertTriangleIcon,
    info: InfoIcon,
    error: AlertCircleIcon,
};


// ============= VARIANTS =============
const iconContainerVariant = cva("flex items-center justify-center size-20 rounded-full mb-6", {
    variants: {
        variant: {
            default: "bg-muted text-muted-foreground",
            success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
            warning: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
            info: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
            error: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        },
    },
});


// ============= TYPES =============
interface ErrorPageAction {
    label: string;
    href?: string;
    onClick?: () => void;
}

interface ErrorPageProps {
    code?: string | number;
    title: string;
    description?: string;
    action?: ErrorPageAction | ErrorPageAction[];
    variant?: 'default' | 'success' | 'warning' | 'info' | 'error';
    icon?: React.ElementType;
    className?: string;
    classNames?: {
        iconWrapper?: string;
        icon?: string;
        code?: string;
        title?: string;
        description?: string;
        actions?: string;
    };
}
