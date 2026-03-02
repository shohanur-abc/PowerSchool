"use client";
import { cn } from '@/lib/utils';

export const DataList = ({ items, variant = 'default', className, classNames: cns }: DataListProps) => (
    <dl className={cn("@container", variant === 'horizontal' ? "grid grid-cols-1 @sm:grid-cols-2 gap-4" : "space-y-3", className)}>
        {items.map(({ label, value, icon: Icon }, i) => (
            <div key={i} className={cn("flex", variant === 'horizontal' ? "flex-col" : "items-center justify-between py-2 border-b last:border-b-0", cns?.item)}>
                <dt className={cn("text-sm text-muted-foreground flex items-center gap-1.5", cns?.label)}>
                    {Icon && <Icon className="size-3.5" />}
                    {label}
                </dt>
                <dd className={cn("text-sm font-medium", variant === 'horizontal' && "mt-0.5", cns?.value)}>{value}</dd>
            </div>
        ))}
    </dl>
);

interface DataListProps {
    items: { label: string; value: React.ReactNode; icon?: React.ElementType }[];
    variant?: 'default' | 'horizontal';
    className?: string; classNames?: { item?: string; label?: string; value?: string };
}
