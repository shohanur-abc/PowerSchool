'use client';

import { useState } from 'react';
import { CalendarIcon, RotateCcw } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
import { cn } from '@/lib/utils';

// ============= MAIN COMPONENT =============
export default function NoticeFilters({
    title,
    description,
    priorities,
    statuses,
    audiences,
    onApply,
}: INoticeFilters) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <FilterBar
                    priorities={priorities}
                    statuses={statuses}
                    audiences={audiences}
                    onApply={onApply}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FilterBar = ({
    priorities,
    statuses,
    audiences,
    onApply,
}: Omit<INoticeFilters, 'title' | 'description'>) => {
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [audience, setAudience] = useState('');
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();

    // TODO: Add debounced filter application
    const handleApply = () => {
        onApply?.({
            priority: priority || undefined,
            status: status || undefined,
            audience: audience || undefined,
            startDate,
            endDate,
        });
    };

    const handleReset = () => {
        setPriority('');
        setStatus('');
        setAudience('');
        setStartDate(undefined);
        setEndDate(undefined);
        onApply?.({});
    };

    return (
        <div className="space-y-4">
            <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-5 gap-4">
                <FilterSelect
                    label="Priority"
                    placeholder="All priorities"
                    options={priorities}
                    value={priority}
                    onChange={setPriority}
                />
                <FilterSelect
                    label="Status"
                    placeholder="All statuses"
                    options={statuses}
                    value={status}
                    onChange={setStatus}
                />
                <FilterSelect
                    label="Audience"
                    placeholder="All audiences"
                    options={audiences}
                    value={audience}
                    onChange={setAudience}
                />
                <DatePickerField
                    label="From"
                    date={startDate}
                    onSelect={setStartDate}
                />
                <DatePickerField
                    label="To"
                    date={endDate}
                    onSelect={setEndDate}
                    minDate={startDate}
                />
            </div>
            <div className="flex items-center gap-2">
                <Button onClick={handleApply} size="sm">
                    Apply Filters
                </Button>
                <Button onClick={handleReset} variant="outline" size="sm">
                    <RotateCcw className="size-3.5 mr-1.5" />
                    Reset
                </Button>
            </div>
        </div>
    );
};

const FilterSelect = ({
    label,
    placeholder,
    options,
    value,
    onChange,
}: {
    label: string;
    placeholder: string;
    options: IFilterOption[];
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">{label}</label>
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

const DatePickerField = ({
    label,
    date,
    onSelect,
    minDate,
}: {
    label: string;
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    minDate?: Date;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">{label}</label>
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        'w-full justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="size-4 mr-2" />
                    {date ? format(date, 'PPP') : 'Pick a date'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    disabled={minDate ? { before: minDate } : undefined}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    </div>
);

// ============= TYPES =============
interface IFilterOption {
    label: string;
    value: string;
}

interface IFilterValues {
    priority?: string;
    status?: string;
    audience?: string;
    startDate?: Date;
    endDate?: Date;
}

interface INoticeFilters {
    title: string;
    description?: string;
    priorities: IFilterOption[];
    statuses: IFilterOption[];
    audiences: IFilterOption[];
    onApply?: (filters: IFilterValues) => void;
}
