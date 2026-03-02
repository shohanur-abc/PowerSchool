"use client";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const AvatarGroup = ({ avatars, max = 5, size = 'default', className, classNames: cns }: AvatarGroupProps) => {
    const visible = avatars.slice(0, max);
    const remaining = avatars.length - max;

    return (
        <div className={cn("flex items-center", overlapVariant({ size }), className)}>
            {visible.map((avatar, i) => (
                <Avatar key={i} size={size} className={cn("ring-2 ring-background", cns?.avatar)}>
                    {avatar.src && <AvatarImage src={avatar.src} alt={avatar.name} />}
                    <AvatarFallback className={cns?.fallback}>{avatar.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
            ))}
            {remaining > 0 && (
                <Avatar size={size} className={cn("ring-2 ring-background", cns?.avatar)}>
                    <AvatarFallback className={cn("bg-muted text-muted-foreground text-xs", cns?.overflow)}>
                        +{remaining}
                    </AvatarFallback>
                </Avatar>
            )}
        </div>
    );
};


// ============= VARIANTS =============
const overlapVariant = cva("", {
    variants: {
        size: {
            sm: "-space-x-1.5",
            default: "-space-x-2",
            lg: "-space-x-3",
        },
    },
});


// ============= TYPES =============
interface AvatarGroupProps {
    avatars: { name: string; src?: string }[];
    max?: number;
    size?: 'sm' | 'default' | 'lg';
    className?: string;
    classNames?: {
        avatar?: string;
        fallback?: string;
        overflow?: string;
    };
}
