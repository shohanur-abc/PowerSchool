import { Bell, CheckCircle, FileText, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ROUTES from '@/lib/routes';

// ============= MAIN COMPONENT =============
export default function NoticesOverview({ stats, recentNotices }: INoticesOverview) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentNotices notices={recentNotices} />
                </div>
                <QuickActions />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Notices</h1>
            <p className="text-muted-foreground mt-1">Manage school-wide communications and announcements</p>
        </div>
        <Button asChild>
            <Link href={ROUTES.dashboard.notices.publish}>New Notice</Link>
        </Button>
    </div>
);

const StatsGrid = ({ stats }: { stats: INoticesOverview['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <StatIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
            </Card>
        ))}
    </div>
);

const StatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        bell: <Bell className="size-5 text-blue-500" />,
        check: <CheckCircle className="size-5 text-green-500" />,
        file: <FileText className="size-5 text-yellow-500" />,
        calendar: <CalendarDays className="size-5 text-purple-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const RecentNotices = ({ notices }: { notices: INoticesOverview['recentNotices'] }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Recent Notices</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
                <Link href={ROUTES.dashboard.notices.manage}>
                    View all <ArrowRight className="size-3" />
                </Link>
            </Button>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Audience</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {notices.map((notice) => (
                        <TableRow key={notice.id}>
                            <TableCell className="font-medium">{notice.title}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{notice.type}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{notice.audience}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{notice.publishedAt}</TableCell>
                            <TableCell>
                                <NoticeBadge status={notice.status} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const NoticeBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        published: { label: 'Published', className: 'bg-green-100 text-green-700 border-green-200' },
        draft: { label: 'Draft', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        archived: { label: 'Archived', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

const QuickActions = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {[
                { label: 'Publish Notice', href: ROUTES.dashboard.notices.publish },
                { label: 'Manage Notices', href: ROUTES.dashboard.notices.manage },
                { label: 'View Analytics', href: ROUTES.dashboard.notices.analytics },
            ].map((action, i) => (
                <Button key={i} variant="outline" className="w-full justify-between" asChild>
                    <Link href={action.href}>
                        <span>{action.label}</span>
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface INoticesOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
    }[];
    recentNotices: {
        id: string;
        title: string;
        type: string;
        audience: string;
        publishedAt: string;
        status: string;
    }[];
}
