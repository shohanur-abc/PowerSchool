import { CheckCircle, BookOpen, Clock, AlertCircle, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function StudentDashboard({ schedule, grades, attendance, assignments, notices }: IStudentDashboard) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <StatsRow attendance={attendance} grades={grades} assignments={assignments} />
            <TodaySchedule schedule={schedule} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GradesOverview grades={grades} />
                <PendingAssignments assignments={assignments} />
            </div>
            <RecentNotices notices={notices} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s your academic overview.</p>
    </div>
);

const StatsRow = ({ attendance, grades, assignments }: Pick<IStudentDashboard, 'attendance' | 'grades' | 'assignments'>) => {
    const gpa = (grades.reduce((sum, g) => sum + g.percentage, 0) / (grades.length || 1)).toFixed(1);
    const pending = assignments.filter(a => a.status === 'pending').length;
    const upcoming = assignments.filter(a => a.status === 'upcoming').length;
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Attendance" value={`${attendance.percent}%`} icon={<CheckCircle className="size-5 text-green-500" />} />
            <StatCard label="Average Score" value={`${gpa}%`} icon={<BookOpen className="size-5 text-blue-500" />} />
            <StatCard label="Pending Assignments" value={String(pending)} icon={<Clock className="size-5 text-orange-500" />} />
            <StatCard label="Upcoming Tests" value={String(upcoming)} icon={<AlertCircle className="size-5 text-purple-500" />} />
        </div>
    );
};

const StatCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
    <Card>
        <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">{label}</p>
                {icon}
            </div>
            <p className="text-3xl font-bold">{value}</p>
        </CardContent>
    </Card>
);

const TodaySchedule = ({ schedule }: { schedule: IStudentDashboard['schedule'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Today&apos;s Schedule</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Period</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Teacher</TableHead>
                        <TableHead>Room</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {schedule.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{item.period}</TableCell>
                            <TableCell>{item.subject}</TableCell>
                            <TableCell className="text-muted-foreground">{item.teacher}</TableCell>
                            <TableCell className="text-muted-foreground">{item.room}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const GradesOverview = ({ grades }: { grades: IStudentDashboard['grades'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Grades Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {grades.map((grade, i) => (
                <div key={i} className="flex items-center justify-between">
                    <span className="text-sm">{grade.subject}</span>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{grade.percentage}%</span>
                        <GradeBadge grade={grade.grade} />
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const GradeBadge = ({ grade }: { grade: string }) => {
    const map: Record<string, string> = {
        'A+': 'bg-green-100 text-green-700 border-green-200',
        A: 'bg-green-100 text-green-700 border-green-200',
        'A-': 'bg-green-100 text-green-700 border-green-200',
        B: 'bg-blue-100 text-blue-700 border-blue-200',
        C: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        D: 'bg-red-100 text-red-700 border-red-200',
    };
    return <Badge variant="outline" className={map[grade] ?? ''}>{grade}</Badge>;
};

const PendingAssignments = ({ assignments }: { assignments: IStudentDashboard['assignments'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Pending Assignments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {assignments.map((assignment, i) => (
                <div key={i} className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-sm font-medium">{assignment.title}</p>
                        <p className="text-xs text-muted-foreground">{assignment.subject}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0 bg-orange-100 text-orange-700 border-orange-200">
                        {assignment.dueDate}
                    </Badge>
                </div>
            ))}
        </CardContent>
    </Card>
);

const RecentNotices = ({ notices }: { notices: IStudentDashboard['notices'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
                <Bell className="size-4" />
                Recent Notices
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {notices.map((notice, i) => (
                <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 size-2 rounded-full bg-blue-500 shrink-0" />
                    <div>
                        <p className="text-sm font-medium">{notice.title}</p>
                        <p className="text-xs text-muted-foreground">{notice.date}</p>
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IStudentDashboard {
    schedule: {
        period: string;
        subject: string;
        teacher: string;
        room: string;
    }[];
    grades: {
        subject: string;
        grade: string;
        percentage: number;
    }[];
    attendance: {
        percent: number;
    };
    assignments: {
        title: string;
        subject: string;
        dueDate: string;
        status: string;
    }[];
    notices: {
        title: string;
        date: string;
    }[];
}
