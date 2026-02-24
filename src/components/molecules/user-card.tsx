import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cva } from 'class-variance-authority';

export const UserCard = ({ name, email, avatar, role, status, action, variant = 'default', className, classNames: cns }: UserCardProps) => (
    <div className={cn(userCardVariant({ variant }), "@container", className)}>
        <Avatar size="default" className={cns?.avatar}>
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
            <p className={cn("text-sm font-semibold truncate", cns?.name)}>{name}</p>
            {email && <p className={cn("text-xs text-muted-foreground truncate", cns?.email)}>{email}</p>}
            {role && <p className={cn("text-xs text-muted-foreground", cns?.role)}>{role}</p>}
        </div>
        {status && <div className={cns?.status}>{status}</div>}
        {action && <div className={cns?.action}>{action}</div>}
    </div>
);


// ============= VARIANTS =============
const userCardVariant = cva("flex items-center gap-3", {
    variants: {
        variant: {
            default: "p-3 rounded-lg border",
            ghost: "p-3",
            compact: "p-2",
        },
    },
});


// ============= TYPES =============
interface UserCardProps {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
    status?: React.ReactNode;
    action?: React.ReactNode;
    variant?: 'default' | 'ghost' | 'compact';
    className?: string;
    classNames?: {
        avatar?: string;
        name?: string;
        email?: string;
        role?: string;
        status?: string;
        action?: string;
    };
}
