import { FileSearch } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function ResultTable({
    title,
    description,
    subjects,
    results,
}: IResultTable) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {results.length > 0 ? (
                    <ResultsGrid subjects={subjects} results={results} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ResultsGrid = ({
    subjects,
    results,
}: {
    subjects: string[];
    results: IStudentResult[];
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead className="w-12">Rank</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead className="w-16">Roll No</TableHead>
                    {subjects.map((subject) => (
                        <TableHead
                            key={subject}
                            className="text-center w-20"
                        >
                            {subject}
                        </TableHead>
                    ))}
                    <TableHead className="text-center w-16">Total</TableHead>
                    <TableHead className="text-center w-14">%</TableHead>
                    <TableHead className="text-center w-14">Grade</TableHead>
                    <TableHead className="text-center w-16">Result</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {results.map((result) => (
                    <ResultRow
                        key={result.id}
                        subjects={subjects}
                        {...result}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const ResultRow = ({
    rank,
    name,
    avatar,
    rollNo,
    marks,
    total,
    percentage,
    grade,
    result,
    subjects,
}: IStudentResult & { subjects: string[] }) => (
    <TableRow>
        <TableCell>
            <RankBadge rank={rank} />
        </TableCell>
        <TableCell>
            <div className="flex items-center gap-2.5">
                <Avatar size="sm">
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm whitespace-nowrap">
                    {name}
                </span>
            </div>
        </TableCell>
        <TableCell className="text-muted-foreground tabular-nums">
            {rollNo}
        </TableCell>
        {subjects.map((subject) => {
            const mark = marks[subject];
            return (
                <TableCell
                    key={subject}
                    className="text-center tabular-nums"
                >
                    {mark !== undefined ? mark : '—'}
                </TableCell>
            );
        })}
        <TableCell className="text-center font-semibold tabular-nums">
            {total}
        </TableCell>
        <TableCell className="text-center tabular-nums">
            {percentage}%
        </TableCell>
        <TableCell className="text-center">
            <Badge className={gradeVariants({ grade: normalizeGrade(grade) })}>
                {grade}
            </Badge>
        </TableCell>
        <TableCell className="text-center">
            <Badge className={resultVariants({ result })}>
                {result}
            </Badge>
        </TableCell>
    </TableRow>
);

const RankBadge = ({ rank }: { rank: number }) => {
    const isTop3 = rank <= 3;

    return (
        <span
            className={`inline-flex items-center justify-center size-6 rounded-full text-xs font-bold tabular-nums ${isTop3
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
        >
            {rank}
        </span>
    );
};

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileSearch className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No results found. Try adjusting your filters.
        </p>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

const normalizeGrade = (
    grade: string
): 'aPlus' | 'a' | 'bPlus' | 'b' | 'c' | 'f' => {
    const map: Record<string, 'aPlus' | 'a' | 'bPlus' | 'b' | 'c' | 'f'> = {
        'A+': 'aPlus',
        A: 'a',
        'B+': 'bPlus',
        B: 'b',
        C: 'c',
        F: 'f',
    };
    return map[grade] ?? 'c';
};

// ============= VARIANTS =============
const gradeVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        grade: {
            aPlus: 'bg-emerald-600 text-white hover:bg-emerald-700',
            a: 'bg-green-500 text-white hover:bg-green-600',
            bPlus: 'bg-blue-500 text-white hover:bg-blue-600',
            b: 'bg-sky-500 text-white hover:bg-sky-600',
            c: 'bg-amber-500 text-white hover:bg-amber-600',
            f: 'bg-red-600 text-white hover:bg-red-700',
        },
    },
    defaultVariants: {
        grade: 'c',
    },
});

const resultVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        result: {
            pass: 'bg-emerald-600 text-white hover:bg-emerald-700',
            fail: 'bg-red-600 text-white hover:bg-red-700',
        },
    },
    defaultVariants: {
        result: 'pass',
    },
});

// ============= TYPES =============
interface IStudentResult {
    id: string;
    rank: number;
    name: string;
    avatar?: string;
    rollNo: string;
    marks: Record<string, number>;
    total: number;
    percentage: number;
    grade: string;
    result: 'pass' | 'fail';
}

interface IResultTable {
    title: string;
    description?: string;
    subjects: string[];
    results: IStudentResult[];
}
