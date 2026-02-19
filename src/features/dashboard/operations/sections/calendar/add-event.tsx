'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Loader2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

// ============= MAIN COMPONENT =============
export default function AddEvent({
    triggerLabel,
    title,
    description,
    onSubmit,
    isSubmitting,
}: IAddEvent) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (data: IEventPayload) => {
        onSubmit?.(data);
        // TODO: Close dialog only after successful submission
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="size-4 mr-2" />
                    {triggerLabel ?? 'Add Event'}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {title ?? 'Add Calendar Event'}
                    </DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                <EventForm
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />
            </DialogContent>
        </Dialog>
    );
}

// ============= CHILD COMPONENTS =============
const EventForm = ({
    onSubmit,
    isSubmitting,
}: {
    onSubmit?: (data: IEventPayload) => void;
    isSubmitting?: boolean;
}) => {
    const [eventTitle, setEventTitle] = useState('');
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [eventType, setEventType] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);

    // TODO: Add form validation with zod + react-hook-form
    const isValid = eventTitle.trim() && startDate && eventType;

    const handleSubmit = () => {
        if (!isValid || !startDate) return;
        onSubmit?.({
            title: eventTitle.trim(),
            startDate: format(startDate, 'yyyy-MM-dd'),
            endDate: endDate
                ? format(endDate, 'yyyy-MM-dd')
                : undefined,
            type: eventType as IEventPayload['type'],
            description: eventDescription.trim() || undefined,
            isRecurring,
        });
    };

    return (
        <Card className="border-0 shadow-none">
            <CardContent className="px-0 space-y-4">
                {/* Event Title */}
                <div className="space-y-2">
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input
                        id="event-title"
                        placeholder="e.g., Mid-Term Examinations"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                    />
                </div>

                {/* Date Range */}
                <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                    <DatePicker
                        label="Start Date"
                        date={startDate}
                        onSelect={setStartDate}
                        id="start-date"
                    />
                    <DatePicker
                        label="End Date"
                        date={endDate}
                        onSelect={setEndDate}
                        id="end-date"
                        placeholder="Optional"
                    />
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                        <SelectTrigger id="event-type">
                            <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="exam">Exam</SelectItem>
                            <SelectItem value="holiday">Holiday</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="meeting">Meeting</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Label htmlFor="event-description">
                        Description{' '}
                        <span className="text-muted-foreground">
                            (optional)
                        </span>
                    </Label>
                    <Textarea
                        id="event-description"
                        placeholder="Brief description of the event..."
                        value={eventDescription}
                        onChange={(e) =>
                            setEventDescription(e.target.value)
                        }
                        rows={3}
                    />
                </div>

                {/* Recurring Toggle */}
                <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="space-y-0.5">
                        <Label htmlFor="recurring-toggle">
                            Recurring Event
                        </Label>
                        <p className="text-xs text-muted-foreground">
                            Repeat this event annually
                        </p>
                    </div>
                    <Switch
                        id="recurring-toggle"
                        checked={isRecurring}
                        onCheckedChange={setIsRecurring}
                    />
                </div>
            </CardContent>
            <CardFooter className="px-0 justify-end gap-2">
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    {isSubmitting && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    Save Event
                </Button>
            </CardFooter>
        </Card>
    );
};

const DatePicker = ({
    label,
    date,
    onSelect,
    id,
    placeholder,
}: {
    label: string;
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    id: string;
    placeholder?: string;
}) => (
    <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    className={cn(
                        'w-full justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="size-4 mr-2" />
                    {date
                        ? format(date, 'PPP')
                        : placeholder ?? 'Pick a date'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    </div>
);

// TODO: Add recurring frequency options (weekly, monthly, annually)
// TODO: Add time picker for event start/end times

// ============= TYPES =============
interface IEventPayload {
    title: string;
    startDate: string;
    endDate?: string;
    type: 'exam' | 'holiday' | 'event' | 'meeting';
    description?: string;
    isRecurring: boolean;
}

interface IAddEvent {
    triggerLabel?: string;
    title?: string;
    description?: string;
    onSubmit?: (data: IEventPayload) => void;
    isSubmitting?: boolean;
}
