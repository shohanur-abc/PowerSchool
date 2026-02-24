import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Tag = ({ children, icon: Icon, removable, onRemove, variant = 'default', size = 'default', className, classNames: cns }: TagProps) => (
    <span className={cn(tagVariant({ variant, size }), className)}>
        {Icon && <Icon className={cn("size-3", cns?.icon)} />}
        <span className={cns?.label}>{children}</span>
        {removable && (
            <button onClick={onRemove} className={cn("hover:text-foreground transition-colors", cns?.remove)} aria-label="Remove tag">
                ✕
            </button>
        )}
    </span>
);

export const TagGroup = ({ tags, max, className, classNames: cns, ...tagProps }: TagGroupProps) => {
    const visible = max ? tags.slice(0, max) : tags;
    const remaining = max ? tags.length - max : 0;

    return (
        <div className={cn("flex flex-wrap gap-1.5", className)}>
            {visible.map((tag, i) => (
                <Tag key={i} {...tagProps} {...tag} className={cns?.tag} />
            ))}
            {remaining > 0 && <Tag variant="outline" className={cns?.overflow}>+{remaining}</Tag>}
        </div>
    );
};


// ============= VARIANTS =============
const tagVariant = cva("inline-flex items-center gap-1 rounded-full font-medium", {
    variants: {
        variant: {
            default: "bg-primary/10 text-primary",
            outline: "border text-foreground",
            filled: "bg-muted text-muted-foreground",
            success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
            danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        },
        size: {
            sm: "text-xs px-2 py-0.5",
            default: "text-xs px-2.5 py-1",
            lg: "text-sm px-3 py-1",
        },
    },
});


// ============= TYPES =============
interface TagProps {
    children: React.ReactNode;
    icon?: React.ElementType;
    removable?: boolean;
    onRemove?: () => void;
    variant?: 'default' | 'outline' | 'filled' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'default' | 'lg';
    className?: string;
    classNames?: { icon?: string; label?: string; remove?: string };
}

interface TagGroupProps {
    tags: { children: React.ReactNode; icon?: React.ElementType }[];
    max?: number;
    variant?: TagProps['variant'];
    size?: TagProps['size'];
    removable?: boolean;
    onRemove?: () => void;
    className?: string;
    classNames?: { tag?: string; overflow?: string };
}
