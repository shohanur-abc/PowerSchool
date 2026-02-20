import { GraduationCap, CreditCard, Bell, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function ParentDashboard({ children, attendance, fees, notices, events }: IParentDashboard) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <ChildrenOverview children={children} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AttendanceSummary attendance={attendance} />
                <FeeStatus fees={fees} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentNotices notices={notices} />
                <UpcomingEvents events={events} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s an overview of your children&apos;s progress.</p>
    </div>
);

const ChildrenOverview = ({ children }: { children: IParentDashboard['children'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children.map((child, i) => (
            <Card key={i}>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{child.name}</CardTitle>
                        <GraduationCap className="size-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{child.class}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Attendance</span>
                        <span className="font-medium text-green-600">{child.attendancePercent}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Grade</span>
                        <span className="font-medium">{child.grade}</span>
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
);

const AttendanceSummary = ({ attendance }: { attendance: IParentDashboard['attendance'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Attendance Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {attendance.map((item, i) => (
                <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                        <span>{item.childName}</span>
                        <span className="font-medium">{item.percent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${item.percent}%` }}
                        />
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const FeeStatus = ({ fees }: { fees: IParentDashboard['fees'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
                <CreditCard className="size-4" />
                Fee Status
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {fees.map((fee, i) => (
                <div key={i} className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium">{fee.description}</p>
                        <p className="text-xs text-muted-foreground">{fee.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{fee.amount}</span>
                        <FeeStatusBadge status={fee.status} />
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const FeeStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        paid: { label: 'Paid', className: 'bg-green-100 text-green-700 border-green-200' },
        pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        overdue: { label: 'Overdue', className: 'bg-red-100 text-red-700 border-red-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

const RecentNotices = ({ notices }: { notices: IParentDashboard['notices'] }) => (
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

const UpcomingEvents = ({ events }: { events: IParentDashboard['events'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="size-4" />
                Upcoming Events
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {events.map((event, i) => (
                <div key={i} className="flex items-start gap-3">
                    <div className="rounded bg-blue-100 text-blue-700 px-2 py-1 text-xs font-medium shrink-0">{event.date}</div>
                    <p className="text-sm">{event.title}</p>
                </div>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IParentDashboard {
    children: {
        name: string;
        class: string;
        attendancePercent: number;
        grade: string;
    }[];
    attendance: {
        childName: string;
        percent: number;
    }[];
    fees: {
        description: string;
        amount: string;
        dueDate: string;
        status: string;
    }[];
    notices: {
        title: string;
        date: string;
    }[];
    events: {
        title: string;
        date: string;
    }[];
}
