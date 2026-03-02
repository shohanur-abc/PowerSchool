"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';

export const EventCard = ({ title, date, time, location, description, badge, image, actions, className, classNames: cns }: EventCardProps) => (
    <Card className={cn("@container overflow-hidden", className)}>
        {image && <div className={cn("relative h-40 bg-muted", cns?.imageWrapper)}>
            <img src={image} alt={title} className={cn("w-full h-full object-cover", cns?.image)} />
            {badge && <Badge className={cn("absolute top-3 left-3", cns?.badge)}>{badge}</Badge>}
        </div>}
        <CardContent className={cn("pt-4", cns?.content)}>
            {!image && badge && <Badge className={cn("mb-2", cns?.badge)}>{badge}</Badge>}
            <h3 className={cn("font-semibold", cns?.title)}>{title}</h3>
            <div className={cn("flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground", cns?.meta)}>
                {date && <span className="flex items-center gap-1"><CalendarIcon className="size-3.5" />{date}</span>}
                {time && <span className="flex items-center gap-1"><ClockIcon className="size-3.5" />{time}</span>}
                {location && <span className="flex items-center gap-1"><MapPinIcon className="size-3.5" />{location}</span>}
            </div>
            {description && <p className={cn("text-sm text-muted-foreground mt-2", cns?.description)}>{description}</p>}
            {actions && <div className={cn("flex gap-2 mt-4", cns?.actions)}>{actions}</div>}
        </CardContent>
    </Card>
);

interface EventCardProps {
    title: string; date?: string; time?: string; location?: string; description?: string;
    badge?: string; image?: string; actions?: React.ReactNode;
    className?: string; classNames?: { imageWrapper?: string; image?: string; badge?: string; content?: string; title?: string; meta?: string; description?: string; actions?: string };
}
