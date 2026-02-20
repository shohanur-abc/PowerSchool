import { CheckCircle, XCircle, Clock, TrendingUp, ClipboardList, BarChart2, FilePenLine } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ROUTES from '@/lib/routes';

// ============= MAIN COMPONENT =============
export default function AttendanceOverview({ stats, recentActivity, quickActions }: IAttendanceOverview) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentActivity items={recentActivity} />
                </div>
                <QuickActions actions={quickActions} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground mt-1">Track and manage student attendance across all classes</p>
    </div>
);

const StatsGrid = ({ stats }: { stats: IAttendanceOverview['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <StatIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    {stat.trend && (
                        <p className="text-xs text-muted-foreground mt-1">
                            <span className={stat.trendUp ? 'text-green-600' : 'text-red-500'}>{stat.trend}</span>
                            {' '}vs yesterday
                        </p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const StatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        present: <CheckCircle className="size-5 text-green-500" />,
        absent: <XCircle className="size-5 text-red-500" />,
        late: <Clock className="size-5 text-yellow-500" />,
        rate: <TrendingUp className="size-5 text-blue-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const RecentActivity = ({ items }: { items: IAttendanceOverview['recentActivity'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{item.studentName}</TableCell>
                            <TableCell className="text-muted-foreground">{item.class}</TableCell>
                            <TableCell>
                                <StatusBadge status={item.status} />
                            </TableCell>
                            <TableCell className="text-muted-foreground">{item.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        present: { label: 'Present', className: 'bg-green-100 text-green-700 border-green-200' },
        absent: { label: 'Absent', className: 'bg-red-100 text-red-700 border-red-200' },
        late: { label: 'Late', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

const QuickActions = ({ actions }: { actions: IAttendanceOverview['quickActions'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {actions.map((action, i) => (
                <Button key={i} variant="outline" className="w-full justify-start gap-2" asChild>
                    <Link href={action.href}>
                        <QuickActionIcon icon={action.icon} />
                        {action.label}
                    </Link>
                </Button>
            ))}
        </CardContent>
    </Card>
);

const QuickActionIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        mark: <ClipboardList className="size-4" />,
        reports: <BarChart2 className="size-4" />,
        corrections: <FilePenLine className="size-4" />,
    };
    return <>{icons[icon] ?? null}</>;
};

// ============= TYPES =============
interface IAttendanceOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
        trend?: string;
        trendUp?: boolean;
    }[];
    recentActivity: {
        studentName: string;
        class: string;
        status: string;
        time: string;
    }[];
    quickActions: {
        label: string;
        href: string;
        icon: string;
    }[];
}
