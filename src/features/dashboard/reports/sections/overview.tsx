import { FileText, CalendarDays, Users, BarChart2, ArrowRight, Download, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ROUTES from '@/lib/routes';

// ============= MAIN COMPONENT =============
export default function ReportsOverview({ stats, reportCategories, recentReports }: IReportsOverview) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <ReportCategories categories={reportCategories} />
            <RecentReports reports={recentReports} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground mt-1">Generate, view, and manage school reports</p>
        </div>
        <Button asChild>
            <Link href={ROUTES.dashboard.reports.custom}>Create Custom Report</Link>
        </Button>
    </div>
);

const StatsGrid = ({ stats }: { stats: IReportsOverview['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <StatIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    {stat.sub && (
                        <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const StatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        reports: <FileText className="size-5 text-blue-500" />,
        scheduled: <CalendarDays className="size-5 text-purple-500" />,
        users: <Users className="size-5 text-green-500" />,
        analytics: <BarChart2 className="size-5 text-yellow-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const ReportCategories = ({ categories }: { categories: IReportsOverview['reportCategories'] }) => (
    <div>
        <h2 className="text-lg font-semibold mb-4">Report Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
                <Card key={i} className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`size-10 rounded-lg flex items-center justify-center ${cat.iconBg}`}>
                                <CategoryIcon icon={cat.icon} color={cat.iconColor} />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{cat.title}</p>
                                <p className="text-xs text-muted-foreground">{cat.count} reports</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{cat.description}</p>
                        <Button variant="outline" size="sm" className="w-full gap-1 text-xs" asChild>
                            <Link href={cat.href}>
                                Browse <ArrowRight className="size-3" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
);

const CategoryIcon = ({ icon, color }: { icon: string; color: string }) => {
    const icons: Record<string, React.ReactNode> = {
        attendance: <ClipboardList className={`size-5 ${color}`} />,
        fees: <BarChart2 className={`size-5 ${color}`} />,
        academic: <FileText className={`size-5 ${color}`} />,
        custom: <CalendarDays className={`size-5 ${color}`} />,
    };
    return <>{icons[icon] ?? null}</>;
};

const RecentReports = ({ reports }: { reports: IReportsOverview['recentReports'] }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="text-base">Recent Reports</CardTitle>
                <CardDescription>Recently generated and downloaded reports</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
                <Link href={ROUTES.dashboard.reports.standard}>
                    View all <ArrowRight className="size-3" />
                </Link>
            </Button>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Generated By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Format</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reports.map((report, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{report.name}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{report.category}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{report.generatedBy}</TableCell>
                            <TableCell className="text-muted-foreground">{report.date}</TableCell>
                            <TableCell>
                                <FormatBadge format={report.format} />
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm" className="gap-1 h-7 px-2">
                                    <Download className="size-3" />
                                    Download
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const FormatBadge = ({ format }: { format: string }) => {
    const map: Record<string, string> = {
        PDF: 'bg-red-100 text-red-700 border-red-200',
        Excel: 'bg-green-100 text-green-700 border-green-200',
        CSV: 'bg-blue-100 text-blue-700 border-blue-200',
    };
    return <Badge variant="outline" className={map[format] ?? ''}>{format}</Badge>;
};

// ============= TYPES =============
interface IReportsOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
        sub?: string;
    }[];
    reportCategories: {
        title: string;
        count: number;
        description: string;
        icon: string;
        iconBg: string;
        iconColor: string;
        href: string;
    }[];
    recentReports: {
        name: string;
        category: string;
        generatedBy: string;
        date: string;
        format: string;
    }[];
}
