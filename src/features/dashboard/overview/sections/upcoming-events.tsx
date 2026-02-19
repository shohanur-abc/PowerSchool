import { cva } from 'class-variance-authority';
import { Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function UpcomingEvents({
    title,
    events,
}: IUpcomingEvents) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <EventList events={events} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const EventList = ({ events }: { events: IEventItem[] }) => (
    <ScrollArea className="h-95 pr-3">
        <div className="space-y-3">
            {events.map((event) => (
                <EventRow key={event.id} {...event} />
            ))}
        </div>
    </ScrollArea>
);

const EventRow = ({ title, date, time, type, location }: IEventItem) => (
    <div className="flex gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <EventDateBox date={date} />
        <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{title}</p>
                <Badge className={eventTypeBadge({ type })}>{type}</Badge>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" />
                    {time}
                </span>
                {location && (
                    <span className="inline-flex items-center gap-1 truncate">
                        <MapPin className="size-3" />
                        {location}
                    </span>
                )}
            </div>
        </div>
    </div>
);

const EventDateBox = ({ date }: { date: string }) => {
    const parsed = new Date(date);
    const day = parsed.getDate();
    const month = parsed.toLocaleString('default', { month: 'short' });

    return (
        <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 px-2.5 py-1.5 shrink-0 min-w-12">
            <span className="text-lg font-bold leading-none text-primary tabular-nums">
                {day}
            </span>
            <span className="text-[10px] font-medium uppercase text-primary/80">
                {month}
            </span>
        </div>
    );
};

// ============= VARIANTS =============
const eventTypeBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent',
    {
        variants: {
            type: {
                exam: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                holiday: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                meeting: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                event: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
            },
        },
        defaultVariants: {
            type: 'event',
        },
    }
);

// ============= TYPES =============
interface IEventItem {
    id: string;
    title: string;
    date: string;
    time: string;
    type: 'exam' | 'holiday' | 'meeting' | 'event';
    location?: string;
}

interface IUpcomingEvents {
    title: string;
    events: IEventItem[];
}
