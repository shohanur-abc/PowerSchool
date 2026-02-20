import { BookOpen, Clock, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function TeacherDashboard({ classes, pendingMarkings, studentStats, schedule }: ITeacherDashboard) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <StatsRow classes={classes} pendingMarkings={pendingMarkings} studentStats={studentStats} />
            <TodayClasses schedule={schedule} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PendingMarkingsList pendingMarkings={pendingMarkings} />
                <StudentPerformance studentStats={studentStats} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s your teaching overview for today.</p>
    </div>
);

const StatsRow = ({ classes, pendingMarkings, studentStats }: Pick<ITeacherDashboard, 'classes' | 'pendingMarkings' | 'studentStats'>) => {
    const totalStudents = studentStats.reduce((sum, s) => sum + s.totalStudents, 0);
    const avgGrade = (studentStats.reduce((sum, s) => sum + s.avgGrade, 0) / (studentStats.length || 1)).toFixed(1);
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Today's Classes" value={String(classes.length)} icon={<BookOpen className="size-5 text-blue-500" />} />
            <StatCard label="Pending Markings" value={String(pendingMarkings.length)} icon={<Clock className="size-5 text-orange-500" />} />
            <StatCard label="Total Students" value={String(totalStudents)} icon={<Users className="size-5 text-green-500" />} />
            <StatCard label="Avg Class Grade" value={`${avgGrade}%`} icon={<TrendingUp className="size-5 text-purple-500" />} />
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

const TodayClasses = ({ schedule }: { schedule: ITeacherDashboard['schedule'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Today&apos;s Classes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Students</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {schedule.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{item.time}</TableCell>
                            <TableCell>{item.class}</TableCell>
                            <TableCell>{item.subject}</TableCell>
                            <TableCell className="text-muted-foreground">{item.room}</TableCell>
                            <TableCell>{item.students}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const PendingMarkingsList = ({ pendingMarkings }: { pendingMarkings: ITeacherDashboard['pendingMarkings'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Pending Markings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {pendingMarkings.map((marking, i) => (
                <div key={i} className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-sm font-medium">{marking.title}</p>
                        <p className="text-xs text-muted-foreground">{marking.class} · {marking.type}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0 bg-orange-100 text-orange-700 border-orange-200">
                        {marking.submissions} submissions
                    </Badge>
                </div>
            ))}
        </CardContent>
    </Card>
);

const StudentPerformance = ({ studentStats }: { studentStats: ITeacherDashboard['studentStats'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Student Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {studentStats.map((stat, i) => (
                <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium">{stat.class}</span>
                        <span className="text-muted-foreground">{stat.avgGrade}% avg</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{stat.totalStudents} students</span>
                        <span>{stat.passRate}% pass rate</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-blue-500" style={{ width: `${stat.avgGrade}%` }} />
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface ITeacherDashboard {
    classes: {
        name: string;
        subject: string;
    }[];
    pendingMarkings: {
        title: string;
        class: string;
        type: string;
        submissions: number;
    }[];
    studentStats: {
        class: string;
        totalStudents: number;
        avgGrade: number;
        passRate: number;
    }[];
    schedule: {
        time: string;
        class: string;
        subject: string;
        room: string;
        students: number;
    }[];
}
