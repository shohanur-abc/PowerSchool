import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function RecentSubmissions({
    title,
    submissions,
}: IRecentSubmissions) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-95 pr-3">
                    <div className="space-y-3">
                        {submissions.map((submission) => (
                            <SubmissionRow key={submission.id} {...submission} />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SubmissionRow = ({
    studentName,
    assignmentTitle,
    submittedAt,
    status,
}: ISubmissionItem) => (
    <div className="flex items-start justify-between gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <div className="flex-1 min-w-0 space-y-1">
            <p className="text-sm font-medium truncate">{studentName}</p>
            <p className="text-xs text-muted-foreground truncate">
                {assignmentTitle}
            </p>
            <p className="text-xs text-muted-foreground">{submittedAt}</p>
        </div>
        <Badge className={submissionStatusBadge({ status })}>
            {status}
        </Badge>
    </div>
);

// ============= VARIANTS =============
const submissionStatusBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize shrink-0',
    {
        variants: {
            status: {
                submitted:
                    'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                graded:
                    'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                late: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
            },
        },
        defaultVariants: {
            status: 'submitted',
        },
    }
);

// ============= TYPES =============
interface ISubmissionItem {
    id: string;
    studentName: string;
    assignmentTitle: string;
    submittedAt: string;
    status: 'submitted' | 'graded' | 'late';
}

interface IRecentSubmissions {
    title: string;
    submissions: ISubmissionItem[];
}
