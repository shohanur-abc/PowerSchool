"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const AuthCard = ({ title, description, children, footer, logo, className, classNames: cns }: AuthCardProps) => (
    <div className={cn("flex min-h-screen items-center justify-center p-4", className)}>
        <Card className={cn("w-full max-w-md", cns?.card)}>
            <CardHeader className={cn("text-center", cns?.header)}>
                {logo && <div className={cn("mx-auto mb-4", cns?.logo)}>{logo}</div>}
                <CardTitle className={cn("text-2xl", cns?.title)}>{title}</CardTitle>
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </CardHeader>
            <CardContent className={cns?.content}>{children}</CardContent>
            {footer && <CardFooter className={cn("flex-col gap-2 text-center text-sm", cns?.footer)}>{footer}</CardFooter>}
        </Card>
    </div>
);

interface AuthCardProps {
    title: string; description?: string; children: React.ReactNode; footer?: React.ReactNode; logo?: React.ReactNode;
    className?: string; classNames?: { card?: string; header?: string; logo?: string; title?: string; description?: string; content?: string; footer?: string };
}
