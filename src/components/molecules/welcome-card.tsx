"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export const WelcomeCard = ({ greeting, name, message, actions, className, classNames: cns }: WelcomeCardProps) => (
    <Card className={cn("@container bg-gradient-to-r from-primary/10 to-transparent border-none", className)}>
        <CardContent className={cn("py-8", cns?.content)}>
            <p className={cn("text-sm text-muted-foreground", cns?.greeting)}>{greeting || 'Welcome back,'}</p>
            <h2 className={cn("text-2xl @md:text-3xl font-bold mt-1", cns?.name)}>{name}</h2>
            {message && <p className={cn("text-sm text-muted-foreground mt-2 max-w-md", cns?.message)}>{message}</p>}
            {actions && <div className={cn("flex gap-3 mt-4", cns?.actions)}>{actions}</div>}
        </CardContent>
    </Card>
);

interface WelcomeCardProps {
    greeting?: string; name: string; message?: string; actions?: React.ReactNode;
    className?: string; classNames?: { content?: string; greeting?: string; name?: string; message?: string; actions?: string };
}
