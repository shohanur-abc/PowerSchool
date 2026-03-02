"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const CardStack = ({ cards, className, classNames: cns }: CardStackProps) => (
    <div className={cn("space-y-4 @container", className)}>
        {cards.map(({ title, description, content, footer }, i) => (
            <Card key={i} className={cns?.card}>
                {(title || description) && (
                    <CardHeader className={cns?.header}>
                        {title && <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>}
                        {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
                    </CardHeader>
                )}
                {content && <CardContent className={cns?.content}>{content}</CardContent>}
                {footer && <div className={cn("px-6 pb-4", cns?.footer)}>{footer}</div>}
            </Card>
        ))}
    </div>
);

interface CardStackProps {
    cards: { title?: string; description?: string; content?: React.ReactNode; footer?: React.ReactNode }[];
    className?: string; classNames?: { card?: string; header?: string; title?: string; description?: string; content?: string; footer?: string };
}
