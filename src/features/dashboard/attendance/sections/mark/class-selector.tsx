'use client';

import { useState } from 'react';
import { CalendarIcon, Loader2 } from 'lucide-react';
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
export default function ClassSelector({
    title,
    description,
    classes,
    sections,
    onLoad,
    isLoading,
}: IClassSelector) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <SelectorForm
                    classes={classes}
                    sections={sections}
                    onLoad={onLoad}
                    isLoading={isLoading}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SelectorForm = ({
    classes,
    sections,
    onLoad,
    isLoading,
}: Omit<IClassSelector, 'title' | 'description'>) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        new Date()
    );

    // TODO: Add validation before loading
    const handleLoad = () => {
        if (!selectedClass || !selectedSection || !selectedDate) return;
        onLoad?.({
            classId: selectedClass,
            sectionId: selectedSection,
            date: selectedDate,
        });
    };

    const isValid = selectedClass && selectedSection && selectedDate;

    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
            <ClassSelect
                classes={classes}
                value={selectedClass}
                onChange={setSelectedClass}
            />
            <SectionSelect
                sections={sections}
                value={selectedSection}
                onChange={setSelectedSection}
            />
            <DatePickerField
                date={selectedDate}
                onSelect={setSelectedDate}
            />
            <div className="flex items-end">
                <Button
                    onClick={handleLoad}
                    disabled={!isValid || isLoading}
                    className="w-full"
                >
                    {isLoading && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    Load Students
                </Button>
            </div>
        </div>
    );
};

const ClassSelect = ({
    classes,
    value,
    onChange,
}: {
    classes: ISelectOption[];
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Class</label>
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
                {classes.map((cls) => (
                    <SelectItem key={cls.value} value={cls.value}>
                        {cls.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

const SectionSelect = ({
    sections,
    value,
    onChange,
}: {
    sections: ISelectOption[];
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Section</label>
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder="Select section" />
            </SelectTrigger>
            <SelectContent>
                {sections.map((sec) => (
                    <SelectItem key={sec.value} value={sec.value}>
                        {sec.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

const DatePickerField = ({
    date,
    onSelect,
}: {
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Date</label>
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
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    </div>
);

// ============= TYPES =============
interface ISelectOption {
    label: string;
    value: string;
}

interface ILoadParams {
    classId: string;
    sectionId: string;
    date: Date;
}

interface IClassSelector {
    title: string;
    description?: string;
    classes: ISelectOption[];
    sections: ISelectOption[];
    onLoad?: (params: ILoadParams) => void;
    isLoading?: boolean;
}
