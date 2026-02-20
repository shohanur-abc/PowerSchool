import { TrendingUp, TrendingDown, Award, Users, BarChart2, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ResultsAnalytics({ performanceStats, subjectAnalysis, gradeDistribution, terms, selectedTerm }: IResultsAnalytics) {
    return (
        <div className="space-y-6">
            <Header terms={terms} selectedTerm={selectedTerm} />
            <PerformanceStats stats={performanceStats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SubjectAnalysis subjects={subjectAnalysis} />
                <GradeDistribution distribution={gradeDistribution} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = ({ terms, selectedTerm }: { terms: IResultsAnalytics['terms']; selectedTerm: string }) => (
    <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Results Analytics</h1>
            <p className="text-muted-foreground mt-1">Analyse academic performance trends and insights</p>
        </div>
        <div className="min-w-[180px]">
            <Select defaultValue={selectedTerm}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Term" />
                    <ChevronDown className="size-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                    {terms.map((term) => (
                        <SelectItem key={term.value} value={term.value}>{term.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    </div>
);

const PerformanceStats = ({ stats }: { stats: IResultsAnalytics['performanceStats'] }) => (
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
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            {stat.trendUp
                                ? <TrendingUp className="size-3 text-green-500" />
                                : <TrendingDown className="size-3 text-red-500" />}
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
        avg: <BarChart2 className="size-5 text-blue-500" />,
        pass: <Award className="size-5 text-green-500" />,
        top: <TrendingUp className="size-5 text-yellow-500" />,
        students: <Users className="size-5 text-purple-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const SubjectAnalysis = ({ subjects }: { subjects: IResultsAnalytics['subjectAnalysis'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Subject-wise Performance</CardTitle>
            <CardDescription>Average scores and pass rates per subject</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Avg Score</TableHead>
                        <TableHead>Pass Rate</TableHead>
                        <TableHead>Highest</TableHead>
                        <TableHead>Lowest</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {subjects.map((subject, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{subject.name}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{subject.avgScore}</span>
                                    <ScoreBar score={subject.avgScore} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <PassRateBadge rate={subject.passRate} />
                            </TableCell>
                            <TableCell className="text-green-600 font-medium">{subject.highest}</TableCell>
                            <TableCell className="text-red-500 font-medium">{subject.lowest}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const ScoreBar = ({ score }: { score: number }) => (
    <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${score}%` }}
        />
    </div>
);

const PassRateBadge = ({ rate }: { rate: number }) => {
    const className = rate >= 90
        ? 'bg-green-100 text-green-700 border-green-200'
        : rate >= 75
            ? 'bg-blue-100 text-blue-700 border-blue-200'
            : 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return <Badge variant="outline" className={className}>{rate}%</Badge>;
};

const GradeDistribution = ({ distribution }: { distribution: IResultsAnalytics['gradeDistribution'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Grade Distribution</CardTitle>
            <CardDescription>Number of students per grade across all subjects</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Grade</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Percentage</TableHead>
                        <TableHead>Distribution</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {distribution.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <GradeBadge grade={row.grade} />
                            </TableCell>
                            <TableCell className="font-medium">{row.count}</TableCell>
                            <TableCell className="text-muted-foreground">{row.percentage}%</TableCell>
                            <TableCell>
                                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full"
                                        style={{ width: `${row.percentage}%` }}
                                    />
                                </div>
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

// ============= TYPES =============
interface IResultsAnalytics {
    terms: { value: string; label: string }[];
    selectedTerm: string;
    performanceStats: {
        label: string;
        value: string;
        icon: string;
        trend?: string;
        trendUp?: boolean;
    }[];
    subjectAnalysis: {
        name: string;
        avgScore: number;
        passRate: number;
        highest: number;
        lowest: number;
    }[];
    gradeDistribution: {
        grade: string;
        count: number;
        percentage: number;
    }[];
}
