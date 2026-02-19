import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function EntryProgress({
    title,
    description,
    subjects,
}: IEntryProgress) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <SubjectList subjects={subjects} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SubjectList = ({ subjects }: { subjects: ISubjectProgress[] }) => (
    <div className="space-y-4">
        {subjects.map((subject) => (
            <SubjectProgressRow key={subject.id} {...subject} />
        ))}
    </div>
);

const SubjectProgressRow = ({
    name,
    entered,
    total,
    status,
}: ISubjectProgress) => {
    const percentage = total > 0 ? Math.round((entered / total) * 100) : 0;

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{name}</span>
                    <Badge className={entryStatusVariants({ status })}>
                        {status}
                    </Badge>
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">
                    {entered}/{total} ({percentage}%)
                </span>
            </div>
            <Progress value={percentage} className="h-2" />
        </div>
    );
};

// ============= VARIANTS =============
const entryStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            complete: 'bg-emerald-600 text-white hover:bg-emerald-700',
            partial: 'bg-amber-500 text-white hover:bg-amber-600',
            pending: 'bg-slate-400 text-white hover:bg-slate-500',
        },
    },
    defaultVariants: {
        status: 'pending',
    },
});

// ============= TYPES =============
interface ISubjectProgress {
    id: string;
    name: string;
    entered: number;
    total: number;
    status: 'complete' | 'partial' | 'pending';
}

interface IEntryProgress {
    title: string;
    description?: string;
    subjects: ISubjectProgress[];
}
