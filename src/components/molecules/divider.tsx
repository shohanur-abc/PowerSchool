"use client";
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export const Divider = ({ label, icon: Icon, align = 'center', className, classNames: cns }: DividerProps) => {
    if (!label && !Icon) return <Separator className={className} />;

    return (
        <div className={cn("flex items-center gap-3", className)}>
            {align !== 'left' && <Separator className={cn("flex-1", cns?.line)} />}
            <div className={cn("flex items-center gap-2 text-xs text-muted-foreground shrink-0", cns?.label)}>
                {Icon && <Icon className={cn("size-3.5", cns?.icon)} />}
                {label}
            </div>
            {align !== 'right' && <Separator className={cn("flex-1", cns?.line)} />}
        </div>
    );
};


// ============= TYPES =============
interface DividerProps {
    label?: string;
    icon?: React.ElementType;
    align?: 'left' | 'center' | 'right';
    className?: string;
    classNames?: {
        line?: string;
        label?: string;
        icon?: string;
    };
}
