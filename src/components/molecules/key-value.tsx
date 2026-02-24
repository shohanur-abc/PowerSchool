import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const KeyValue = ({ items, direction = 'vertical', separator, className, classNames: cns }: KeyValueProps) => (
    <dl className={cn(directionVariant({ direction }), className)}>
        {items.map(({ label, value, icon: Icon }, i) => (
            <div key={i} className={cn("flex", direction === 'vertical' ? "flex-col gap-1" : "items-center justify-between gap-4", separator && "pb-3 border-b last:border-0 last:pb-0", cns?.item)}>
                <dt className={cn("text-sm text-muted-foreground flex items-center gap-1.5", cns?.label)}>
                    {Icon && <Icon className={cn("size-3.5", cns?.icon)} />}
                    {label}
                </dt>
                <dd className={cn("text-sm font-medium", cns?.value)}>{value}</dd>
            </div>
        ))}
    </dl>
);


// ============= VARIANTS =============
const directionVariant = cva("", {
    variants: {
        direction: {
            vertical: "space-y-3",
            horizontal: "space-y-3",
            grid: "grid grid-cols-2 gap-4",
        },
    },
});


// ============= TYPES =============
interface KeyValueProps {
    items: {
        label: string;
        value: React.ReactNode;
        icon?: React.ElementType;
    }[];
    direction?: 'vertical' | 'horizontal' | 'grid';
    separator?: boolean;
    className?: string;
    classNames?: {
        item?: string;
        label?: string;
        value?: string;
        icon?: string;
    };
}
