'use client';

import { useState } from 'react';
import { FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ReportParameters({
    title,
    description,
    reportName,
    fields,
    classes,
    sections,
    formats,
    onGenerate,
}: IReportParameters) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
                {reportName && (
                    <p className="text-sm text-primary font-medium mt-1">
                        {reportName}
                    </p>
                )}
            </CardHeader>
            <CardContent>
                <ParameterForm
                    fields={fields}
                    classes={classes}
                    sections={sections}
                    formats={formats}
                    onGenerate={onGenerate}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ParameterForm = ({
    fields,
    classes,
    sections,
    formats,
    onGenerate,
}: Omit<IReportParameters, 'title' | 'description' | 'reportName'>) => {
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedFormat, setSelectedFormat] = useState('');
    const [dynamicValues, setDynamicValues] = useState<Record<string, string>>(
        {}
    );
    const [generating, setGenerating] = useState(false);

    // TODO: Add form validation with error messages
    const handleDynamicChange = (fieldId: string, value: string) => {
        setDynamicValues((prev) => ({ ...prev, [fieldId]: value }));
    };

    const handleGenerate = async () => {
        setGenerating(true);
        try {
            await onGenerate?.({
                dateFrom,
                dateTo,
                class: selectedClass,
                section: selectedSection,
                format: selectedFormat,
                ...dynamicValues,
            });
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Common date range fields */}
            <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="dateFrom">Date From</Label>
                    <Input
                        id="dateFrom"
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="dateTo">Date To</Label>
                    <Input
                        id="dateTo"
                        type="date"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                    />
                </div>
            </div>

            {/* Common select fields */}
            <div className="@container grid grid-cols-1 @xl:grid-cols-3 gap-4">
                {classes.length > 0 && (
                    <SelectorField
                        label="Class"
                        placeholder="Select class"
                        options={classes}
                        value={selectedClass}
                        onChange={setSelectedClass}
                    />
                )}
                {sections.length > 0 && (
                    <SelectorField
                        label="Section"
                        placeholder="Select section"
                        options={sections}
                        value={selectedSection}
                        onChange={setSelectedSection}
                    />
                )}
                {formats.length > 0 && (
                    <SelectorField
                        label="Format"
                        placeholder="Select format"
                        options={formats}
                        value={selectedFormat}
                        onChange={setSelectedFormat}
                    />
                )}
            </div>

            {/* Dynamic fields based on report type */}
            {fields.length > 0 && (
                <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-4">
                    {fields.map((field) => (
                        <DynamicField
                            key={field.id}
                            field={field}
                            value={dynamicValues[field.id] || ''}
                            onChange={(val) =>
                                handleDynamicChange(field.id, val)
                            }
                        />
                    ))}
                </div>
            )}

            <Button onClick={handleGenerate} disabled={generating}>
                {generating ? (
                    <Loader2 className="size-4 mr-1.5 animate-spin" />
                ) : (
                    <FileText className="size-4 mr-1.5" />
                )}
                Generate Report
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
        <Label>{label}</Label>
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

const DynamicField = ({
    field,
    value,
    onChange,
}: {
    field: IDynamicField;
    value: string;
    onChange: (value: string) => void;
}) => {
    if (field.type === 'select' && field.options) {
        return (
            <SelectorField
                label={field.label}
                placeholder={`Select ${field.label.toLowerCase()}`}
                options={field.options}
                value={value}
                onChange={onChange}
            />
        );
    }

    return (
        <div className="space-y-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
                id={field.id}
                type={field.type === 'date' ? 'date' : 'text'}
                placeholder={field.placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

// ============= TYPES =============
interface ISelectOption {
    label: string;
    value: string;
}

interface IDynamicField {
    id: string;
    label: string;
    type: 'text' | 'date' | 'select';
    placeholder?: string;
    options?: ISelectOption[];
}

interface IReportParameters {
    title: string;
    description?: string;
    reportName?: string;
    fields: IDynamicField[];
    classes: ISelectOption[];
    sections: ISelectOption[];
    formats: ISelectOption[];
    onGenerate?: (params: Record<string, string>) => Promise<void>;
}
