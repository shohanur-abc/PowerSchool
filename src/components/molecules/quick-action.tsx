import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

export const QuickAction = ({ items, className, classNames: cns }: QuickActionProps) => (
    <div className={cn("grid grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 gap-3 @container", className)}>
        {items.map(({ label, href, icon: Icon, variant = 'default', description }, i) => (
            <Link key={i} href={href || '#'} className={cn(quickActionVariant({ variant }), "group no-underline", cns?.item)}>
                {Icon && <Icon className={cn("size-6 mb-2 text-primary group-hover:scale-110 transition-transform", cns?.icon)} />}
                <span className={cn("text-sm font-medium", cns?.label)}>{label}</span>
                {description && <span className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</span>}
            </Link>
        ))}
    </div>
);

const quickActionVariant = cva("flex flex-col items-center justify-center text-center p-4 rounded-lg transition-all", {
    variants: {
        variant: {
            default: "border hover:border-primary/30 hover:shadow-sm",
            filled: "bg-muted hover:bg-muted/80",
            ghost: "hover:bg-muted",
        },
    },
});

interface QuickActionProps {
    items: { label: string; href?: string; icon?: React.ElementType; variant?: 'default' | 'filled' | 'ghost'; description?: string }[];
    className?: string;
    classNames?: { item?: string; icon?: string; label?: string; description?: string };
}
