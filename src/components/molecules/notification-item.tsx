"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const NotificationItem = ({ title, description, time, avatar, read, icon: Icon, variant = 'default', action, className, classNames: cns }: NotificationItemProps) => (
    <div className={cn(notifVariant({ variant, read: !!read }), "@container", className)}>
        <div className="flex gap-3">
            {avatar ? (
                <Avatar size="default" className={cns?.avatar}>
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                    <AvatarFallback>{avatar.alt?.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
            ) : Icon ? (
                <div className={cn("flex items-center justify-center size-8 rounded-full bg-primary/10 shrink-0", cns?.iconWrapper)}>
                    <Icon className={cn("size-4 text-primary", cns?.icon)} />
                </div>
            ) : null}
            <div className="flex-1 min-w-0">
                <p className={cn("text-sm", !read && "font-medium", cns?.title)}>{title}</p>
                {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
                {time && <time className={cn("text-xs text-muted-foreground mt-1 block", cns?.time)}>{time}</time>}
            </div>
            {action && <div className={cn("shrink-0", cns?.action)}>{action}</div>}
        </div>
        {!read && <div className={cn("absolute top-3 right-3 size-2 rounded-full bg-primary", cns?.unreadDot)} />}
    </div>
);

const notifVariant = cva("relative p-3 transition-colors", {
    variants: {
        variant: {
            default: "border-b",
            card: "rounded-lg border mb-2",
        },
        read: {
            true: "opacity-75",
            false: "bg-primary/5",
        },
    },
});

interface NotificationItemProps {
    title: string;
    description?: string;
    time?: string;
    avatar?: { src: string; alt?: string };
    read?: boolean;
    icon?: React.ElementType;
    variant?: 'default' | 'card';
    action?: React.ReactNode;
    className?: string;
    classNames?: { avatar?: string; iconWrapper?: string; icon?: string; title?: string; description?: string; time?: string; action?: string; unreadDot?: string };
}
