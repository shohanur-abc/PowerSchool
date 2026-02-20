import { Search, ChevronDown, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ViewResults({ classes, exams, results, selectedClass, selectedExam }: IViewResults) {
    return (
        <div className="space-y-6">
            <Header />
            <FilterBar classes={classes} exams={exams} selectedClass={selectedClass} selectedExam={selectedExam} />
            <ResultsTable results={results} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">View Results</h1>
            <p className="text-muted-foreground mt-1">Browse and filter student exam results</p>
        </div>
        <Button variant="outline" className="gap-2">
            <Download className="size-4" />
            Export
        </Button>
    </div>
);

const FilterBar = ({ classes, exams, selectedClass, selectedExam }: Pick<IViewResults, 'classes' | 'exams' | 'selectedClass' | 'selectedExam'>) => (
    <Card>
        <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 items-end">
                <div className="space-y-1.5 min-w-[180px]">
                    <p className="text-sm font-medium">Class</p>
                    <Select defaultValue={selectedClass}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Classes" />
                            <ChevronDown className="size-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes.map((cls) => (
                                <SelectItem key={cls.value} value={cls.value}>{cls.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5 min-w-[180px]">
                    <p className="text-sm font-medium">Exam</p>
                    <Select defaultValue={selectedExam}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Exams" />
                            <ChevronDown className="size-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            {exams.map((exam) => (
                                <SelectItem key={exam.value} value={exam.value}>{exam.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5 flex-1 min-w-[200px]">
                    <p className="text-sm font-medium">Search Student</p>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input placeholder="Search by name or roll no." className="pl-9" />
                    </div>
                </div>
                <Button>Filter</Button>
            </div>
        </CardContent>
    </Card>
);

const ResultsTable = ({ results }: { results: IViewResults['results'] }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="text-base">Exam Results</CardTitle>
                <CardDescription>{results.length} results found</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Roll No.</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Marks</TableHead>
                        <TableHead>Percentage</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map((result, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <RankBadge rank={result.rank} />
                            </TableCell>
                            <TableCell className="font-medium">{result.studentName}</TableCell>
                            <TableCell className="text-muted-foreground">{result.rollNo}</TableCell>
                            <TableCell className="text-muted-foreground">{result.class}</TableCell>
                            <TableCell className="text-muted-foreground">{result.subject}</TableCell>
                            <TableCell className="font-medium">{result.marks}/{result.totalMarks}</TableCell>
                            <TableCell className="text-muted-foreground">{result.percentage}%</TableCell>
                            <TableCell>
                                <GradeBadge grade={result.grade} />
                            </TableCell>
                            <TableCell>
                                <PassFailBadge passed={result.passed} />
                            </TableCell>
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
                : '';
    return <Badge variant="outline" className={className}>{rank}</Badge>;
};

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

const PassFailBadge = ({ passed }: { passed: boolean }) => (
    <Badge variant="outline" className={passed ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'}>
        {passed ? 'Pass' : 'Fail'}
    </Badge>
);

// ============= TYPES =============
interface IViewResults {
    classes: { value: string; label: string }[];
    exams: { value: string; label: string }[];
    selectedClass: string;
    selectedExam: string;
    results: {
        rank: number;
        studentName: string;
        rollNo: string;
        class: string;
        subject: string;
        marks: number;
        totalMarks: number;
        percentage: number;
        grade: string;
        passed: boolean;
    }[];
}
