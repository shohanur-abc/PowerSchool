import { cva } from 'class-variance-authority';
import { Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function MyResults({ results }: IMyResults) {
    return (
        <div className="@container grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 gap-4">
            {results.map((result) => (
                <ResultCard key={result.id} {...result} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const ResultCard = ({
    examName,
    totalMarks,
    obtainedMarks,
    percentage,
    grade,
    rank,
}: IResultItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{examName}</CardTitle>
            <Badge className={gradeBadge({ grade })}>{grade}</Badge>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold tabular-nums">{obtainedMarks}</span>
                <span className="text-sm text-muted-foreground">/ {totalMarks}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground tabular-nums">{percentage}%</span>
                {rank && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Trophy className="size-3.5" />
                        <span className="tabular-nums">Rank #{rank}</span>
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
);

// ============= VARIANTS =============
const gradeBadge = cva('text-[10px] px-1.5 py-0 border-transparent', {
    variants: {
        grade: {
            'A+': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
            A: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
            'B+': 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
            B: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
            C: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
            F: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
        },
    },
    defaultVariants: {
        grade: 'B',
    },
});

// ============= TYPES =============
interface IResultItem {
    id: string;
    examName: string;
    totalMarks: number;
    obtainedMarks: number;
    percentage: number;
    grade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';
    rank?: number;
}

interface IMyResults {
    results: IResultItem[];
}
