import { TrendingUp, Download, FileText, Users, BarChart2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function ReportsAnalytics({ usageStats, popularReports, dataVolumeStats }: IReportsAnalytics) {
    return (
        <div className="space-y-6">
            <Header />
            <UsageStats stats={usageStats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PopularReports reports={popularReports} />
                <DataVolumeStats items={dataVolumeStats} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports Analytics</h1>
        <p className="text-muted-foreground mt-1">Insights into report usage, generation trends, and data volume</p>
    </div>
);

const UsageStats = ({ stats }: { stats: IReportsAnalytics['usageStats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <UsageIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    {stat.trend && (
                        <p className="text-xs text-muted-foreground mt-1">
                            <span className={stat.trendUp ? 'text-green-600' : 'text-red-500'}>{stat.trend}</span>
                            {' '}vs last month
                        </p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const UsageIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        reports: <FileText className="size-5 text-blue-500" />,
        downloads: <Download className="size-5 text-green-500" />,
        users: <Users className="size-5 text-purple-500" />,
        trend: <TrendingUp className="size-5 text-yellow-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const PopularReports = ({ reports }: { reports: IReportsAnalytics['popularReports'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Most Used Reports</CardTitle>
            <CardDescription>Top reports by generation count this month</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Generated</TableHead>
                        <TableHead>Downloads</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reports.map((report, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <RankBadge rank={i + 1} />
                            </TableCell>
                            <TableCell className="font-medium">{report.name}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{report.category}</Badge>
                            </TableCell>
                            <TableCell className="font-medium">{report.generatedCount}</TableCell>
                            <TableCell className="text-muted-foreground">{report.downloadCount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const RankBadge = ({ rank }: { rank: number }) => {
    const className = rank === 1
        ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
        : rank === 2
            ? 'bg-gray-100 text-gray-600 border-gray-200'
            : rank === 3
                ? 'bg-orange-100 text-orange-600 border-orange-200'
                : 'bg-muted text-muted-foreground';
    return <Badge variant="outline" className={className}>{rank}</Badge>;
};

const DataVolumeStats = ({ items }: { items: IReportsAnalytics['dataVolumeStats'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Data Volume & Performance</CardTitle>
            <CardDescription>Report generation metrics and data statistics</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <MetricIcon icon={item.icon} />
                                    <span className="font-medium text-sm">{item.metric}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">{item.value}</TableCell>
                            <TableCell>
                                <MetricStatusBadge status={item.status} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const MetricIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        storage: <BarChart2 className="size-4 text-muted-foreground" />,
        avg_time: <Clock className="size-4 text-muted-foreground" />,
        records: <FileText className="size-4 text-muted-foreground" />,
        trend: <TrendingUp className="size-4 text-muted-foreground" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const MetricStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        good: { label: 'Good', className: 'bg-green-100 text-green-700 border-green-200' },
        normal: { label: 'Normal', className: 'bg-blue-100 text-blue-700 border-blue-200' },
        high: { label: 'High', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        critical: { label: 'Critical', className: 'bg-red-100 text-red-700 border-red-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IReportsAnalytics {
    usageStats: {
        label: string;
        value: string;
        icon: string;
        trend?: string;
        trendUp?: boolean;
    }[];
    popularReports: {
        name: string;
        category: string;
        generatedCount: number;
        downloadCount: number;
    }[];
    dataVolumeStats: {
        metric: string;
        value: string;
        status: string;
        icon: string;
    }[];
}
