import { cva } from 'class-variance-authority';
import { CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function EventList({
    title,
    description,
    events,
}: IEventList) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {events.length > 0 ? (
                    <EventItems events={events} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const EventItems = ({ events }: { events: IEventItem[] }) => (
    <div className="space-y-0">
        {events.map((event, i) => (
            <div key={event.id}>
                {i > 0 && <Separator className="my-3" />}
                <EventRow {...event} />
            </div>
        ))}
    </div>
);

const EventRow = ({
    title,
    startDate,
    endDate,
    type,
    description,
}: IEventItem) => (
    <div className="flex gap-3">
        <EventDateBox date={startDate} />
        <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-medium">{title}</p>
                <Badge className={eventTypeBadge({ type })}>{type}</Badge>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-3 shrink-0" />
                <span>
                    {startDate}
                    {endDate && endDate !== startDate
                        ? ` – ${endDate}`
                        : ''}
                </span>
            </div>
            {description && (
                <p className="text-xs text-muted-foreground line-clamp-2">
                    {description}
                </p>
            )}
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

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No upcoming events. Add an event to get started.
        </p>
    </div>
);

// TODO: Add pagination or virtual scroll for large event lists
// TODO: Add event filtering by type

// ============= VARIANTS =============
const eventTypeBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            type: {
                exam: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                holiday:
                    'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                event: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
                meeting:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
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
    startDate: string;
    endDate?: string;
    type: 'exam' | 'holiday' | 'event' | 'meeting';
    description?: string;
}

interface IEventList {
    title: string;
    description?: string;
    events: IEventItem[];
}
