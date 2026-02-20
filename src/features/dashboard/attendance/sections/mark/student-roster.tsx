'use client';

import { useState, useCallback } from 'react';
import { CheckCircle2, XCircle, Clock, UserCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table';
import { ToggleGroup, ToggleGroupItem, } from '@/components/ui/toggle-group';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function StudentRoster({ title, description, students, onSubmit, isSubmitting, }: IStudentRoster) {
    const [attendance, setAttendance] = useState<Record<string, TStatus>>(
        () => buildInitialState(students)
    );

    const handleStatusChange = useCallback(
        (studentId: string, status: TStatus) => {
            setAttendance((prev) => ({ ...prev, [studentId]: status }));
        },
        []
    );

    const handleBulkMark = useCallback(
        (status: TStatus) => {
            setAttendance(
                Object.fromEntries(
                    students.map((s) => [s.id, status])
                ) as Record<string, TStatus>
            );
        },
        [students]
    );

    // TODO: Add confirmation dialog before submit
    const handleSubmit = () => {
        const records = students.map((s) => ({
            studentId: s.id,
            status: attendance[s.id] || 'present',
        }));
        onSubmit?.(records);
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <BulkActions onBulkMark={handleBulkMark} />
                </div>
            </CardHeader>
            <CardContent>
                <RosterTable
                    students={students}
                    attendance={attendance}
                    onStatusChange={handleStatusChange}
                />
            </CardContent>
            <CardFooter className="justify-between gap-4">
                <AttendanceCounts
                    attendance={attendance}
                    total={students.length}
                />
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Attendance'}
                </Button>
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const BulkActions = ({
    onBulkMark,
}: {
    onBulkMark: (status: TStatus) => void;
}) => (
    <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Mark all:</span>
        <Button
            variant="outline"
            size="sm"
            onClick={() => onBulkMark('present')}
        >
            <CheckCircle2 className="size-3.5 mr-1" />
            Present
        </Button>
        <Button
            variant="outline"
            size="sm"
            onClick={() => onBulkMark('absent')}
        >
            <XCircle className="size-3.5 mr-1" />
            Absent
        </Button>
    </div>
);

const RosterTable = ({
    students,
    attendance,
    onStatusChange,
}: {
    students: IStudent[];
    attendance: Record<string, TStatus>;
    onStatusChange: (studentId: string, status: TStatus) => void;
}) => (
    <ScrollArea className="h-112">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead className="text-center">Roll No</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {students.map((student, i) => (
                    <StudentRow
                        key={student.id}
                        index={i + 1}
                        student={student}
                        status={attendance[student.id] || 'present'}
                        onStatusChange={onStatusChange}
                    />
                ))}
            </TableBody>
        </Table>
    </ScrollArea>
);

const StudentRow = ({
    index,
    student,
    status,
    onStatusChange,
}: {
    index: number;
    student: IStudent;
    status: TStatus;
    onStatusChange: (studentId: string, status: TStatus) => void;
}) => (
    <TableRow>
        <TableCell className="text-muted-foreground tabular-nums">
            {index}
        </TableCell>
        <TableCell>
            <div className="flex items-center gap-2.5">
                <Avatar>
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>
                        {getInitials(student.name)}
                    </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">{student.name}</span>
            </div>
        </TableCell>
        <TableCell className="text-center tabular-nums">
            {student.rollNo}
        </TableCell>
        <TableCell className="text-center">
            <StatusToggle
                studentId={student.id}
                value={status}
                onChange={onStatusChange}
            />
        </TableCell>
    </TableRow>
);

const StatusToggle = ({
    studentId,
    value,
    onChange,
}: {
    studentId: string;
    value: TStatus;
    onChange: (studentId: string, status: TStatus) => void;
}) => (
    <ToggleGroup
        type="single"
        value={value}
        onValueChange={(v) => {
            if (v) onChange(studentId, v as TStatus);
        }}
        className="justify-center"
    >
        <ToggleGroupItem
            value="present"
            aria-label="Present"
            className="data-[state=on]:bg-emerald-100 data-[state=on]:text-emerald-700"
        >
            <CheckCircle2 className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
            value="absent"
            aria-label="Absent"
            className="data-[state=on]:bg-red-100 data-[state=on]:text-red-700"
        >
            <XCircle className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
            value="late"
            aria-label="Late"
            className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700"
        >
            <Clock className="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
            value="excused"
            aria-label="Excused"
            className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700"
        >
            <UserCheck className="size-4" />
        </ToggleGroupItem>
    </ToggleGroup>
);

const AttendanceCounts = ({
    attendance,
    total,
}: {
    attendance: Record<string, TStatus>;
    total: number;
}) => {
    const counts = getCounts(attendance);

    return (
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>Total: {total}</span>
            <Badge variant="outline" className="gap-1 text-emerald-700">
                <CheckCircle2 className="size-3" />
                {counts.present}
            </Badge>
            <Badge variant="outline" className="gap-1 text-red-700">
                <XCircle className="size-3" />
                {counts.absent}
            </Badge>
            <Badge variant="outline" className="gap-1 text-amber-700">
                <Clock className="size-3" />
                {counts.late}
            </Badge>
            <Badge variant="outline" className="gap-1 text-blue-700">
                <UserCheck className="size-3" />
                {counts.excused}
            </Badge>
        </div>
    );
};

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

const buildInitialState = (students: IStudent[]) =>
    Object.fromEntries(
        students.map((s) => [s.id, s.defaultStatus || 'present'])
    ) as Record<string, TStatus>;

const getCounts = (attendance: Record<string, TStatus>) => {
    const values = Object.values(attendance);
    return {
        present: values.filter((v) => v === 'present').length,
        absent: values.filter((v) => v === 'absent').length,
        late: values.filter((v) => v === 'late').length,
        excused: values.filter((v) => v === 'excused').length,
    };
};

// ============= TYPES =============
type TStatus = 'present' | 'absent' | 'late' | 'excused';

interface IStudent {
    id: string;
    name: string;
    avatar: string;
    rollNo: string;
    defaultStatus?: TStatus;
}

interface IAttendanceSubmission {
    studentId: string;
    status: TStatus;
}

interface IStudentRoster {
    title: string;
    description?: string;
    students: IStudent[];
    onSubmit?: (records: IAttendanceSubmission[]) => void;
    isSubmitting?: boolean;
}
