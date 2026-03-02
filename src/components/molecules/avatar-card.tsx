"use client";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

export const AvatarCard = ({ name, subtitle, avatar, description, action, horizontal, className, classNames: cns }: AvatarCardProps) => (
    <Card className={cn("@container", className)}>
        <CardContent className={cn("flex gap-4 pt-6", horizontal ? "flex-row items-center" : "flex-col items-center text-center", cns?.content)}>
            <Avatar size="lg" className={cn("size-16", cns?.avatar)}>
                {avatar && <AvatarImage src={avatar} alt={name} />}
                <AvatarFallback className="text-lg">{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
                <h4 className={cn("font-semibold", cns?.name)}>{name}</h4>
                {subtitle && <p className={cn("text-sm text-muted-foreground", cns?.subtitle)}>{subtitle}</p>}
                {description && <p className={cn("text-sm text-muted-foreground mt-2", cns?.description)}>{description}</p>}
            </div>
            {action && <div className={cns?.action}>{action}</div>}
        </CardContent>
    </Card>
);

interface AvatarCardProps {
    name: string;
    subtitle?: string;
    avatar?: string;
    description?: string;
    action?: React.ReactNode;
    horizontal?: boolean;
    className?: string;
    classNames?: { content?: string; avatar?: string; name?: string; subtitle?: string; description?: string; action?: string };
}
