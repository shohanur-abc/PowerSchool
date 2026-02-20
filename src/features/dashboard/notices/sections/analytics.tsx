import { Eye, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function NoticesAnalytics({ stats, noticeEngagement, audienceReach }: INoticesAnalytics) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <EngagementTable items={noticeEngagement} />
                </div>
                <AudienceReach items={audienceReach} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Notice Analytics</h1>
        <p className="text-muted-foreground mt-1">Track engagement and reach of published notices</p>
    </div>
);

const StatsGrid = ({ stats }: { stats: INoticesAnalytics['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <AnalyticIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    {stat.change && (
                        <p className="text-xs text-muted-foreground mt-1">
                            <span className={stat.changeUp ? 'text-green-600' : 'text-red-500'}>{stat.change}</span>
                            {' '}vs last month
                        </p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const AnalyticIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        views: <Eye className="size-5 text-blue-500" />,
        reads: <BookOpen className="size-5 text-green-500" />,
        reach: <Users className="size-5 text-purple-500" />,
        trend: <TrendingUp className="size-5 text-orange-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const EngagementTable = ({ items }: { items: INoticesAnalytics['noticeEngagement'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Notice Engagement</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Notice</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-center">Views</TableHead>
                        <TableHead className="text-center">Reads</TableHead>
                        <TableHead className="text-center">Rate</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <p className="font-medium text-sm">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.publishedAt}</p>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                            </TableCell>
                            <TableCell className="text-center font-medium">{item.views}</TableCell>
                            <TableCell className="text-center font-medium">{item.reads}</TableCell>
                            <TableCell className="text-center">
                                <RateBadge rate={item.readRate} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const RateBadge = ({ rate }: { rate: number }) => {
    const className =
        rate >= 75 ? 'bg-green-100 text-green-700 border-green-200' :
        rate >= 50 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
        'bg-red-100 text-red-700 border-red-200';
    return (
        <Badge variant="outline" className={className}>{rate}%</Badge>
    );
};

const AudienceReach = ({ items }: { items: INoticesAnalytics['audienceReach'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Audience Reach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            {items.map((item, i) => (
                <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.audience}</span>
                        <span className="text-muted-foreground">{item.reached}/{item.total}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${Math.round((item.reached / item.total) * 100)}%` }}
                        />
                    </div>
                    <p className="text-xs text-muted-foreground text-right">
                        {Math.round((item.reached / item.total) * 100)}% reached
                    </p>
                </div>
            ))}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface INoticesAnalytics {
    stats: {
        label: string;
        value: string;
        icon: string;
        change?: string;
        changeUp?: boolean;
    }[];
    noticeEngagement: {
        id: string;
        title: string;
        type: string;
        publishedAt: string;
        views: number;
        reads: number;
        readRate: number;
    }[];
    audienceReach: {
        audience: string;
        reached: number;
        total: number;
    }[];
}
