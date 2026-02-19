'use client';

import { useState } from 'react';
import { Download, Eye, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ReportCardGenerator({
    title,
    description,
    exams,
    classes,
    templates,
    onGenerate,
    onDownload,
}: IReportCardGenerator) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <GeneratorForm
                    exams={exams}
                    classes={classes}
                    templates={templates}
                    onGenerate={onGenerate}
                    onDownload={onDownload}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const GeneratorForm = ({
    exams,
    classes,
    templates,
    onGenerate,
    onDownload,
}: Omit<IReportCardGenerator, 'title' | 'description'>) => {
    const [exam, setExam] = useState('');
    const [cls, setCls] = useState('');
    const [template, setTemplate] = useState('');
    const [includeAttendance, setIncludeAttendance] = useState(true);
    const [includeRemarks, setIncludeRemarks] = useState(true);
    const [includePhoto, setIncludePhoto] = useState(false);
    const [generating, setGenerating] = useState(false);

    // TODO: Add bulk download progress indicator
    const canGenerate = exam && cls && template;

    const handleGenerate = async () => {
        if (!canGenerate) return;
        setGenerating(true);
        try {
            await onGenerate?.({
                exam,
                class: cls,
                template,
                includeAttendance,
                includeRemarks,
                includePhoto,
            });
        } finally {
            setGenerating(false);
        }
    };

    const handleDownload = () => {
        if (!canGenerate) return;
        onDownload?.({
            exam,
            class: cls,
            template,
            includeAttendance,
            includeRemarks,
            includePhoto,
        });
    };

    return (
        <div className="space-y-6">
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
                    label="Template"
                    placeholder="Select template"
                    options={templates}
                    value={template}
                    onChange={setTemplate}
                />
            </div>

            <div className="space-y-3">
                <p className="text-sm font-medium">Options</p>
                <div className="@container grid grid-cols-1 @xl:grid-cols-3 gap-4">
                    <ToggleOption
                        id="attendance"
                        label="Include Attendance"
                        checked={includeAttendance}
                        onChange={setIncludeAttendance}
                    />
                    <ToggleOption
                        id="remarks"
                        label="Include Remarks"
                        checked={includeRemarks}
                        onChange={setIncludeRemarks}
                    />
                    <ToggleOption
                        id="photo"
                        label="Include Photo"
                        checked={includePhoto}
                        onChange={setIncludePhoto}
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button
                    onClick={handleGenerate}
                    disabled={!canGenerate || generating}
                >
                    {generating ? (
                        <Loader2 className="size-4 mr-1.5 animate-spin" />
                    ) : (
                        <Eye className="size-4 mr-1.5" />
                    )}
                    Generate Preview
                </Button>
                {onDownload && (
                    <Button
                        variant="outline"
                        onClick={handleDownload}
                        disabled={!canGenerate}
                    >
                        <Download className="size-4 mr-1.5" />
                        Download All
                    </Button>
                )}
            </div>
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

const ToggleOption = ({
    id,
    label,
    checked,
    onChange,
}: {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}) => (
    <div className="flex items-center gap-2">
        <Checkbox
            id={id}
            checked={checked}
            onCheckedChange={(v) => onChange(v === true)}
        />
        <Label htmlFor={id} className="text-sm cursor-pointer">
            {label}
        </Label>
    </div>
);

// ============= TYPES =============
interface ISelectOption {
    label: string;
    value: string;
}

interface IGeneratePayload {
    exam: string;
    class: string;
    template: string;
    includeAttendance: boolean;
    includeRemarks: boolean;
    includePhoto: boolean;
}

interface IReportCardGenerator {
    title: string;
    description?: string;
    exams: ISelectOption[];
    classes: ISelectOption[];
    templates: ISelectOption[];
    onGenerate?: (payload: IGeneratePayload) => Promise<void> | void;
    onDownload?: (payload: IGeneratePayload) => void;
}
