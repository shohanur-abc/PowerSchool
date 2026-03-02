"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cva } from 'class-variance-authority';

export const ScheduleCard = ({ title, events, className, classNames: cns }: ScheduleCardProps) => (
    <Card className={cn("@container", className)}>
        {title && <CardHeader className={cns?.header}><CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle></CardHeader>}
        <CardContent className={cns?.content}>
            <div className="space-y-3">
                {events.map(({ time, title: eventTitle, description, variant = 'default', icon: Icon }, i) => (
                    <div key={i} className={cn("flex gap-3", cns?.event)}>
                        <div className={cn("text-xs text-muted-foreground w-14 shrink-0 pt-0.5 tabular-nums", cns?.time)}>{time}</div>
                        <div className={cn(eventVariant({ variant }), "flex-1", cns?.eventContent)}>
                            <div className="flex items-center gap-2">
                                {Icon && <Icon className="size-3.5" />}
                                <span className={cn("text-sm font-medium", cns?.eventTitle)}>{eventTitle}</span>
                            </div>
                            {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.eventDescription)}>{description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

const eventVariant = cva("rounded-lg p-2", {
    variants: {
        variant: {
            default: "bg-muted/50",
            primary: "bg-primary/10 border-l-2 border-primary",
            warning: "bg-yellow-50 border-l-2 border-yellow-500 dark:bg-yellow-950/20",
            danger: "bg-red-50 border-l-2 border-red-500 dark:bg-red-950/20",
        },
    },
});

interface ScheduleCardProps {
    title?: string;
    events: { time: string; title: string; description?: string; variant?: 'default' | 'primary' | 'warning' | 'danger'; icon?: React.ElementType }[];
    className?: string;
    classNames?: { header?: string; title?: string; content?: string; event?: string; time?: string; eventContent?: string; eventTitle?: string; eventDescription?: string };
}
