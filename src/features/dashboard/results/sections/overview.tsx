import { BookOpen, TrendingUp, Award, Users, ArrowRight, ClipboardList, BarChart2, FileText } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ROUTES from '@/lib/routes';

// ============= MAIN COMPONENT =============
export default function ResultsOverview({ stats, recentExams, quickActions }: IResultsOverview) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RecentExams exams={recentExams} />
                </div>
                <QuickActions actions={quickActions} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Results</h1>
            <p className="text-muted-foreground mt-1">Manage exam results, grades, and academic performance</p>
        </div>
        <Button asChild>
            <Link href={ROUTES.dashboard.results.enter}>Enter Results</Link>
        </Button>
    </div>
);

const StatsGrid = ({ stats }: { stats: IResultsOverview['stats'] }) => (
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
                            {' '}vs last term
                        </p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const StatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        exams: <BookOpen className="size-5 text-blue-500" />,
        grade: <TrendingUp className="size-5 text-green-500" />,
        pass: <Award className="size-5 text-yellow-500" />,
        students: <Users className="size-5 text-purple-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const RecentExams = ({ exams }: { exams: IResultsOverview['recentExams'] }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Recent Exams</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
                <Link href={ROUTES.dashboard.results.view}>
                    View all <ArrowRight className="size-3" />
                </Link>
            </Button>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Exam Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Avg Grade</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {exams.map((exam, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{exam.name}</TableCell>
                            <TableCell className="text-muted-foreground">{exam.class}</TableCell>
                            <TableCell className="text-muted-foreground">{exam.subject}</TableCell>
                            <TableCell className="text-muted-foreground">{exam.date}</TableCell>
                            <TableCell>
                                <GradeBadge grade={exam.avgGrade} />
                            </TableCell>
                            <TableCell>
                                <ExamStatusBadge status={exam.status} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
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
        D: 'bg-orange-100 text-orange-700 border-orange-200',
        F: 'bg-red-100 text-red-700 border-red-200',
    };
    return <Badge variant="outline" className={map[grade] ?? ''}>{grade}</Badge>;
};

const ExamStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        published: { label: 'Published', className: 'bg-green-100 text-green-700 border-green-200' },
        pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        draft: { label: 'Draft', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

const QuickActions = ({ actions }: { actions: IResultsOverview['quickActions'] }) => (
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
        enter: <ClipboardList className="size-4" />,
        view: <BookOpen className="size-4" />,
        reports: <FileText className="size-4" />,
        analytics: <BarChart2 className="size-4" />,
    };
    return <>{icons[icon] ?? null}</>;
};

// ============= TYPES =============
interface IResultsOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
        trend?: string;
        trendUp?: boolean;
    }[];
    recentExams: {
        name: string;
        class: string;
        subject: string;
        date: string;
        avgGrade: string;
        status: string;
    }[];
    quickActions: {
        label: string;
        href: string;
        icon: string;
    }[];
}
