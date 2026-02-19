import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';

// ============= MAIN COMPONENT =============
export default function AcademicProgress({
    title,
    children,
}: IAcademicProgress) {
    // Single child — no tabs needed
    if (children.length === 1) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChildProgress {...children[0]} />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={children[0].id}>
                    <TabsList className="w-full justify-start">
                        {children.map((child) => (
                            <TabsTrigger key={child.id} value={child.id}>
                                {child.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {children.map((child) => (
                        <TabsContent key={child.id} value={child.id}>
                            <ChildProgress {...child} />
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ChildProgress = ({ recentExams, gradeTrend, teacherRemarks }: IChildProgress) => (
    <div className="space-y-4 pt-2">
        {/* Recent exam results */}
        <div className="space-y-2">
            {recentExams.map((exam) => (
                <ExamRow key={exam.id} {...exam} />
            ))}
        </div>

        {/* Grade trend */}
        <div className="flex items-center gap-2 rounded-lg border p-3">
            <span className="text-sm text-muted-foreground">Grade Trend:</span>
            <TrendIndicator trend={gradeTrend} />
        </div>

        {/* Teacher remarks */}
        {teacherRemarks && (
            <div className="rounded-lg border p-3 space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                    Teacher Remarks
                </p>
                <p className="text-sm">{teacherRemarks}</p>
            </div>
        )}
    </div>
);

const ExamRow = ({ examName, obtainedMarks, totalMarks, grade }: IExamResult) => (
    <div className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <div className="space-y-0.5">
            <p className="text-sm font-medium">{examName}</p>
            <p className="text-xs text-muted-foreground tabular-nums">
                {obtainedMarks} / {totalMarks}
            </p>
        </div>
        <Badge variant="secondary" className="text-xs">
            {grade}
        </Badge>
    </div>
);

const TrendIndicator = ({ trend }: { trend: TGradeTrend }) => {
    const config: Record<TGradeTrend, { icon: typeof TrendingUp; label: string; className: string }> = {
        up: { icon: TrendingUp, label: 'Improving', className: 'text-green-600 dark:text-green-400' },
        down: { icon: TrendingDown, label: 'Declining', className: 'text-red-600 dark:text-red-400' },
        stable: { icon: Minus, label: 'Stable', className: 'text-amber-600 dark:text-amber-400' },
    };

    const { icon: Icon, label, className } = config[trend];

    return (
        <span className={`inline-flex items-center gap-1 text-sm font-medium ${className}`}>
            <Icon className="size-4" />
            {label}
        </span>
    );
};

// ============= TYPES =============
type TGradeTrend = 'up' | 'down' | 'stable';

interface IExamResult {
    id: string;
    examName: string;
    obtainedMarks: number;
    totalMarks: number;
    grade: string;
}

interface IChildProgress {
    id: string;
    name: string;
    recentExams: IExamResult[];
    gradeTrend: TGradeTrend;
    teacherRemarks?: string;
}

interface IAcademicProgress {
    title: string;
    children: IChildProgress[];
}
