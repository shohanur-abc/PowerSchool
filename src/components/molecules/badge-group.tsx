"use client";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const BadgeGroup = ({ badges, max, variant = 'secondary', size = 'default', className, classNames: cns }: BadgeGroupProps) => {
    const visible = max ? badges.slice(0, max) : badges;
    const remaining = max ? badges.length - max : 0;

    return (
        <div className={cn("flex flex-wrap gap-1.5", className)}>
            {visible.map(({ label, color, icon: Icon }, i) => (
                <Badge key={i} variant={variant} className={cn(size === 'sm' && "text-xs px-1.5 py-0", cns?.badge)} style={color ? { backgroundColor: color, color: 'white' } : undefined}>
                    {Icon && <Icon className="size-3 mr-1" />}
                    {label}
                </Badge>
            ))}
            {remaining > 0 && <Badge variant="outline" className={cn(size === 'sm' && "text-xs px-1.5 py-0", cns?.more)}>+{remaining}</Badge>}
        </div>
    );
};

interface BadgeGroupProps {
    badges: { label: string; color?: string; icon?: React.ElementType }[];
    max?: number; variant?: React.ComponentProps<typeof Badge>['variant']; size?: 'sm' | 'default';
    className?: string; classNames?: { badge?: string; more?: string };
}
