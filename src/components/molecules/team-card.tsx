import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const TeamCard = ({ members, title, action, className, classNames: cns }: TeamCardProps) => (
    <Card className={cn("@container", className)}>
        {(title || action) && (
            <CardHeader className={cn("flex flex-row items-center justify-between", cns?.header)}>
                {title && <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>}
                {action}
            </CardHeader>
        )}
        <CardContent className={cns?.content}>
            <div className="space-y-3">
                {members.map(({ name, email, avatar, role, status }, i) => (
                    <div key={i} className={cn("flex items-center gap-3", cns?.member)}>
                        <Avatar size="default" className={cns?.avatar}>
                            {avatar && <AvatarImage src={avatar} alt={name} />}
                            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className={cn("text-sm font-medium truncate", cns?.name)}>{name}</p>
                            {email && <p className={cn("text-xs text-muted-foreground truncate", cns?.email)}>{email}</p>}
                        </div>
                        {role && <Badge variant="secondary" className={cns?.role}>{role}</Badge>}
                        {status && <div className={cns?.status}>{status}</div>}
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);


// ============= TYPES =============
interface TeamCardProps {
    members: {
        name: string;
        email?: string;
        avatar?: string;
        role?: string;
        status?: React.ReactNode;
    }[];
    title?: string;
    action?: React.ReactNode;
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        content?: string;
        member?: string;
        avatar?: string;
        name?: string;
        email?: string;
        role?: string;
        status?: string;
    };
}
