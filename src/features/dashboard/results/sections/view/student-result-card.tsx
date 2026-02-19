'use client';

import { Printer } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function StudentResultCard({
    student,
    examName,
    subjects,
    totalMarks,
    maxMarks,
    percentage,
    grade,
    result,
    rank,
    totalStudents,
    onPrint,
}: IStudentResultCard) {
    return (
        <Card className="print:shadow-none print:border-0">
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{examName}</CardTitle>
                        <CardDescription>Individual Result</CardDescription>
                    </div>
                    {onPrint && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onPrint}
                            className="print:hidden"
                        >
                            <Printer className="size-4 mr-1.5" />
                            Print
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <StudentInfo student={student} />
                <Separator />
                <SubjectMarksTable subjects={subjects} />
                <Separator />
                <SummaryRow
                    totalMarks={totalMarks}
                    maxMarks={maxMarks}
                    percentage={percentage}
                    grade={grade}
                    result={result}
                    rank={rank}
                    totalStudents={totalStudents}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const StudentInfo = ({ student }: { student: IStudentInfo }) => (
    <div className="flex items-center gap-4">
        <Avatar size="lg">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>{getInitials(student.name)}</AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
            <h3 className="font-semibold text-lg">{student.name}</h3>
            <p className="text-sm text-muted-foreground">
                {student.className} • Roll No: {student.rollNo}
            </p>
            {student.section && (
                <p className="text-xs text-muted-foreground">
                    Section: {student.section}
                </p>
            )}
        </div>
    </div>
);

const SubjectMarksTable = ({ subjects }: { subjects: ISubjectMark[] }) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Written</TableHead>
                    <TableHead className="text-center">Practical</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="text-center">Max</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {subjects.map((subject) => (
                    <SubjectRow key={subject.name} {...subject} />
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className="font-semibold">Grand Total</TableCell>
                    <TableCell className="text-center tabular-nums font-semibold">
                        {subjects.reduce((s, sub) => s + sub.written, 0)}
                    </TableCell>
                    <TableCell className="text-center tabular-nums font-semibold">
                        {subjects.reduce((s, sub) => s + sub.practical, 0)}
                    </TableCell>
                    <TableCell className="text-center tabular-nums font-semibold">
                        {subjects.reduce((s, sub) => s + sub.total, 0)}
                    </TableCell>
                    <TableCell className="text-center tabular-nums font-semibold">
                        {subjects.reduce((s, sub) => s + sub.maxMarks, 0)}
                    </TableCell>
                    <TableCell />
                </TableRow>
            </TableFooter>
        </Table>
    </div>
);

const SubjectRow = ({
    name,
    written,
    practical,
    total,
    maxMarks,
    grade,
}: ISubjectMark) => (
    <TableRow>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell className="text-center tabular-nums">{written}</TableCell>
        <TableCell className="text-center tabular-nums">{practical}</TableCell>
        <TableCell className="text-center font-semibold tabular-nums">
            {total}
        </TableCell>
        <TableCell className="text-center tabular-nums text-muted-foreground">
            {maxMarks}
        </TableCell>
        <TableCell className="text-center">
            <Badge
                className={gradeVariants({
                    grade: normalizeGrade(grade),
                })}
            >
                {grade}
            </Badge>
        </TableCell>
    </TableRow>
);

const SummaryRow = ({
    totalMarks,
    maxMarks,
    percentage,
    grade,
    result,
    rank,
    totalStudents,
}: Pick<
    IStudentResultCard,
    | 'totalMarks'
    | 'maxMarks'
    | 'percentage'
    | 'grade'
    | 'result'
    | 'rank'
    | 'totalStudents'
>) => (
    <div className="@container grid grid-cols-2 @xl:grid-cols-3 @4xl:grid-cols-5 gap-4">
        <SummaryItem label="Total Marks" value={`${totalMarks}/${maxMarks}`} />
        <SummaryItem label="Percentage" value={`${percentage}%`} />
        <SummaryItem label="Grade" value={grade} />
        <SummaryItem
            label="Rank"
            value={`${rank}${totalStudents ? ` / ${totalStudents}` : ''}`}
        />
        <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Result</p>
            <Badge className={resultVariants({ result })}>{result}</Badge>
        </div>
    </div>
);

const SummaryItem = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-lg font-bold tabular-nums">{value}</p>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

const normalizeGrade = (
    grade: string
): 'aPlus' | 'a' | 'bPlus' | 'b' | 'c' | 'f' => {
    const map: Record<string, 'aPlus' | 'a' | 'bPlus' | 'b' | 'c' | 'f'> = {
        'A+': 'aPlus',
        A: 'a',
        'B+': 'bPlus',
        B: 'b',
        C: 'c',
        F: 'f',
    };
    return map[grade] ?? 'c';
};

// ============= VARIANTS =============
const gradeVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        grade: {
            aPlus: 'bg-emerald-600 text-white hover:bg-emerald-700',
            a: 'bg-green-500 text-white hover:bg-green-600',
            bPlus: 'bg-blue-500 text-white hover:bg-blue-600',
            b: 'bg-sky-500 text-white hover:bg-sky-600',
            c: 'bg-amber-500 text-white hover:bg-amber-600',
            f: 'bg-red-600 text-white hover:bg-red-700',
        },
    },
    defaultVariants: {
        grade: 'c',
    },
});

const resultVariants = cva('text-xs px-2 py-0.5', {
    variants: {
        result: {
            pass: 'bg-emerald-600 text-white hover:bg-emerald-700',
            fail: 'bg-red-600 text-white hover:bg-red-700',
        },
    },
    defaultVariants: {
        result: 'pass',
    },
});

// ============= TYPES =============
interface IStudentInfo {
    name: string;
    avatar?: string;
    className: string;
    rollNo: string;
    section?: string;
}

interface ISubjectMark {
    name: string;
    written: number;
    practical: number;
    total: number;
    maxMarks: number;
    grade: string;
}

interface IStudentResultCard {
    student: IStudentInfo;
    examName: string;
    subjects: ISubjectMark[];
    totalMarks: number;
    maxMarks: number;
    percentage: number;
    grade: string;
    result: 'pass' | 'fail';
    rank: number;
    totalStudents?: number;
    onPrint?: () => void;
}
