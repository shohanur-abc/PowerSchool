'use client';

import { useState } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ResultFilters({
    title,
    description,
    exams,
    classes,
    sections,
    onApply,
}: IResultFilters) {
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
                    exams={exams}
                    classes={classes}
                    sections={sections}
                    onApply={onApply}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FilterBar = ({
    exams,
    classes,
    sections,
    onApply,
}: Omit<IResultFilters, 'title' | 'description'>) => {
    const [exam, setExam] = useState('');
    const [cls, setCls] = useState('');
    const [section, setSection] = useState('');
    const [student, setStudent] = useState('');

    // TODO: Add debounced student search with autocomplete
    const handleApply = () => {
        onApply?.({
            exam: exam || undefined,
            class: cls || undefined,
            section: section || undefined,
            student: student || undefined,
        });
    };

    const handleReset = () => {
        setExam('');
        setCls('');
        setSection('');
        setStudent('');
        onApply?.({});
    };

    return (
        <div className="space-y-4">
            <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
                <FilterSelect
                    label="Exam"
                    placeholder="All exams"
                    options={exams}
                    value={exam}
                    onChange={setExam}
                />
                <FilterSelect
                    label="Class"
                    placeholder="All classes"
                    options={classes}
                    value={cls}
                    onChange={setCls}
                />
                <FilterSelect
                    label="Section"
                    placeholder="All sections"
                    options={sections}
                    value={section}
                    onChange={setSection}
                />
                <div className="space-y-2">
                    <label className="text-sm font-medium">Student</label>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                        <Input
                            placeholder="Search student..."
                            value={student}
                            onChange={(e) => setStudent(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>
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

// ============= TYPES =============
interface IFilterOption {
    label: string;
    value: string;
}

interface IFilterValues {
    exam?: string;
    class?: string;
    section?: string;
    student?: string;
}

interface IResultFilters {
    title: string;
    description?: string;
    exams: IFilterOption[];
    classes: IFilterOption[];
    sections: IFilterOption[];
    onApply?: (filters: IFilterValues) => void;
}
