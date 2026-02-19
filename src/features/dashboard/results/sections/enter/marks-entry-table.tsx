'use client';

import { useState, useCallback, useMemo } from 'react';
import {
    Save,
    Send,
    AlertCircle,
    CheckCircle2,
    FileSpreadsheet,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function MarksEntryTable({
    title,
    description,
    students,
    maxWritten,
    maxPractical,
    gradeScale,
    onSave,
    onSubmit,
}: IMarksEntryTable) {
    const [entries, setEntries] = useState<IMarksEntry[]>(() =>
        students.map((s) => ({
            studentId: s.id,
            written: s.written ?? '',
            practical: s.practical ?? '',
        }))
    );

    const handleChange = useCallback(
        (studentId: string, field: 'written' | 'practical', value: string) => {
            // TODO: Add debounced auto-save support
            const numVal = value === '' ? '' : value;
            setEntries((prev) =>
                prev.map((e) =>
                    e.studentId === studentId ? { ...e, [field]: numVal } : e
                )
            );
        },
        []
    );

    const computedEntries = useMemo(
        () =>
            entries.map((entry) => {
                const written = parseFloat(String(entry.written)) || 0;
                const practical = parseFloat(String(entry.practical)) || 0;
                const total = written + practical;
                const maxTotal = maxWritten + maxPractical;
                const percentage = maxTotal > 0 ? (total / maxTotal) * 100 : 0;
                const grade = getGrade(percentage, gradeScale);
                return { ...entry, total, percentage, grade };
            }),
        [entries, maxWritten, maxPractical, gradeScale]
    );

    const hasErrors = useMemo(
        () =>
            computedEntries.some((e) => {
                const w = parseFloat(String(e.written)) || 0;
                const p = parseFloat(String(e.practical)) || 0;
                return w > maxWritten || p > maxPractical || w < 0 || p < 0;
            }),
        [computedEntries, maxWritten, maxPractical]
    );

    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onSave?.(entries)}
                        >
                            <Save className="size-4 mr-1.5" />
                            Save Draft
                        </Button>
                        <Button
                            size="sm"
                            disabled={hasErrors}
                            onClick={() => onSubmit?.(entries)}
                        >
                            <Send className="size-4 mr-1.5" />
                            Submit
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {students.length > 0 ? (
                    <MarksTable
                        students={students}
                        entries={computedEntries}
                        maxWritten={maxWritten}
                        maxPractical={maxPractical}
                        onChange={handleChange}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const MarksTable = ({
    students,
    entries,
    maxWritten,
    maxPractical,
    onChange,
}: {
    students: IStudentEntry[];
    entries: IComputedEntry[];
    maxWritten: number;
    maxPractical: number;
    onChange: (
        studentId: string,
        field: 'written' | 'practical',
        value: string
    ) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead className="w-16">Roll No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="text-center w-32">
                        Written ({maxWritten})
                    </TableHead>
                    <TableHead className="text-center w-32">
                        Practical ({maxPractical})
                    </TableHead>
                    <TableHead className="text-center w-20">Total</TableHead>
                    <TableHead className="text-center w-20">Grade</TableHead>
                    <TableHead className="text-center w-16">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {students.map((student, i) => (
                    <MarkRow
                        key={student.id}
                        student={student}
                        entry={entries[i]}
                        maxWritten={maxWritten}
                        maxPractical={maxPractical}
                        onChange={onChange}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const MarkRow = ({
    student,
    entry,
    maxWritten,
    maxPractical,
    onChange,
}: {
    student: IStudentEntry;
    entry: IComputedEntry;
    maxWritten: number;
    maxPractical: number;
    onChange: (
        studentId: string,
        field: 'written' | 'practical',
        value: string
    ) => void;
}) => {
    const writtenVal = parseFloat(String(entry.written)) || 0;
    const practicalVal = parseFloat(String(entry.practical)) || 0;
    const isWrittenInvalid = writtenVal > maxWritten || writtenVal < 0;
    const isPracticalInvalid = practicalVal > maxPractical || practicalVal < 0;
    const isValid =
        !isWrittenInvalid &&
        !isPracticalInvalid &&
        entry.written !== '' &&
        entry.practical !== '';

    return (
        <TableRow>
            <TableCell className="font-medium tabular-nums">
                {student.rollNo}
            </TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell className="text-center">
                <Input
                    type="number"
                    min={0}
                    max={maxWritten}
                    value={entry.written}
                    onChange={(e) =>
                        onChange(student.id, 'written', e.target.value)
                    }
                    className={`w-20 mx-auto text-center tabular-nums ${isWrittenInvalid
                        ? 'border-destructive focus-visible:ring-destructive'
                        : ''
                        }`}
                />
            </TableCell>
            <TableCell className="text-center">
                <Input
                    type="number"
                    min={0}
                    max={maxPractical}
                    value={entry.practical}
                    onChange={(e) =>
                        onChange(student.id, 'practical', e.target.value)
                    }
                    className={`w-20 mx-auto text-center tabular-nums ${isPracticalInvalid
                        ? 'border-destructive focus-visible:ring-destructive'
                        : ''
                        }`}
                />
            </TableCell>
            <TableCell className="text-center font-semibold tabular-nums">
                {entry.total}
            </TableCell>
            <TableCell className="text-center">
                <Badge variant="outline" className="text-xs px-1.5 py-0">
                    {entry.grade}
                </Badge>
            </TableCell>
            <TableCell className="text-center">
                {isValid ? (
                    <CheckCircle2 className="size-4 text-emerald-500 mx-auto" />
                ) : (
                    <AlertCircle className="size-4 text-amber-500 mx-auto" />
                )}
            </TableCell>
        </TableRow>
    );
};

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileSpreadsheet className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No students loaded. Select an exam, class, and subject to begin.
        </p>
    </div>
);

// ============= HELPERS =============
const getGrade = (percentage: number, scale: IGradeScale[]): string => {
    const sorted = [...scale].sort((a, b) => b.min - a.min);
    for (const grade of sorted) {
        if (percentage >= grade.min) return grade.grade;
    }
    return 'F';
};

// ============= TYPES =============
interface IGradeScale {
    grade: string;
    min: number;
}

interface IStudentEntry {
    id: string;
    rollNo: string;
    name: string;
    written?: number | '';
    practical?: number | '';
}

interface IMarksEntry {
    studentId: string;
    written: number | '';
    practical: number | '';
}

interface IComputedEntry extends IMarksEntry {
    total: number;
    percentage: number;
    grade: string;
}

interface IMarksEntryTable {
    title: string;
    description?: string;
    students: IStudentEntry[];
    maxWritten: number;
    maxPractical: number;
    gradeScale: IGradeScale[];
    onSave?: (entries: IMarksEntry[]) => void;
    onSubmit?: (entries: IMarksEntry[]) => void;
}
