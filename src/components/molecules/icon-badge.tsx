import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const IconBadge = ({ icon: Icon, variant = 'default', size = 'default', className, classNames: cns }: IconBadgeProps) => (
    <div className={cn(iconBadgeVariant({ variant, size }), className)}>
        <Icon className={cn(size === 'sm' ? "size-3.5" : size === 'lg' ? "size-6" : "size-4", cns?.icon)} />
    </div>
);

const iconBadgeVariant = cva("inline-flex items-center justify-center rounded-lg", {
    variants: {
        variant: {
            default: "bg-muted text-muted-foreground",
            primary: "bg-primary/10 text-primary",
            success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
            warning: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
            danger: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        },
        size: { sm: "size-7", default: "size-9", lg: "size-12" },
    },
});

interface IconBadgeProps {
    icon: React.ElementType; variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'default' | 'lg'; className?: string; classNames?: { icon?: string };
}
