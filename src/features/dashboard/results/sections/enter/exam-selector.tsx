'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ExamSelector({
    title,
    description,
    exams,
    classes,
    subjects,
    onLoad,
}: IExamSelector) {
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
                    exams={exams}
                    classes={classes}
                    subjects={subjects}
                    onLoad={onLoad}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SelectorForm = ({
    exams,
    classes,
    subjects,
    onLoad,
}: Omit<IExamSelector, 'title' | 'description'>) => {
    const [exam, setExam] = useState('');
    const [cls, setCls] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(false);

    // TODO: Add validation feedback for empty selections
    const canLoad = exam && cls && subject;

    const handleLoad = async () => {
        if (!canLoad) return;
        setLoading(true);
        try {
            await onLoad?.({ exam, class: cls, subject });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="@container grid grid-cols-1 @xl:grid-cols-3 gap-4">
                <SelectorField
                    label="Exam"
                    placeholder="Select exam"
                    options={exams}
                    value={exam}
                    onChange={setExam}
                />
                <SelectorField
                    label="Class"
                    placeholder="Select class"
                    options={classes}
                    value={cls}
                    onChange={setCls}
                />
                <SelectorField
                    label="Subject"
                    placeholder="Select subject"
                    options={subjects}
                    value={subject}
                    onChange={setSubject}
                />
            </div>
            <Button onClick={handleLoad} disabled={!canLoad || loading}>
                {loading && <Loader2 className="size-4 mr-2 animate-spin" />}
                Load Student List
            </Button>
        </div>
    );
};

const SelectorField = ({
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
interface ISelectOption {
    label: string;
    value: string;
}

interface ILoadPayload {
    exam: string;
    class: string;
    subject: string;
}

interface IExamSelector {
    title: string;
    description?: string;
    exams: ISelectOption[];
    classes: ISelectOption[];
    subjects: ISelectOption[];
    onLoad?: (payload: ILoadPayload) => Promise<void> | void;
}
