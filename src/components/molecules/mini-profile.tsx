import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const MiniProfile = ({ name, subtitle, avatar, action, size = 'default', className, classNames: cns }: MiniProfileProps) => (
    <div className={cn("flex items-center gap-2.5", className)}>
        <Avatar className={cn(size === 'sm' ? "size-7" : size === 'lg' ? "size-12" : "size-9", cns?.avatar)}>
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback className={size === 'sm' ? "text-[10px]" : "text-xs"}>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
            <p className={cn("font-medium truncate", size === 'sm' ? "text-xs" : "text-sm", cns?.name)}>{name}</p>
            {subtitle && <p className={cn("text-muted-foreground truncate", size === 'sm' ? "text-[10px]" : "text-xs", cns?.subtitle)}>{subtitle}</p>}
        </div>
        {action && <div className={cn("shrink-0", cns?.action)}>{action}</div>}
    </div>
);

interface MiniProfileProps {
    name: string; subtitle?: string; avatar?: string; action?: React.ReactNode; size?: 'sm' | 'default' | 'lg';
    className?: string; classNames?: { avatar?: string; name?: string; subtitle?: string; action?: string };
}
