import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { cva } from 'class-variance-authority';
import { AlertCircleIcon, CheckCircle2Icon, InfoIcon, AlertTriangleIcon } from 'lucide-react';

export const AlertCard = ({ title, description, variant = 'info', action, closable, onClose, className, classNames: cns }: AlertCardProps) => {
    const icons = { info: InfoIcon, success: CheckCircle2Icon, warning: AlertTriangleIcon, error: AlertCircleIcon };
    const Icon = icons[variant];

    return (
        <Card className={cn(alertCardVariant({ variant }), "@container", className)}>
            <CardContent className={cn("flex gap-3 pt-4", cns?.content)}>
                <Icon className={cn("size-5 shrink-0 mt-0.5", cns?.icon)} />
                <div className="flex-1 min-w-0">
                    {title && <p className={cn("text-sm font-semibold", cns?.title)}>{title}</p>}
                    {description && <p className={cn("text-sm mt-0.5", cns?.description)}>{description}</p>}
                    {action && <div className={cn("mt-3", cns?.action)}>{action}</div>}
                </div>
                {closable && <button onClick={onClose} className="shrink-0 text-current/50 hover:text-current" aria-label="Dismiss">✕</button>}
            </CardContent>
        </Card>
    );
};

const alertCardVariant = cva("border", {
    variants: {
        variant: {
            info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300",
            success: "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300",
            warning: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950/30 dark:text-yellow-300",
            error: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300",
        },
    },
});

interface AlertCardProps {
    title?: string; description?: string; variant?: 'info' | 'success' | 'warning' | 'error';
    action?: React.ReactNode; closable?: boolean; onClose?: () => void;
    className?: string; classNames?: { content?: string; icon?: string; title?: string; description?: string; action?: string };
}
