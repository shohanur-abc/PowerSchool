'use client';

import { useState } from 'react';
import { cva } from 'class-variance-authority';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function AcademicCalendar({
    title,
    description,
    events,
    onMonthChange,
}: IAcademicCalendar) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        undefined
    );

    const eventDates = getEventDateMap(events);

    const selectedEvents = selectedDate
        ? getEventsForDate(events, selectedDate)
        : [];

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="@container flex flex-col @xl:flex-row gap-4">
                    <CalendarView
                        selectedDate={selectedDate}
                        onSelect={setSelectedDate}
                        eventDates={eventDates}
                        onMonthChange={onMonthChange}
                    />
                    <SelectedDateEvents
                        date={selectedDate}
                        events={selectedEvents}
                    />
                </div>
                <Legend />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const CalendarView = ({
    selectedDate,
    onSelect,
    eventDates,
    onMonthChange,
}: {
    selectedDate: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    eventDates: Map<string, ICalendarEvent['type'][]>;
    onMonthChange?: (month: Date) => void;
}) => (
    <div className="shrink-0">
        <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelect}
            onMonthChange={onMonthChange}
            modifiers={{
                hasEvent: (date) => eventDates.has(formatDateKey(date)),
            }}
            modifiersClassNames={{
                hasEvent: 'font-bold ring-2 ring-primary/30 ring-offset-1',
            }}
            className="rounded-md border"
        />
    </div>
);

const SelectedDateEvents = ({
    date,
    events,
}: {
    date: Date | undefined;
    events: ICalendarEvent[];
}) => (
    <div className="flex-1 min-w-0">
        {date ? (
            <div className="space-y-2">
                <p className="text-sm font-medium">
                    Events on{' '}
                    {date.toLocaleDateString('default', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                {events.length > 0 ? (
                    <div className="space-y-2">
                        {events.map((event) => (
                            <EventChip key={event.id} {...event} />
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground py-4">
                        No events on this date.
                    </p>
                )}
            </div>
        ) : (
            <div className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground">
                    Select a date to view events.
                </p>
            </div>
        )}
    </div>
);

const EventChip = ({ title, type, startDate, endDate }: ICalendarEvent) => (
    <div className="flex items-center gap-2 rounded-md border p-2.5">
        <Badge className={eventTypeBadge({ type })}>{type}</Badge>
        <div className="min-w-0">
            <p className="text-sm font-medium truncate">{title}</p>
            <p className="text-xs text-muted-foreground">
                {startDate}
                {endDate && endDate !== startDate ? ` – ${endDate}` : ''}
            </p>
        </div>
    </div>
);

const Legend = () => (
    <div className="flex flex-wrap items-center gap-3 pt-2 border-t">
        <span className="text-xs text-muted-foreground font-medium">
            Legend:
        </span>
        {legendItems.map((item) => (
            <div key={item.type} className="flex items-center gap-1.5">
                <span className={legendDot({ type: item.type })} />
                <span className="text-xs text-muted-foreground capitalize">
                    {item.type}
                </span>
            </div>
        ))}
    </div>
);

// ============= HELPERS =============
const formatDateKey = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const getEventDateMap = (events: ICalendarEvent[]) => {
    const map = new Map<string, ICalendarEvent['type'][]>();
    for (const event of events) {
        const key = event.startDate;
        const existing = map.get(key) ?? [];
        existing.push(event.type);
        map.set(key, existing);
    }
    return map;
};

const getEventsForDate = (events: ICalendarEvent[], date: Date) => {
    const key = formatDateKey(date);
    return events.filter((e) => e.startDate === key);
};

const legendItems: { type: ICalendarEvent['type'] }[] = [
    { type: 'exam' },
    { type: 'holiday' },
    { type: 'event' },
    { type: 'meeting' },
];

// TODO: Support multi-day event highlighting across date ranges
// TODO: Add drag-to-create event on calendar cells
// TODO: Add month/week/day toggle views

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

const legendDot = cva('size-2.5 rounded-full', {
    variants: {
        type: {
            exam: 'bg-blue-500',
            holiday: 'bg-green-500',
            event: 'bg-purple-500',
            meeting: 'bg-amber-500',
        },
    },
    defaultVariants: {
        type: 'event',
    },
});

// ============= TYPES =============
interface ICalendarEvent {
    id: string;
    title: string;
    startDate: string;
    endDate?: string;
    type: 'exam' | 'holiday' | 'event' | 'meeting';
    description?: string;
}

interface IAcademicCalendar {
    title: string;
    description?: string;
    events: ICalendarEvent[];
    onMonthChange?: (month: Date) => void;
}
