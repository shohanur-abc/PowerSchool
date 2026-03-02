"use client";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ProfileCard = ({ name, email, avatar, bio, role, badges, actions, className, classNames: cns }: ProfileCardProps) => (
    <Card className={cn("@container text-center", className)}>
        <CardContent className={cn("pt-6", cns?.content)}>
            <Avatar size="lg" className={cn("mx-auto mb-4 size-20", cns?.avatar)}>
                {avatar && <AvatarImage src={avatar} alt={name} />}
                <AvatarFallback className="text-lg">{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className={cn("text-lg font-semibold", cns?.name)}>{name}</h3>
            {role && <p className={cn("text-sm text-primary", cns?.role)}>{role}</p>}
            {email && <p className={cn("text-sm text-muted-foreground", cns?.email)}>{email}</p>}
            {bio && <p className={cn("text-sm text-muted-foreground mt-2 max-w-xs mx-auto", cns?.bio)}>{bio}</p>}
            {badges && badges.length > 0 && (
                <div className={cn("flex flex-wrap justify-center gap-1 mt-3", cns?.badges)}>
                    {badges.map((b, i) => <Badge key={i} variant="secondary">{b}</Badge>)}
                </div>
            )}
            {actions && <div className={cn("flex justify-center gap-2 mt-4", cns?.actions)}>{actions}</div>}
        </CardContent>
    </Card>
);

interface ProfileCardProps {
    name: string;
    email?: string;
    avatar?: string;
    bio?: string;
    role?: string;
    badges?: string[];
    actions?: React.ReactNode;
    className?: string;
    classNames?: { content?: string; avatar?: string; name?: string; role?: string; email?: string; bio?: string; badges?: string; actions?: string };
}
