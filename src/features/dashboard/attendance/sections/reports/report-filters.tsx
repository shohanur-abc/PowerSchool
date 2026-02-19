'use client';

import { useState } from 'react';
import { CalendarIcon, Filter, Loader2, Search } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
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
export default function ReportFilters({
    title,
    description,
    classes,
    sections,
    onGenerate,
    isGenerating,
}: IReportFilters) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <FilterForm
                    classes={classes}
                    sections={sections}
                    onGenerate={onGenerate}
                    isGenerating={isGenerating}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FilterForm = ({
    classes,
    sections,
    onGenerate,
    isGenerating,
}: Omit<IReportFilters, 'title' | 'description'>) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [studentSearch, setStudentSearch] = useState('');
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();

    // TODO: Add reset filters functionality
    const handleGenerate = () => {
        onGenerate?.({
            classId: selectedClass || undefined,
            sectionId: selectedSection || undefined,
            studentSearch: studentSearch.trim() || undefined,
            startDate,
            endDate,
        });
    };

    return (
        <div className="space-y-4">
            <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4">
                <DateRangeField
                    label="Start Date"
                    date={startDate}
                    onSelect={setStartDate}
                />
                <DateRangeField
                    label="End Date"
                    date={endDate}
                    onSelect={setEndDate}
                    minDate={startDate}
                />
                <FilterSelect
                    label="Class"
                    placeholder="All classes"
                    options={classes}
                    value={selectedClass}
                    onChange={setSelectedClass}
                />
                <FilterSelect
                    label="Section"
                    placeholder="All sections"
                    options={sections}
                    value={selectedSection}
                    onChange={setSelectedSection}
                />
                <StudentSearchField
                    value={studentSearch}
                    onChange={setStudentSearch}
                />
                <div className="flex items-end">
                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full"
                    >
                        {isGenerating ? (
                            <Loader2 className="size-4 mr-2 animate-spin" />
                        ) : (
                            <Filter className="size-4 mr-2" />
                        )}
                        {isGenerating ? 'Generating...' : 'Generate Report'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

const DateRangeField = ({
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
                    {date ? format(date, 'PPP') : 'Select date'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    initialFocus
                    disabled={(d) => {
                        if (d > new Date()) return true;
                        if (minDate && d < minDate) return true;
                        return false;
                    }}
                />
            </PopoverContent>
        </Popover>
    </div>
);

const FilterSelect = ({
    label,
    placeholder,
    options,
    value,
    onChange,
}: {
    label: string;
    placeholder: string;
    options: ISelectOption[];
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">{label}</label>
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

const StudentSearchField = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Student</label>
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
                placeholder="Search by name or roll no."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-9"
            />
        </div>
    </div>
);

// ============= TYPES =============
interface ISelectOption {
    label: string;
    value: string;
}

interface IFilterParams {
    classId?: string;
    sectionId?: string;
    studentSearch?: string;
    startDate?: Date;
    endDate?: Date;
}

interface IReportFilters {
    title: string;
    description?: string;
    classes: ISelectOption[];
    sections: ISelectOption[];
    onGenerate?: (params: IFilterParams) => void;
    isGenerating?: boolean;
}
