'use client';

import { useState } from 'react';
import { CalendarIcon, Loader2, Search, Send } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

// ============= MAIN COMPONENT =============
export default function CorrectionForm({
    title,
    description,
    statusOptions,
    onSubmit,
    onStudentSearch,
    isSubmitting,
}: ICorrectionForm) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CorrectionFormContent
                statusOptions={statusOptions}
                onSubmit={onSubmit}
                onStudentSearch={onStudentSearch}
                isSubmitting={isSubmitting}
            />
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const CorrectionFormContent = ({
    statusOptions,
    onSubmit,
    onStudentSearch,
    isSubmitting,
}: Omit<ICorrectionForm, 'title' | 'description'>) => {
    const [studentQuery, setStudentQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [oldStatus, setOldStatus] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [reason, setReason] = useState('');

    // TODO: Add form validation with proper error messages
    const isValid =
        studentQuery.trim() && selectedDate && oldStatus && newStatus && reason.trim();

    const handleSubmit = () => {
        if (!isValid || !selectedDate) return;
        onSubmit?.({
            studentQuery: studentQuery.trim(),
            date: selectedDate,
            oldStatus,
            newStatus,
            reason: reason.trim(),
        });
    };

    const handleStudentSearch = () => {
        if (studentQuery.trim() && onStudentSearch) {
            onStudentSearch(studentQuery.trim());
        }
    };

    return (
        <>
            <CardContent>
                <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-4">
                    <StudentSearchField
                        value={studentQuery}
                        onChange={setStudentQuery}
                        onSearch={handleStudentSearch}
                    />
                    <CorrectionDatePicker
                        date={selectedDate}
                        onSelect={setSelectedDate}
                    />
                    <StatusSelect
                        label="Current Status"
                        placeholder="Select current status"
                        options={statusOptions}
                        value={oldStatus}
                        onChange={setOldStatus}
                    />
                    <StatusSelect
                        label="New Status"
                        placeholder="Select new status"
                        options={statusOptions}
                        value={newStatus}
                        onChange={setNewStatus}
                    />
                    <div className="@xl:col-span-2">
                        <ReasonField value={reason} onChange={setReason} />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    {isSubmitting ? (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    ) : (
                        <Send className="size-4 mr-2" />
                    )}
                    {isSubmitting ? 'Submitting...' : 'Submit Correction'}
                </Button>
            </CardFooter>
        </>
    );
};

const StudentSearchField = ({
    value,
    onChange,
    onSearch,
}: {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Student</label>
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
                placeholder="Search by name or roll number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                className="pl-9"
            />
        </div>
    </div>
);

const CorrectionDatePicker = ({
    date,
    onSelect,
}: {
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Attendance Date</label>
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
                    disabled={(d) => d > new Date()}
                />
            </PopoverContent>
        </Popover>
    </div>
);

const StatusSelect = ({
    label,
    placeholder,
    options,
    value,
    onChange,
}: {
    label: string;
    placeholder: string;
    options: IStatusOption[];
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

const ReasonField = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => (
    <div className="space-y-2">
        <label className="text-sm font-medium">Reason for Correction</label>
        <Textarea
            placeholder="Provide a detailed reason for this attendance correction..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
        />
    </div>
);

// ============= TYPES =============
interface IStatusOption {
    label: string;
    value: string;
}

interface ICorrectionSubmission {
    studentQuery: string;
    date: Date;
    oldStatus: string;
    newStatus: string;
    reason: string;
}

interface ICorrectionForm {
    title: string;
    description?: string;
    statusOptions: IStatusOption[];
    onSubmit?: (data: ICorrectionSubmission) => void;
    onStudentSearch?: (query: string) => void;
    isSubmitting?: boolean;
}
