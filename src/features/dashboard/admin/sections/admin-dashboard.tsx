import { Users, UserCheck, Monitor, Server, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function AdminDashboard({ stats, systemHealth, recentEvents, quickLinks }: IAdminDashboard) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <StatsGrid stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SystemHealth indicators={systemHealth} />
                <RecentEvents events={recentEvents} />
            </div>
            <QuickLinks links={quickLinks} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">System overview and administrative controls</p>
    </div>
);

const StatsGrid = ({ stats }: { stats: IAdminDashboard['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <StatIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    {stat.sub && <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>}
                </CardContent>
            </Card>
        ))}
    </div>
);

const StatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        students: <Users className="size-5 text-blue-500" />,
        staff: <UserCheck className="size-5 text-green-500" />,
        sessions: <Monitor className="size-5 text-purple-500" />,
        uptime: <Server className="size-5 text-orange-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const SystemHealth = ({ indicators }: { indicators: IAdminDashboard['systemHealth'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">System Health</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {indicators.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                    <span className="text-sm">{item.label}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                        <HealthDot status={item.status} />
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const HealthDot = ({ status }: { status: string }) => {
    const map: Record<string, string> = {
        healthy: 'bg-green-500',
        warning: 'bg-yellow-500',
        critical: 'bg-red-500',
    };
    return <span className={`inline-block size-2.5 rounded-full ${map[status] ?? 'bg-gray-400'}`} />;
};

const RecentEvents = ({ events }: { events: IAdminDashboard['recentEvents'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Recent Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {events.map((event, i) => (
                <div key={i} className="flex items-start gap-3">
                    <EventBadge severity={event.severity} />
                    <div>
                        <p className="text-sm font-medium">{event.message}</p>
                        <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
);

const EventBadge = ({ severity }: { severity: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        info: { label: 'Info', className: 'bg-blue-100 text-blue-700 border-blue-200' },
        warning: { label: 'Warn', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        error: { label: 'Error', className: 'bg-red-100 text-red-700 border-red-200' },
        success: { label: 'OK', className: 'bg-green-100 text-green-700 border-green-200' },
    };
    const s = map[severity] ?? { label: severity, className: '' };
    return <Badge variant="outline" className={`shrink-0 ${s.className}`}>{s.label}</Badge>;
};

const QuickLinks = ({ links }: { links: IAdminDashboard['quickLinks'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {links.map((link, i) => (
                    <Button key={i} variant="outline" className="justify-start gap-2" asChild>
                        <Link href={link.href}>
                            <ExternalLink className="size-4" />
                            {link.label}
                        </Link>
                    </Button>
                ))}
            </div>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IAdminDashboard {
    stats: {
        label: string;
        value: string;
        icon: string;
        sub?: string;
    }[];
    systemHealth: {
        label: string;
        value: string;
        status: string;
    }[];
    recentEvents: {
        message: string;
        severity: string;
        timestamp: string;
    }[];
    quickLinks: {
        label: string;
        href: string;
    }[];
}
