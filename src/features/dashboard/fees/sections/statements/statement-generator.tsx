'use client';

import { useState } from 'react';
import { CalendarIcon, FileText, Loader2, Search } from 'lucide-react';
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
import { cn } from '@/lib/utils';

// ============= MAIN COMPONENT =============
export default function StatementGenerator({
    title,
    description,
    feeTypes,
    onGenerate,
    onStudentSearch,
    isGenerating,
}: IStatementGenerator) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <GeneratorContent
                feeTypes={feeTypes}
                onGenerate={onGenerate}
                onStudentSearch={onStudentSearch}
                isGenerating={isGenerating}
            />
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const GeneratorContent = ({
    feeTypes,
    onGenerate,
    onStudentSearch,
    isGenerating,
}: Omit<IStatementGenerator, 'title' | 'description'>) => {
    const [studentQuery, setStudentQuery] = useState('');
    const [feeType, setFeeType] = useState('');
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();

    // TODO: Add validation — end date must be after start date
    const isValid = studentQuery.trim() && startDate && endDate;

    const handleGenerate = () => {
        if (!isValid || !startDate || !endDate) return;
        onGenerate?.({
            studentQuery: studentQuery.trim(),
            feeType: feeType || undefined,
            startDate,
            endDate,
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
                    {/* Student Search */}
                    <div className="space-y-2">
                        <Label htmlFor="stmt-student">
                            Student Name / ID
                        </Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                id="stmt-student"
                                placeholder="Search student..."
                                value={studentQuery}
                                onChange={(e) =>
                                    setStudentQuery(e.target.value)
                                }
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && handleStudentSearch()
                                }
                                className="pl-9"
                            />
                        </div>
                    </div>

                    {/* Fee Type Filter */}
                    <div className="space-y-2">
                        <Label htmlFor="stmt-fee-type">
                            Fee Type{' '}
                            <span className="text-muted-foreground">
                                (optional)
                            </span>
                        </Label>
                        <Select value={feeType} onValueChange={setFeeType}>
                            <SelectTrigger id="stmt-fee-type">
                                <SelectValue placeholder="All fee types" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    All Fee Types
                                </SelectItem>
                                {feeTypes.map((type) => (
                                    <SelectItem
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Start Date */}
                    <DatePickerField
                        label="From Date"
                        date={startDate}
                        onSelect={setStartDate}
                        placeholder="Select start date"
                    />

                    {/* End Date */}
                    <DatePickerField
                        label="To Date"
                        date={endDate}
                        onSelect={setEndDate}
                        placeholder="Select end date"
                    />
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                <Button
                    onClick={handleGenerate}
                    disabled={!isValid || isGenerating}
                >
                    {isGenerating ? (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    ) : (
                        <FileText className="size-4 mr-2" />
                    )}
                    {isGenerating ? 'Generating...' : 'Generate Statement'}
                </Button>
            </CardFooter>
        </>
    );
};

const DatePickerField = ({
    label,
    date,
    onSelect,
    placeholder,
}: {
    label: string;
    date: Date | undefined;
    onSelect: (date: Date | undefined) => void;
    placeholder: string;
}) => (
    <div className="space-y-2">
        <Label>{label}</Label>
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
                    {date ? format(date, 'PPP') : placeholder}
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

interface IStatementPayload {
    studentQuery: string;
    feeType?: string;
    startDate: Date;
    endDate: Date;
}

interface IStatementGenerator {
    title: string;
    description?: string;
    feeTypes: ISelectOption[];
    onGenerate?: (data: IStatementPayload) => void;
    onStudentSearch?: (query: string) => void;
    isGenerating?: boolean;
}
