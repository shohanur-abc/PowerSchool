import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
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
export default function ReportCardPreview({
    school,
    student,
    examName,
    subjects,
    totalMarks,
    maxMarks,
    percentage,
    grade,
    result,
    rank,
    attendance,
    remarks,
    gradeScaleLegend,
}: IReportCardPreview) {
    return (
        <Card className="print:shadow-none print:border print:border-gray-300 max-w-3xl mx-auto">
            <CardHeader className="text-center space-y-2 pb-4">
                <SchoolHeader school={school} />
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {examName}
                </p>
            </CardHeader>
            <CardContent className="space-y-6">
                <StudentDetails student={student} />
                <Separator />
                <SubjectMarksTable subjects={subjects} />

                <ResultSummary
                    totalMarks={totalMarks}
                    maxMarks={maxMarks}
                    percentage={percentage}
                    grade={grade}
                    result={result}
                    rank={rank}
                />

                {attendance && (
                    <>
                        <Separator />
                        <AttendanceSummary attendance={attendance} />
                    </>
                )}

                {remarks && (
                    <>
                        <Separator />
                        <RemarksSection remarks={remarks} />
                    </>
                )}

                {gradeScaleLegend && gradeScaleLegend.length > 0 && (
                    <>
                        <Separator />
                        <GradeScaleLegend legend={gradeScaleLegend} />
                    </>
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SchoolHeader = ({ school }: { school: ISchoolInfo }) => (
    <div className="flex flex-col items-center gap-2">
        {school.logo && (
            <Image
                src={school.logo}
                alt={school.name}
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
            />
        )}
        <div>
            <h2 className="text-xl font-bold">{school.name}</h2>
            <p className="text-xs text-muted-foreground">{school.address}</p>
            {school.contact && (
                <p className="text-xs text-muted-foreground">
                    {school.contact}
                </p>
            )}
        </div>
    </div>
);

const StudentDetails = ({ student }: { student: IReportStudent }) => (
    <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
            {student.avatar && (
                <Avatar size="lg">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>
                        {getInitials(student.name)}
                    </AvatarFallback>
                </Avatar>
            )}
            <div>
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm text-muted-foreground">
                    {student.fatherName && `S/D of ${student.fatherName}`}
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-y-1 text-sm">
            <DetailItem label="Roll No" value={student.rollNo} />
            <DetailItem label="Class" value={student.className} />
            {student.section && (
                <DetailItem label="Section" value={student.section} />
            )}
            {student.admissionNo && (
                <DetailItem label="Adm. No" value={student.admissionNo} />
            )}
        </div>
    </div>
);

const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <>
        <span className="text-muted-foreground">{label}:</span>
        <span className="font-medium">{value}</span>
    </>
);

const SubjectMarksTable = ({
    subjects,
}: {
    subjects: IReportSubjectMark[];
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-8">#</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">Max</TableHead>
                    <TableHead className="text-center">Obtained</TableHead>
                    <TableHead className="text-center">Grade</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {subjects.map((subject, i) => (
                    <TableRow key={subject.name}>
                        <TableCell className="tabular-nums text-muted-foreground">
                            {i + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                            {subject.name}
                        </TableCell>
                        <TableCell className="text-center tabular-nums">
                            {subject.maxMarks}
                        </TableCell>
                        <TableCell className="text-center font-semibold tabular-nums">
                            {subject.obtained}
                        </TableCell>
                        <TableCell className="text-center">
                            <Badge
                                className={gradeVariants({
                                    grade: normalizeGrade(subject.grade),
                                })}
                            >
                                {subject.grade}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell />
                    <TableCell className="font-semibold">Total</TableCell>
                    <TableCell className="text-center font-semibold tabular-nums">
                        {subjects.reduce((s, sub) => s + sub.maxMarks, 0)}
                    </TableCell>
                    <TableCell className="text-center font-semibold tabular-nums">
                        {subjects.reduce((s, sub) => s + sub.obtained, 0)}
                    </TableCell>
                    <TableCell />
                </TableRow>
            </TableFooter>
        </Table>
    </div>
);

const ResultSummary = ({
    totalMarks,
    maxMarks,
    percentage,
    grade,
    result,
    rank,
}: {
    totalMarks: number;
    maxMarks: number;
    percentage: number;
    grade: string;
    result: 'pass' | 'fail';
    rank: number;
}) => (
    <div className="@container grid grid-cols-2 @xl:grid-cols-4 gap-4 text-center">
        <SummaryBox label="Total" value={`${totalMarks} / ${maxMarks}`} />
        <SummaryBox label="Percentage" value={`${percentage}%`} />
        <SummaryBox label="Grade" value={grade} />
        <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Result</p>
            <Badge className={resultVariants({ result })}>{result}</Badge>
            <p className="text-xs text-muted-foreground">
                Rank: <span className="font-semibold">{rank}</span>
            </p>
        </div>
    </div>
);

const SummaryBox = ({
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

const AttendanceSummary = ({
    attendance,
}: {
    attendance: IAttendanceInfo;
}) => (
    <div className="space-y-2">
        <h4 className="text-sm font-semibold">Attendance Summary</h4>
        <div className="@container grid grid-cols-3 @xl:grid-cols-4 gap-4 text-sm">
            <DetailItem
                label="Working Days"
                value={String(attendance.totalDays)}
            />
            <DetailItem
                label="Present"
                value={String(attendance.present)}
            />
            <DetailItem
                label="Absent"
                value={String(attendance.absent)}
            />
            <DetailItem
                label="Attendance %"
                value={`${attendance.percentage}%`}
            />
        </div>
    </div>
);

const RemarksSection = ({ remarks }: { remarks: IRemarks }) => (
    <div className="space-y-3">
        <h4 className="text-sm font-semibold">Remarks</h4>
        {remarks.teacher && (
            <div className="text-sm">
                <span className="text-muted-foreground">
                    Class Teacher:{' '}
                </span>
                <span>{remarks.teacher}</span>
            </div>
        )}
        {remarks.principal && (
            <div className="text-sm">
                <span className="text-muted-foreground">Principal: </span>
                <span>{remarks.principal}</span>
            </div>
        )}
    </div>
);

const GradeScaleLegend = ({
    legend,
}: {
    legend: IGradeScaleItem[];
}) => (
    <div className="space-y-2">
        <h4 className="text-sm font-semibold">Grade Scale</h4>
        <div className="flex flex-wrap gap-3">
            {legend.map((item) => (
                <span key={item.grade} className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                        {item.grade}
                    </span>{' '}
                    = {item.range}
                </span>
            ))}
        </div>
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
interface ISchoolInfo {
    name: string;
    address: string;
    logo?: string;
    contact?: string;
}

interface IReportStudent {
    name: string;
    avatar?: string;
    rollNo: string;
    className: string;
    section?: string;
    admissionNo?: string;
    fatherName?: string;
}

interface IReportSubjectMark {
    name: string;
    maxMarks: number;
    obtained: number;
    grade: string;
}

interface IAttendanceInfo {
    totalDays: number;
    present: number;
    absent: number;
    percentage: number;
}

interface IRemarks {
    teacher?: string;
    principal?: string;
}

interface IGradeScaleItem {
    grade: string;
    range: string;
}

interface IReportCardPreview {
    school: ISchoolInfo;
    student: IReportStudent;
    examName: string;
    subjects: IReportSubjectMark[];
    totalMarks: number;
    maxMarks: number;
    percentage: number;
    grade: string;
    result: 'pass' | 'fail';
    rank: number;
    attendance?: IAttendanceInfo;
    remarks?: IRemarks;
    gradeScaleLegend?: IGradeScaleItem[];
}
