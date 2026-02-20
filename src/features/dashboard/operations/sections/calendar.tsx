import { CalendarDays, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function OperationsCalendar({ month, year, events }: IOperationsCalendar) {
    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <CalendarGrid month={month} year={year} events={events} />
                </div>
                <EventsList events={events} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground mt-1">View and manage school events and schedules</p>
        </div>
        <Button className="gap-2">
            <Plus className="size-4" />
            Add Event
        </Button>
    </div>
);

const CalendarGrid = ({
    month,
    year,
    events,
}: {
    month: string;
    year: number;
    events: IOperationsCalendar['events'];
}) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = Array.from({ length: 35 }, (_, i) => i + 1);
    const eventDays = new Set(events.map((e) => e.day));

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                        <CalendarDays className="size-4" />
                        {month} {year}
                    </CardTitle>
                    <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="size-8">
                            <ChevronLeft className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8">
                            <ChevronRight className="size-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {days.map((d) => (
                        <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {/* offset first 3 days */}
                    {[0, 1, 2].map((i) => <div key={`empty-${i}`} />)}
                    {dates.map((d) => (
                        <div
                            key={d}
                            className={`relative text-center py-2 rounded-md text-sm cursor-pointer hover:bg-muted transition-colors
                                ${d === 15 ? 'bg-primary text-primary-foreground font-bold' : ''}
                                ${eventDays.has(d) && d !== 15 ? 'font-semibold' : ''}`}
                        >
                            {d <= 31 ? d : ''}
                            {eventDays.has(d) && d !== 15 && (
                                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary block" />
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const EventsList = ({ events }: { events: IOperationsCalendar['events'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {events.map((event, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg border">
                    <div className="flex flex-col items-center justify-center min-w-10 bg-muted rounded-md p-2">
                        <span className="text-xs text-muted-foreground">Day</span>
                        <span className="font-bold text-lg">{event.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                        <EventTypeBadge type={event.type} />
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const EventTypeBadge = ({ type }: { type: string }) => {
    const map: Record<string, string> = {
        academic: 'bg-blue-100 text-blue-700 border-blue-200',
        holiday: 'bg-red-100 text-red-700 border-red-200',
        exam: 'bg-purple-100 text-purple-700 border-purple-200',
        sports: 'bg-green-100 text-green-700 border-green-200',
        cultural: 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return (
        <Badge variant="outline" className={`text-xs mt-1 ${map[type] ?? ''}`}>{type}</Badge>
    );
};

// ============= TYPES =============
interface IOperationsCalendar {
    month: string;
    year: number;
    events: {
        day: number;
        title: string;
        time: string;
        type: string;
    }[];
}
