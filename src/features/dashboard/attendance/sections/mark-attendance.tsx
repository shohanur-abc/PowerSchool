import { Calendar, CheckCircle, XCircle, Clock, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function MarkAttendance({ classOptions, selectedClass, date, students }: IMarkAttendance) {
    return (
        <div className="space-y-6">
            <Header />
            <SessionSelector classOptions={classOptions} selectedClass={selectedClass} date={date} studentCount={students.length} />
            <StudentTable students={students} />
            <FormActions total={students.length} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Mark Attendance</h1>
        <p className="text-muted-foreground mt-1">Record daily attendance for your class</p>
    </div>
);

const SessionSelector = ({ classOptions, selectedClass, date, studentCount }: Pick<IMarkAttendance, 'classOptions' | 'selectedClass' | 'date' | 'studentCount'>) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Session Details</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Class / Section</p>
                    <div className="flex flex-wrap gap-2">
                        {classOptions.map((cls, i) => (
                            <Badge
                                key={i}
                                variant={cls === selectedClass ? 'default' : 'outline'}
                                className="cursor-pointer"
                            >
                                {cls}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Date</p>
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="size-4 text-muted-foreground" />
                        <span className="font-medium">{date}</span>
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Summary</p>
                    <p className="text-sm text-muted-foreground">
                        Total <span className="font-semibold text-foreground">{studentCount}</span> students
                    </p>
                </div>
            </div>
        </CardContent>
    </Card>
);

const StudentTable = ({ students }: { students: IMarkAttendance['students'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Student List</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-16">Roll No</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Remarks</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map((student, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-mono text-muted-foreground">{student.rollNo}</TableCell>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell>
                                <StatusToggle status={student.status} />
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                                {student.remarks ?? '—'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const StatusToggle = ({ status }: { status: string }) => (
    <div className="flex items-center gap-1">
        <Button
            size="sm"
            variant={status === 'present' ? 'default' : 'outline'}
            className="h-7 gap-1 text-xs"
        >
            <CheckCircle className="size-3" /> Present
        </Button>
        <Button
            size="sm"
            variant={status === 'absent' ? 'destructive' : 'outline'}
            className="h-7 gap-1 text-xs"
        >
            <XCircle className="size-3" /> Absent
        </Button>
        <Button
            size="sm"
            variant={status === 'late' ? 'secondary' : 'outline'}
            className="h-7 gap-1 text-xs"
        >
            <Clock className="size-3" /> Late
        </Button>
    </div>
);

const FormActions = ({ total }: { total: number }) => (
    <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{total} students listed</p>
        <div className="flex gap-3">
            <Button variant="outline">Reset</Button>
            <Button className="gap-2">
                <Save className="size-4" />
                Save Attendance
            </Button>
        </div>
    </div>
);

// ============= TYPES =============
interface IMarkAttendance {
    classOptions: string[];
    selectedClass: string;
    date: string;
    studentCount: number;
    students: {
        rollNo: string;
        name: string;
        status: 'present' | 'absent' | 'late';
        remarks?: string;
    }[];
}
