import { TrendingUp, Users, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function PrincipalDashboard({ kpis, departments, staffOverview, recentEvents }: IPrincipalDashboard) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <KPIGrid kpis={kpis} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DeptPerformance departments={departments} />
                <StaffOverviewTable staffOverview={staffOverview} />
            </div>
            <RecentEventsList events={recentEvents} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Principal Dashboard</h1>
        <p className="text-muted-foreground mt-1">School performance metrics and administrative overview</p>
    </div>
);

const KPIGrid = ({ kpis }: { kpis: IPrincipalDashboard['kpis'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{kpi.label}</p>
                        <KPIIcon icon={kpi.icon} />
                    </div>
                    <p className="text-3xl font-bold">{kpi.value}</p>
                    {kpi.change && (
                        <p className={`text-xs mt-1 ${kpi.changeUp ? 'text-green-600' : 'text-red-500'}`}>
                            {kpi.change} from last term
                        </p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const KPIIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        performance: <TrendingUp className="size-5 text-blue-500" />,
        students: <Users className="size-5 text-green-500" />,
        courses: <BookOpen className="size-5 text-purple-500" />,
        events: <Calendar className="size-5 text-orange-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const DeptPerformance = ({ departments }: { departments: IPrincipalDashboard['departments'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Department Performance</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Department</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Pass Rate</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {departments.map((dept, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{dept.name}</TableCell>
                            <TableCell>{dept.students}</TableCell>
                            <TableCell>{dept.passRate}%</TableCell>
                            <TableCell>
                                <PerformanceBadge passRate={dept.passRate} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const PerformanceBadge = ({ passRate }: { passRate: number }) => {
    if (passRate >= 85) return <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">Excellent</Badge>;
    if (passRate >= 70) return <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">Good</Badge>;
    return <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200">Needs Attention</Badge>;
};

const StaffOverviewTable = ({ staffOverview }: { staffOverview: IPrincipalDashboard['staffOverview'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Staff Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Classes</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {staffOverview.map((staff, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{staff.name}</TableCell>
                            <TableCell className="text-muted-foreground">{staff.department}</TableCell>
                            <TableCell>{staff.classes}</TableCell>
                            <TableCell>
                                <StaffStatusBadge status={staff.status} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const StaffStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        leave: { label: 'On Leave', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

const RecentEventsList = ({ events }: { events: IPrincipalDashboard['recentEvents'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Recent Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {events.map((event, i) => (
                <div key={i} className="flex items-start gap-3">
                    <div className="rounded bg-purple-100 text-purple-700 px-2 py-1 text-xs font-medium shrink-0">{event.date}</div>
                    <div>
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.description}</p>
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IPrincipalDashboard {
    kpis: {
        label: string;
        value: string;
        icon: string;
        change?: string;
        changeUp?: boolean;
    }[];
    departments: {
        name: string;
        students: number;
        passRate: number;
    }[];
    staffOverview: {
        name: string;
        department: string;
        classes: number;
        status: string;
    }[];
    recentEvents: {
        title: string;
        description: string;
        date: string;
    }[];
}
